import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Feed from './pages/feed';

export default function RouteList(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <Login /> } />
                <Route path='/cadastro' element={ <Cadastro /> } />
                <Route path='/feed' element={ <Feed /> } />
             </Routes>
        </BrowserRouter>
    )
}