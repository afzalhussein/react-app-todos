import "../App.css";
function Link(props) {
  return (
    <div className="App">
      <a 
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        Learn React
      </a>
    </div>
  );
}

export default Link;
