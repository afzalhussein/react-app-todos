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
export default InputField;