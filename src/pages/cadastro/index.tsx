import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../assets/styles/global.scss';
import './index.scss';
import logo from '../../assets/img/logo-colorido.png';

function Cadastro() {
  
  return (

   <div className='background'>
      <div className='container'>
         <img className='logo' src={logo} alt="Logo" />
         <h2 className='cadastro'>CADASTRO</h2>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="name" placeholder="nome" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="email" placeholder="email" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="password" placeholder="senha" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="password" placeholder="confirmar senha" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="name" placeholder="unidade/apartamento" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="link" placeholder="link da foto" />
         </Form.Group>
         </Form>
         <Button className='botaoEntrar'> entrar </Button>  
      </div>
   </div>
  );
}
      
export default Cadastro;
  
  