import TextEditor from './TextEditor';
import './styles.css';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router'
import { v4 as uuidV4} from 'uuid'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Navigate to={`/documents/${uuidV4()}`} replace />} />
          <Route path='/documents/:documentId' element={<TextEditor />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
