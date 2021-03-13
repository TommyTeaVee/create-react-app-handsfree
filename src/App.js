import logo from './logo.svg';
import './App.css';

function App() {
  /**
   * When we visit this route, lets use hands
   * - You can do this for each route!
   */
  window.handsfree.update({
    hands: true,
    // weboji: false
  })
  window.handsfree.enablePlugins('browser')
  
  /**
   * Click Handlers
   */
  function startHandsfree () {window.handsfree.start()}
  function stopHandsfree () {window.handsfree.stop()}
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* These classes are included by handsfree.css */}
        <p>
          <button className="handsfree-show-when-stopped handsfree-hide-when-loading" onClick={startHandsfree}>Start handsfree</button>
          <button className="handsfree-show-when-loading">...loading...</button>
          <button className="handsfree-show-when-started" onClick={stopHandsfree}>Stop handsfree</button>
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
