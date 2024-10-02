import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This app was built by{" "}
            <a
              href="https://portfolio-project-ozge-bagci.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Øzge Bagci
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/OzgeBagci/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionary-reactproject.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
