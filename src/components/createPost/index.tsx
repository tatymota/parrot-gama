import { FormEvent, useEffect, useState } from 'react';
import { Avatar } from '../avatar';

import './index.scss';

// interface AuthorProps {
//     author: string;
//     avatarUrl: string;
// };
// { author }: AuthorProps adicionar dentro do createPost como parametro
export function CreatePost() {
    const [newPost, setNewPost] = useState<string>("");

    useEffect(() => {

    }, []); 

    // function handleCreateNewPost(event: FormEvent) {
    //     event.preventDefault();

    //     setNewPost([...newPost, newPost.length + 1]);
    // }

    return(
        // onSubmit={handleCreateNewPost} adicionar o onSubmit para a tag form ...
        <form className='publishForm'> 
            <div>
                <Avatar src='https://github.com/shinkr99.png'/> {/*{author?.avatarUrl}*/}
                <textarea />
            </div>
            <div className='postButton'>
                <button type="submit">Publicar</button>
            </div>
        </form>
    ) 
}
