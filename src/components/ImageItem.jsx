import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/components/ImageItem.module.sass";

function ImageItem({ image }) {
  return (
    <div className={styles['image-item']}>
      <Link to="/ImageDetail" rel="noopener noreferrer">
        <img src={image.urls.small} alt={image.description} />
      </Link>
    </div>
  );
}

export default ImageItem;