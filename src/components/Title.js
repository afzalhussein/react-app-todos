
function Title(props) {
  return (
    <p {...props}>
          {props.children}
    </p>
  );
}

export default Title;