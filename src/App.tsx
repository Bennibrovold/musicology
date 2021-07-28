import {
  BrowserRouter as Router
} from 'react-router-dom'

import Routes from './routes';
import Template from './template/';

import './default.scss';
import Main from './pages/main';

function App() {
  return (
    <Router>
      <Template>
        {/* all routes in application to our pages serves in Routes Component */}
        <Main />
      </Template>
    </Router>
  );
}

export default App;
