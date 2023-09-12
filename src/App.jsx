import { Post } from './components/Post'; 
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';// Name Export
import styles from './App.module.css';

// author: { avatar_url: "", name: "", role: "",}
// publisheadAT: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/68RS.png',
      name: 'Robson Santos',
      role: 'Web Developer'
    },
    content: [

          {type: 'paragraph', content: 'Fala galeraa 👋',},
          {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: '👉 jane.design/doctorcare'},            
                            
    ],
    publisheadAT: new Date('2023-09-05 16:40:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/vitorrvidal.png',
      name: 'Vitor Vidal', 
      role: 'Web Developer'
    },
    content: [

          {type: 'paragraph', content: 'Fala galeraa 👋',},
          {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: '👉 jane.design/doctorcare'},            
                            
    ],
    publisheadAT: new Date('2023-09-05 16:53:00'),
  },
];

// Iteração: repetir alguma coisa. Criar uma estrutura de repetição.

export function App() {
   return (
   <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
      
        <main>
             {posts.map(post => {
              return (
              
                <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publisheadAT={post.publisheadAT}             
                />
              )
             })}    
        </main>
      </div>
     
   </div>
  )
}

//export default App // Default Export 
