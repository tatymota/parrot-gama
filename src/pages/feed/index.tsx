import '../../assets/styles/global.scss';
import './index.scss';
import { Header } from '../../components/header';
import { Post } from '../../components/getAllPost';
import { CreatePost } from '../../components/createPost';

interface infoInterface {
  id: number;
  author: {
    name: string;
    apartament: string;
    avatarUrl:string;
  };
  publishedAt: Date;
  content: string;
}

const posts : infoInterface[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/shinkr99.png',
      name: 'Shin Gama',
      apartament: 'apê 53'
    },
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fugiat laboriosam, nisi magni sit quisquam ducimus doloribus dignissimos veniam maiores ipsa rem doloremque, ullam sapiente esse? Sequi dolorem quae velit!',
    
    publishedAt: new Date('2022-09-03 16:46:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/tatymota.png',
      name: 'Taty Mota',
      apartament: 'apê 103'
    },
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate fugiat laboriosam, nisi magni sit quisquam ducimus doloribus dignissimos veniam maiores ipsa rem doloremque, ullam sapiente esse? Sequi dolorem quae velit!',
    publishedAt: new Date('2022-09-01 16:46:00'),
  },
];  


function Feed() {
  return (
    <div>
        <Header />
        
        <div className='wrapper'>
            <CreatePost />
            <main>
            {posts.map((post: infoInterface)=> {
                return (
                <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />
                )
            })}
            </main>
        </div>
    </div>
  )
};   
export default Feed;
  