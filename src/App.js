import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/main';
import Note from './projects/note/index';
import NoteApp from './projects/note/App/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/projects/todo" element={<Note />}></Route>
          <Route path="/projects/todo/Apppage" element={<NoteApp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
