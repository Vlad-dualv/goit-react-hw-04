import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onClick }) {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard data={item} onClick={() => onClick(item)} />
          </div>
        </li>
      ))}
    </ul>
  );
}
