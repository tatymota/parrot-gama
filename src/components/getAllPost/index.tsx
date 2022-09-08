import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { useState } from 'react';
import { Avatar } from '../avatar';

import './index.scss';

interface Author {
    name: string;
    apartament: string;
    avatarUrl: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: string;
}

export function Post({ author, publishedAt, content }: PostProps) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    return(
        <article className='post'>
            <header className='header'>
                <div className='author'>
                    <Avatar src={author.avatarUrl} />
                </div>
                <div className='authorInfo'>
                    <h1>{author.name}</h1>
                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>
                </div>
            </header>
            <div className='content'>
                <p>{content}</p>
                {/* map(line => { */}
                {/* return <p key={line.content}>{line.content}</p>
                }) */}
            </div>
        </article>
    ) 
}

