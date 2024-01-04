import { Header } from "./components/Header";

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          mainzao
        </main>
      </div>
    </>
  )
}
