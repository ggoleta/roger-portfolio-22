import { Header } from './components/Header';
import { About } from './components/About';
import styles from './App.module.css';
import './global.css';
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <About />
        </main>
        <aside></aside>
      </div>
    </>
  )
}

export default App
