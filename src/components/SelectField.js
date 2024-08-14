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

export default SelectField;
