import { Routes, Route } from 'react-router-dom';
import DisplayPage from './pages/DisplayPage';
import EditPage from './pages/EditPage';
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' exact element={<DisplayPage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
