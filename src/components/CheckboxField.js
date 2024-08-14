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

export default CheckboxField;