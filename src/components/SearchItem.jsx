import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/components/SearchItem.module.sass";


const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "r3rmwOna551ERWUJ91Q-gR4KvoxuSPCoWWRrHF9hqWc";
const IMAGES_PER_PAGE = 3;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchItem = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const query = useQuery();
  const searchQuery = query.get("query");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setErrorMsg("");
        setLoading(true);
        const response = await axios.get(
          `${API_URL}?query=${searchQuery}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`
        );
        setImages(response.data.results);
        setLoading(false);
      } catch (error) {
        setErrorMsg("Error fetching images. Try again later.");
        setLoading(false);
      }
    };

    if (searchQuery && searchQuery.length >= 3) {
      fetchImages();
    }
  }, [searchQuery]);

  return (
    <div className={styles['image-container']}>
      {loading && <div>Loading...</div>}
      {errorMsg && <div>{errorMsg}</div>}
      <div className={styles.images}>
        {images.map((image) => (
          <div key={image.id} className={styles.image}>
            <Link to="/ImageDetail" rel="noopener noreferrer">
              <img src={image.urls.small} alt={image.alt_description}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchItem;