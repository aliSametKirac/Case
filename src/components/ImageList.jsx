import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/components/ImageList.module.sass";
import ImageItem from './ImageItem';

const API_URL = 'https://api.unsplash.com/photos';
const API_KEY = 'r3rmwOna551ERWUJ91Q-gR4KvoxuSPCoWWRrHF9hqWc';

function ImageList() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const page = 1;
  const perPage = 30;

  useEffect(() => {
    fetch(`${API_URL}?client_id=${API_KEY}&page=${page}&per_page=${perPage}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setImages(data);
        } else {
          console.error('Expected an array response but did not receive one.');
          setImages([]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setImages([]);
      });
  }, [page]);

  return (
    <div className={styles.imageList}>
      {images.map((image) => (
        <ImageItem key={image.id} image={image} onClick={() => navigate(`/photo/${image.id}`)} />
      ))}
    </div>
  );
}

export default ImageList;