import './app.css'
import { BrowserRouter} from 'react-router-dom';

import Header from './Componentes/Header'
import RoutesApp from './Router';



function App() {
  return (
    <div className="container-principal">
        <BrowserRouter>
            <Header/>
            <RoutesApp/>
        </BrowserRouter>
    </div>
  );
}

export default App;
