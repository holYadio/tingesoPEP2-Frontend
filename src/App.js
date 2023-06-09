import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import FileUploadAcopio from './components/FileUploadAcopio';
import FileUploadLaboratorio from './components/FileUploadLaboratorio';
import ListAcopio from './components/ListAcopio';
import ListLaboratorio from './components/ListLaboratorio';
import ListProveedor from './components/ListProveedor';
import Planilla from './components/Planilla';
import NavBar from './layouts/NavBar';
import NewProveedor from './components/NewProveedor';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route index element={<HomeComponent />} />
            <Route path="planilla" element={<Planilla />} />
            <Route path="list-acopio" element={<ListAcopio />} />
            <Route path="list-laboratorio" element={<ListLaboratorio />} />
            <Route path="list-proveedor" element={<ListProveedor />} />
            <Route path="file-upload-acopio" element={<FileUploadAcopio />} />
            <Route path="file-upload-laboratorio" element={<FileUploadLaboratorio />} />
            <Route path="new-proveedor" element={<NewProveedor />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
