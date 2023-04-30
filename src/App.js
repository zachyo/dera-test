import './App.css';
import { Route, Routes } from 'react-router';
import { SearchProvider } from "./contexts/searchContext";
import Homepage from './pages/homepage.component';


function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
