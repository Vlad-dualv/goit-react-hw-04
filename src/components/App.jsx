import css from './App.module.css';
import { useState, useEffect } from 'react';
import FetchImages from './image-api.js';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
//import Loader from './Loader/Loader';
//import ErrorMessage from './ErrorMessage/ErrorMessage';
//import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
//import ImageModal from './ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function ShowImages() {
      const results = await FetchImages(query, page);
      setImages(prevState => [...prevState, ...results]);
      setTotal(total);
    }

    ShowImages();
  }, [page, query]);

  const handleSearch = async query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery items={images} />
    </div>
  );
}
