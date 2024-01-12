import styles from './Avatar.module.css';

type Avatar = {
  hasBorder?: boolean,
  src: string,
  alt?: string,
}

export function Avatar({ hasBorder = true, src, alt }: Avatar) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
