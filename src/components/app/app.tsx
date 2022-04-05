import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../hooks';

// Styles
import styles from './app.module.scss';

// Components
import ItemCard from '../item-card/item-card';

// Utils
import { getProducts, saveFilteredProducts} from '../../redux/actions/products-actions';
import LazyLoad from 'react-lazyload';


function App() {
  const { products, filteredProducts, getProdactsRequest } = useSelector(store => store.productsState);
  const [isFiltered, setIsFiltered] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    
  }, [])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setIsFiltered(!isFiltered);
    if (e.target.checked) {
      const filteredProducts = products.filter(item => item.quantity_available > 0);
      
      dispatch(saveFilteredProducts(filteredProducts));
    } else {
      dispatch(saveFilteredProducts(products));
    }
  };

  return (
    <div className={`${styles.wrapper}`}>
      <h1>Explore</h1>
      <p>Buy and sell digital fashion NFT art</p>
      {!getProdactsRequest ? 
        <div>
          <label className={`${styles.checkboxLabel}`} htmlFor='is-available'>
            <input className={`${styles.checkbox}`} key={Math.random()} id='is-available' name='is-available' type='checkbox' checked={isFiltered} onChange={onChangeHandler} />
            Show available
          </label>
          <div className={`${styles.productsWrapper}`}>
            
            {filteredProducts.map((item) => <LazyLoad height={'100%'} offset={100} key={item.product_id}><ItemCard product={item} /></LazyLoad>)}
          </div>
        </div>
      :
        <div>Loading...</div>
      }
      
    </div>
  );
}

export default App;
