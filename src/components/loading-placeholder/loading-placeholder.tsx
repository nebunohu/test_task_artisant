import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Styles
import styles from './loading-placeholder.module.scss';

const LoadingPlaceholder: FC = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <CircularProgress color='inherit' />    
    </div>
  )
};

export default LoadingPlaceholder;