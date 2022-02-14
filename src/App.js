import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';
import SinglePage from './functionBased/pages/SinglePage';

const App = () => (
  <>
    <BrowserRouter>
      <h1>React Router</h1>

      <nav>
        <Link to="/todos">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route index element={<TodoContainer />} />
        <Route path="/todos" element={<TodoContainer />} />
        <Route path="/about" element={<About />}>
          <Route path="about-app" element={<SinglePage />} />
          <Route path="about-author" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
