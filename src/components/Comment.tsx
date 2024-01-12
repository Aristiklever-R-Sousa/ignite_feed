import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

type CommentType = {
  id: string,
  content: string,
  onDeleteComment: (id: string) => void,
}

export function Comment({ id, content, onDeleteComment }: CommentType) {

  const [aplauseCont, setAplauseCont] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Aristiklever-R-Sousa.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Aristiklever Rodrigues Sosua</strong>
              <time title='11 de Janeiro às 18:30' dateTime='2024-01-11 18:30:03'>Cerca de 1h atrás</time>
            </div>

            <button onClick={() => onDeleteComment(id)} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
          {/* <p>Muito bom Devon, parabéns!! 👏👏</p> */}
        </div>

        <footer>
          <button onClick={() => setAplauseCont((state) => state + 1)}>
            <ThumbsUp />
            Aplaudir <span>{aplauseCont}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
