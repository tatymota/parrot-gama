import { useEffect, useState } from 'react';
import '../../assets/styles/global.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.scss';
import { Header } from '../../components/header';
import Usuario from '../../components/perfilUsuario';
import profile from '../../assets/img/profile.png'
import { Button } from 'react-bootstrap';

//criação de interface para definir o tipo de informação que virá carregado no useState
interface infoInterface  {
  nome: String;
  data: String;
  text: String;
}
  //o data é do typointerface - vai conter tudo que minha interface disser (precisa ser alterado quando consumir a API)
  const data : infoInterface[] = [
    {nome:'Taty', 
    data:'00/00/0000 00:00', 
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fugiat laboriosam, nisi magni sit quisquam ducimus doloribus dignissimos veniam maiores ipsa rem doloremque, ullam sapiente esse? Sequi dolorem quae velit!'
    },
    {nome:'Paulo', 
    data:'00/00/0000 00:00', 
    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fugiat laboriosam, nisi magni sit quisquam ducimus doloribus dignissimos veniam maiores ipsa rem doloremque, ullam sapiente esse? Sequi dolorem quae velit!'
    },
  ]

  // const data : infoInterface[] = []  

function PerfilUsuario() {

  const [info, setInfo] = useState<infoInterface[]>([]); //useState é do tipo infoInterface criado lá em cima

  const renderItem = () => {
    return info.map((item: infoInterface) => (
        <ListGroup.Item>
          <div className='body'>
            <div className='leftBody'>
              <img
              src= {profile}
              width="100"
              height="100"
              className="d-block"
              />
            </div>
            <div className='rightBody'>
              <h4>{item.nome}</h4>
              <h6>{item.data}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        </ListGroup.Item>        
    )
    )
  }

  //é a primeira função a ser executada na abertura da tela. Ela carrega antes de abrir a tela.
  useEffect(() => {
    //COnsumo da APi
    setInfo(data)
  },[info]);

  return (
    <div>
        <Header />
        <main className='main'>
          <Usuario/>
          <ListGroup>
            {info.length > 0 ? renderItem() : (<ListGroup.Item><div>teste</div></ListGroup.Item>)}
          </ListGroup>
        </main>
    </div>
  );
}
      
export default PerfilUsuario;