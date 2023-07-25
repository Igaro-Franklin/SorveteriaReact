import { Routes, Route} from "react-router-dom"


import Home from './pages/Home';
import Picoles from './pages/Picoles';
import Sorvete from './pages/Sorvetes';
import Contato from './pages/Contato';


function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/picoles" element={ <Picoles/> } />
            <Route path="/sorvetes" element={ <Sorvete/> } />
            <Route path="/contato" element={ <Contato/> } />
        </Routes>
    )
}

export default RoutesApp;
