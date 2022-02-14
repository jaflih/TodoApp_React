import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';
import SinglePage from './functionBased/pages/SinglePage';
import DynamicPage from './functionBased/pages/DynamicPage';
import User from './functionBased/pages/User';

const App = () => {
  const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ];

  return (
    <>
      <BrowserRouter>
        <h1>React Router</h1>

        <nav>
          <Link to="/todos">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/abouts">Dynamics routes</Link>
        </nav>
        <Routes>
          <Route index element={<TodoContainer />} />
          <Route path="/todos" element={<TodoContainer />} />
          <Route path="/about" element={<About />}>
            <Route path="about-app" element={<SinglePage />} />
            <Route path="about-author" element={<SinglePage />} />
          </Route>
          <Route path="/abouts" element={<DynamicPage users={users} />}>
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
