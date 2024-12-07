import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/layout/Layout'
import SocialPage from './pages/social/Social';

function App() {

  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<SocialPage />} />
          </Routes>
        </Layout>
      </Router>
    );
}

export default App
