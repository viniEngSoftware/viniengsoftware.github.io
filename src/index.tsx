import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

// O nome do repositório sem espaços extras
const root = createRoot(document.getElementById('root')!);

root.render(
    <BrowserRouter basename="/viniengsoftware.github.io">
        <GlobalStyle />
        <App />
    </BrowserRouter>
);
