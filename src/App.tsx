import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Resources from './pages/Resources';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <h1>Welcome!</h1>
          </Layout>
        } />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
