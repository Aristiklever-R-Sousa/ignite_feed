import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/Aristiklever-R-Sousa.png',
        name: 'Aristiklever R. Sousa',
        role: 'Web Full-Stack Developer Pleno',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },
        { type: 'link', content: 'jane.design/doctorcare', },
      ],
      publishedAt: new Date('2024-01-11 21:40:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/Aristiklever-R-Sousa.png',
        name: 'Maiara de Oliveira',
        role: 'Web Full-Stack Developer Pleno',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },
        { type: 'link', content: 'jane.design/doctorcare', },
      ],
      publishedAt: new Date('2024-01-10 21:40:00'),
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://github.com/Aristiklever-R-Sousa.png',
        name: 'Aristiklever R. Sousa',
        role: 'Web Full-Stack Developer Pleno',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀', },
        { type: 'link', content: 'jane.design/doctorcare', },
      ],
      publishedAt: new Date('2024-01-09 20:40:00'),
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((item) => (
            <Post
              key={item.id}
              author={item.author}
              content={item.content}
              publishedAt={item.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
