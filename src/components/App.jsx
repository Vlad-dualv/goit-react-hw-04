import css from './App.module.css';
import { useState, useEffect } from 'react';
import FetchImages from './image-api.js';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function ShowImages() {
      if (!query.trim()) return;
      setLoading(true);
      setError(false);
      try {
        const { results, total } = await FetchImages(query, page);
        setImages(prevState => [...prevState, ...results]);
        setTotal(total);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    ShowImages();
  }, [page, query]);

  const handleSearch = async query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotal(0);
  };

  const loadMore = async () => {
    setPage(page + 1);
  };

  const clickModal = image => {
    setSelected(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelected(null);
    setIsOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onClick={clickModal} />
      )}
      {images.length > 0 && !loading && images.length < total && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
      {selected && (
        <ImageModal image={selected} isOpen={isOpen} onClose={closeModal} />
      )}
    </div>
  );
}
