// import logo from './logo.svg'; <-- Do not do this. Just refer to the image in IMG
import './App.css';
import {Suspense, lazy} from "react";
// import MyComponent from "./MyComponent";
const MyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
            <MyComponent/>
        </Suspense>
      <header className="App-header">
        <img src='./logo.svg' className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
