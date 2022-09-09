import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../assets/styles/global.scss';
import './index.scss';
import logo from '../../assets/img/logo-colorido.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  useEffect(() => {

  }, []);

  return (
    <div className='background'>
      <div className='formLogin'>
        <img className='logo' src={logo} alt="Logo" />
        <h2 className='login'>LOGIN</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='input' type="email" placeholder="Email" value={email} onChange={(text) => { setEmail(text.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='input' type="password" placeholder="Senha" value={senha} onChange={(text) => { setSenha(text.target.value)}} />
          </Form.Group>
          <Button className='botao' onClick={() => { console.log({email: email, senha: senha})}}> Entrar </Button>
        </Form>
        <Link className='link' to='/cadastro'>cadastre-se</Link>
      </div>
    </div>
  );
}
  
  export default Login;
  