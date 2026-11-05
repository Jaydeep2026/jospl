import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Third-party / vendor styles
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/flaticon-set.css';
import './assets/css/elegant-icons.css';
import './assets/css/animate.css';

// Global styles (design tokens, base elements, rich-text content)
import './styles/variables.css';
import './styles/base.css';

// App (each component imports its own stylesheet)
import App from './App';

// Rich-text rules were last in the original cascade, so they load after the components
import './styles/content.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
