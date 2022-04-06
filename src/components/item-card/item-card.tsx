import { FC } from 'react';

// Styles
import { API_FILES_URL } from '../../consts';
import styles from './item-card.module.scss';

type TItemCardProps = {
  product: any;
};

const ItemCard: FC<TItemCardProps> = ({ product }) => {
  const isImage = product.avatar.original.split('.')[1] !== 'mp4';
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.avatarWrapper}`}>
        <div className={`${styles.upperText}`}>
          <span>created by</span>
          <div className={`${styles.creator}`}>{product.created_by.display_name}</div>
        </div>
        <div className={`${styles.avatarOverlay}`} />
        {isImage ?
            <img className={`${styles.avatar}`} src={`${API_FILES_URL}/${product.avatar.original}`} alt='' />
          :
            <video playsInline autoPlay loop muted className={`${styles.avatar}`} src={`${API_FILES_URL}/${product.avatar.original}`} />
        }
        <div className={`${styles.lowerText}`}>
          {product.name}
        </div>
      </div>
      <div className={`${styles.itemFooter}`}>
        <div className={`${styles.available}`}>
          <span>available</span>
          <div className={`${styles.availableCount}`}>{product.quantity_available} of {product.quantity}</div>
        </div>
        <div className={`${styles.priceSection}`}>
          <span>price</span>
          <div className={`${styles.price}`}>{product.initial_price} ETH</div>
        </div>
      </div>
      
    </div>
  )
};

export default ItemCard;