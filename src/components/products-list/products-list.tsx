import { FC } from "react";
import { useSelector } from "../../hooks";

// components
import ItemCard from "../item-card/item-card";
import LazyLoad from "react-lazyload";
import LoadingPlaceholder from "../loading-placeholder/loading-placeholder";

// Styles
import styles from './products-list.module.scss';

const ProductsList: FC = () => {
  const { filteredProducts } = useSelector(store => store.productsState);

  return (
    <div className={`${styles.productsWrapper}`}>
            
      {filteredProducts.map((item) => {
        return (
          <LazyLoad height='100%' offset={[200,0]} placeholder={<LoadingPlaceholder />} debounce={500} key={item.product_id}>
            <ItemCard product={item} />
          </LazyLoad>
        );
      })}
    </div>
  )
}

export default ProductsList;