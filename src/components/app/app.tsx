import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../hooks';

// Styles
import styles from './app.module.scss';

// Components
import CircularProgress from '@mui/material/CircularProgress';

// Utils
import { getProducts, saveFilteredProducts} from '../../redux/actions/products-actions';
import ProductsList from '../products-list/products-list';


function App() {
  const { products, getProdactsRequest } = useSelector(store => store.productsState);
  const [isFiltered, setIsFiltered] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

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
      <header>
        <h1>Explore</h1>
        <p>Buy and sell digital fashion NFT art</p>
      </header>
      {!getProdactsRequest ? 
        <main>
          <label className={`${styles.checkboxLabel}`} htmlFor='is-available'>
            <input className={`${styles.checkbox}`} key={Math.random()} id='is-available' name='is-available' type='checkbox' checked={isFiltered} onChange={onChangeHandler} />
            Show available
          </label>
          <ProductsList />
        </main>
      :
        <div className={`${styles.productsListPreloaderWrapper}`}><CircularProgress color='inherit' /></div>
      }
      
    </div>
  );
}

export default App;
