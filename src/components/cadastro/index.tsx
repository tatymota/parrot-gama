import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../assets/styles/global.scss';
import './index.scss';
import logo from '../../assets/img/logo-colorido.png';

function Cadastro() {
  
  return (

    <div className='container'>
      <div className='logo'>
      <img src={logo} alt="Logo" />    
      </div>
     <div className='cadastro'>
      <h2>CADASTRO</h2>
     </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="name" placeholder="nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="email" placeholder="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="password" placeholder="senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="password" placeholder="confirmar senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="name" placeholder="unidade/apartamento" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="link" placeholder="link da foto" />
      </Form.Group>
     </Form>
     <Button className='botaoEntrar'> entrar </Button>
     </div>

    
    );
  }
  
  export default Cadastro;
  
  