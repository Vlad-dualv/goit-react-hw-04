import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';

export default function App() {
  return (
    <div className={css.container}>
      <SearchBar />
    </div>
  );
}
