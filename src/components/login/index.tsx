import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './index.scss';
import '../../assets/styles/global.scss';
import logo from '../../assets/img/logo-colorido.png';

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
         <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Button className='botaoEntrar'> Entrar </Button>
    </Form>
    <div>
        <p >cadastre-se</p>
      </div>
    </div>

    
    );
  }
  
  export default Login;
  