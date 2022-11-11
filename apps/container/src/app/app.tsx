import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Vision = React.lazy(() => import('vision/Module'));

const Source = React.lazy(() => import('source/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <h1>Container shell App, this loads the micro front-ends</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/vision">Vision</Link>
        </li>

        <li>
          <Link to="/source">Source</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/vision" element={<Vision />} />

        <Route path="/source" element={<Source />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
