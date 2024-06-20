import logo from './logo.svg';
import './App.css';
import Link from './components/Link';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title alt="Edit">Edit <code>src/App.js</code> and save to reload.</Title>
        <Link href="https://reactjs.org" title="Click to visit" alt="reactjs.org">Link React</Link>
      </header>
    </div>
  );
}

export default App;
