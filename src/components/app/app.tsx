import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../hooks';

// Styles
import styles from './app.module.scss';

// Components
import ItemCard from '../item-card/item-card';

// Utils
import { getProducts} from '../../redux/actions/products-actions';
import LazyLoad from 'react-lazyload';


function App() {
  const { products, getProdactsRequest } = useSelector(store => store.productsState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    
  }, [])
  return (
    <div className={`${styles.wrapper}`}>
      <h1>Explore</h1>
      <p>Buy and sell digital fashion NFT art</p>
      {!getProdactsRequest ? <div className={`${styles.productsWrapper}`}>
        {products.map((item) => <LazyLoad height={'100%'} offset={100} key={item.product_id}><ItemCard product={item} /></LazyLoad>)}
      </div>
      :<div>loading</div>}
      
    </div>
  );
}

export default App;
