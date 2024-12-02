import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;
    if (query.trim() === '') {
      return toast.error('Empty field');
    }
    onSearch(query);
    form.reset();
  };
  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}
