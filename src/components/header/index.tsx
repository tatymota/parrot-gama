import './index.scss';
import logo from '../../assets/img/logo-header.png';

export function Header() {
    return (
        <header className='Header'>
            <img src={logo} alt="Website logo" />
            <div>
                <p>Olá, usuário</p>
                <button>sair</button>
            </div>
        </header>
    );
}