import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main';
import Note from './projects/note/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/projects/note" element={<Note />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
