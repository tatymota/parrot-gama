import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../assets/styles/global.scss';
import './index.scss';
import logo from '../../assets/img/logo-colorido.png';
import { useState } from 'react';

function Cadastro() {
  
   const [nome, setNome] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [senha, setSenha] = useState<string>("");
   const [confirmarSenha, setConfirmarSenha] = useState<string>("");
   const [unidade, setUnidade] = useState<string>("");

   // const novoCadastro = async (event) => {
   //    event.preventDefault();
      
   //    const payload = {
   //       nome,
   //       email,
   //       senha,
   //       confirmarSenha,
   //       unidade,
   //    };

   //    try {
   //       const response = await Cadastro(payload);
   //    if(response.status !==201) {
   //      return alert("Cadastro efetuado com sucesso :)")
   //    }

   //  } catch (error) {
   //    return alert("Ops, algo deu errado")
   //  }
  
   // }

  return (

   <div className='background'>
      <div className='formCadastro'>
         <img className='logo' src={logo} alt="Logo" />
         <h2 className='cadastro'>CADASTRO</h2>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="nome" value={nome} onChange={(text) => { setNome(text.target.value)}}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="email" placeholder="email" value={email} onChange={(text) => { setEmail(text.target.value)}}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="password" placeholder="senha" value={senha} onChange={(text) => { setSenha(text.target.value)}} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="password" placeholder="confirmar senha" value={confirmarSenha} onChange={(text) => { setConfirmarSenha(text.target.value)}} />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="unidade/apartamento" value={unidade} onChange={(text) => { setUnidade(text.target.value)}}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='input' type="text" placeholder="link da foto" />
         </Form.Group>
         </Form>
         <Button className='botaoEntrar' onClick={() => { console.log({name: nome, email: email, senha: senha, unidade: unidade})}}> entrar </Button>  
      </div>
   </div>
  );
}
      
export default Cadastro;
  
  