import logoSemPost from '../../assets/img/logo-sem-post.png';
import './index.scss';

export default function SemPost() {
    return (
        <div className='noPost'>
            <p>Você ainda não fez nenhuma publicação :(</p>
            <img src={logoSemPost} alt='logo' />
        </div>
    )
}