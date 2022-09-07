import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../assets/styles/global.scss';
import './index.scss';
import logo from '../../assets/img/logo-colorido.png';
import { useEffect, useState } from 'react';

function Cadastro() {
  
   const [nome, setNome] = useState<string>("");

   useEffect(() => {
      // setNome('Taty')
 
    },[]);

  return (

   <div className='background'>
      <div className='container'>
         <img className='logo' src={logo} alt="Logo" />
         <h2 className='cadastro'>CADASTRO</h2>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="nome" value={nome} onChange={(text) => { setNome(text.target.value)}}/>
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
            <Form.Control className='input' type="text" placeholder="unidade/apartamento" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="link da foto" />
         </Form.Group>
         </Form>
         <Button className='botaoEntrar' onClick={() => { console.log({name: nome})}}> entrar </Button>  
      </div>
   </div>
  );
}
      
export default Cadastro;
  
  