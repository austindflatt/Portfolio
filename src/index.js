import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('photo-deck');
const root = ReactDOM.createRoot(document.getElementById('root'), rootElement);
root.render(<App />)