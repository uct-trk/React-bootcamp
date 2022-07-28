import styles from './App.module.css'
import Bootstrap from './Bootstrap';
import { Title } from './Components';
import Test from './Test';
function App() {
  return (
    <>
      <Title>Baslık</Title>
      <Title theme='dark'>Baslık</Title>
      <div className={styles.App}>
        App component
      </div>
      <Test />
      <Bootstrap />
    </>
  );
}

export default App;
