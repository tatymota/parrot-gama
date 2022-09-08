import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Feed from './pages/feed';
import PerfilUsuario from './pages/perfilUsuario';

export default function RouteList(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login /> } />
                <Route path='/cadastro' element={ <Cadastro /> } />
                <Route path='/feed' element={ <Feed /> } />
                <Route path='/perfilusuario' element={ <PerfilUsuario /> } />
             </Routes>
        </BrowserRouter>
    )
}