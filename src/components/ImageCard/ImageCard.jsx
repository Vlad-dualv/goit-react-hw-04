import css from './ImageCard.module.css';

export default function ImageCard({
  data: { urls, likes, user, description },
  onClick,
}) {
  return (
    <>
      <div onClick={() => onClick(urls.regular)}>
        <img src={urls.small} alt={description} className={css.img} />
      </div>
      <div className={css.description}>
        <p>Likes: {likes}</p>
        <p>Published by: {user.name}</p>
      </div>
    </>
  );
}
