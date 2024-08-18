import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams, useSearchParams, BrowserRouter as Router, } from 'react-router-dom';

import progress from './progress.svg';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/progress-bar"
          element={<Home />}
        />
        <Route
          path="/progress-bar/:id"
          element={<Test />}
        />
      </Routes>
    </Router>
  );
}

function Home() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
          <p>
            <img src={progress} className='Progress-Bar' alt='bar'/>
            <object type="image/svg+xml" data="button.svg?fill=red">
                <param name="fill" value="blue" />
                <param name="stroke" value="red" />
            </object>
          </p>
        </header>
        </div>
    );
}

function Test() {
    const { id } = useParams();
    return (
        <p>Test Element {id}</p>
    );
  }

export default App;
