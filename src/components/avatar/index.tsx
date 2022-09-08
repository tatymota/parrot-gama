import './index.scss';

interface imgAvatarProps {
    src: string,
}

export function Avatar({src}: imgAvatarProps) { //tirar o "= imgString" quando adicionar a API
    return (
        <img className='avatar' src={src} alt="Avatar"/>
    )   
}

