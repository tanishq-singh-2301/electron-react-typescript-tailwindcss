import './styles/global.css';
import { createRoot } from 'react-dom/client';
import Router from './router';

const div: HTMLElement = document.getElementById('root')!;
const root = createRoot(div);

root.render(<Router />);