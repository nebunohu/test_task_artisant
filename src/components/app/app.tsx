import { useEffect } from 'react';

// Styles
import styles from './app.module.scss';

// Components
import ItemCard from '../item-card/item-card';
import { getProducts } from '../../utils/get-products';


function App() {
  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div className={`${styles.wrapper}`}>
      <h1>Explore</h1>
      <p>Buy and sell digital fashion NFT art</p>
      <ItemCard />
    </div>
  );
}

export default App;
