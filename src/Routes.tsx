import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

export default function RouteList(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <Login /> } />
                <Route path='/cadastro' element={ <Cadastro /> } />
             </Routes>
        </BrowserRouter>
    )
}