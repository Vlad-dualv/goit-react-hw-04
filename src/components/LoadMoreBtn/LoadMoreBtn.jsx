import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ loadMore }) {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more
    </button>
  );
}
