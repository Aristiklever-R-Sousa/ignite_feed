import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={{
              name: "Aristiklever R. Sousa",
              position: "Web Full-Stack Developer Pleno"
            }}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dictum nulla. Nulla quis urna et arcu imperdiet suscipit. Duis sed faucibus ligula, venenatis lobortis leo."
          />
          <Post
            author={{
              name: "Aristiklever R. Sousa",
              position: "Web Full-Stack Developer Pleno"
            }}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dictum nulla. Nulla quis urna et arcu imperdiet suscipit. Duis sed faucibus ligula, venenatis lobortis leo."
          />
        </main>
      </div>
    </>
  )
}
