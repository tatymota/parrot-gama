import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';

export default function Routes(){
    return(
        <BrowserRouter>
         <WrapperRoutes>
            <Route path='/login' element={ <Login /> } />
            <Route path='/cadastro' element={ <Cadastro /> } />
        </WrapperRoutes>
        </BrowserRouter>
    )
}