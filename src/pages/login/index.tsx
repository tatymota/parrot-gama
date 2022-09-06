import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../assets/styles/global.scss';
import './index.scss';
import logo from '../../assets/img/logo-colorido.png';
import { Link } from 'react-router-dom';


function Login() {
  
  return (

    <div className='container'>
      <div className='logo'>
      <img src={logo} alt="Logo" />    
      </div>
     <div className='login'>
      <h2>LOGIN</h2>
     </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control className='input' type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className='input' type="password" placeholder="Senha" />
      </Form.Group>
      <Button className='botao'> Entrar </Button>
    </Form>
    <div>
        <Link className='link' to='/cadastro'>cadastre-se</Link>
      </div>
    </div>

    
    );
  }
  
  export default Login;
  