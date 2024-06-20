import "../App.css";
function Link(props) {
  return (
    <div className="App">
      <a title={props.title}
        className="App-link"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default Link;
