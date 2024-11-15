import { Toaster } from 'react-hot-toast';
import App from './App.jsx'; // Component imports
import './index.css'; // CSS imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  <Toaster/>
  </BrowserRouter>
);