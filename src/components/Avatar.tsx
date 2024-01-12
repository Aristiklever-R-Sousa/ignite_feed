import styles from './Avatar.module.css';

type Avatar = {
  src: string,
  hasBorder?: boolean,
}

export function Avatar({ src, hasBorder = true }: Avatar) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
