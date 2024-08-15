const BASE_URL = process.env.API_URL || "http://localhost:3333/list"; // Use environmental variables

async function handleResponse(response) {
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(errorDetails.message || "Failed to fetch data");
  }
  return response.json();
}

export async function getList() {
  try {
    const response = await fetch(BASE_URL);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching list:", error);
    throw error; // rethrow after logging
  }
}

export async function setItem(item) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error setting list item:", error);
    throw error; // rethrow after logging
  }
}
