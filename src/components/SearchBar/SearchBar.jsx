import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
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
