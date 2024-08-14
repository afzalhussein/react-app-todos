import React, { useState, useReducer, useCallback } from "react";
import "./App.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      apple: "",
      count: 100,
      name: "",
      "gift-wrap": false,
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};
const InputField = ({
  label,
  name,
  onChange,
  value,
  type = "text",
  ...props
}) => (
  <label>
    <p>{label}</p>
    <input
      name={name}
      onChange={onChange}
      value={value}
      type={type}
      {...props}
    />
  </label>
);
const SelectField = ({ label, name, value, onChange, options }) => (
  <label>
    <p>{label}</p>
    <select name={name} value={value} onChange={onChange}>
      <option value="">--Please choose an option--</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

const CheckboxField = ({ label, name, checked, onChange, ...props }) => (
  <label>
    <p>{label}</p>
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  </label>
);

function App() {
  const [formData, setFormData] = useReducer(formReducer, { count: 100 });
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  }, []);
  const handleChange = useCallback((event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }, []);

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting && (
        <div aria-live="polite">
          You're submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <InputField
            label="Name"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset disabled={submitting}>
          <SelectField
            label="Apples"
            name="apple"
            onChange={handleChange}
            value={formData.apple || ""}
            options={[
              { label: "Fuji", value: "fuji" },
              { label: "Jonathan", value: "jonathan" },
              { label: "Honey Crisp", value: "honey-crisp" },
            ]}
          />

          <InputField
            label="Count"
            type="number"
            name="count"
            onChange={handleChange}
            step="1"
            value={formData.count || ""}
          />
          <CheckboxField
            label="Gift Wrap"
            name="gift-wrap"
            onChange={handleChange}
            checked={formData["gift-wrap"] || false}
            disabled={formData.apple !== "fuji"}
          />
        </fieldset>
        <button type="submit" className="" disabled={submitting}>
          Submit
        </button>
        <button
          type="button"
          onClick={() => setFormData({ reset: true })}
          disabled={submitting}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;
