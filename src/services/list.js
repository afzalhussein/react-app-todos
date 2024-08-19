const BASE_URL = process.env.API_URL || "http://localhost:3333/list";

// Handle response and throw detailed errors
async function handleResponse(response) {
  if (!response.ok) {
    const errorDetails = await response.json();
    const error = new Error(errorDetails.message || "Failed to fetch data");
    error.status = response.status;
    throw error;
  }
  return response.json();
}

// Retry mechanism for temporary network issues
async function withRetry(fn, retries = 3) {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && error.status >= 500) {
      console.warn(`Retrying... (${3 - retries + 1})`);
      return withRetry(fn, retries - 1);
    }
    throw error;
  }
}

// Timeout mechanism for requests
async function fetchWithTimeout(resource, options = {}, timeout = 8000) {
  const controller = new AbortController();
  const { signal } = controller;
  const fetchPromise = fetch(resource, { ...options, signal });

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    return await fetchPromise;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Generic API request function
async function apiRequest(endpoint, options = {}, retries = 3) {
  return withRetry(
    () => fetchWithTimeout(`${BASE_URL}${endpoint}`, options),
    retries
  );
}

// Fetch list from server
export async function getList() {
  try {
    const response = await apiRequest("/");
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching list:", error);
    throw error;
  }
}

// Post a new item to the list
export async function setItem(item) {
  try {
    const response = await apiRequest("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error setting list item:", error);
    throw error;
  }
}

// Delete an item from the list
export async function deleteItem(itemId) {
  try {
    const response = await apiRequest(`/${itemId}`, {
      method: "DELETE",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error deleting list item:", error);
    throw error;
  }
}
