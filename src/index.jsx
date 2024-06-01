import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/components/HomePage';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
