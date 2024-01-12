import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

type Author = {
  avatarUrl: string,
  role: string,
  name: string,
}

type PostType = {
  author: Author,
  content: {
    type: string;
    content: string;
  }[],
  publishedAt: Date,
}

export function Post({ author, content, publishedAt }: PostType) {
  const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    // timeStyle: 'full',
  }).format(publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState<{ content: string }[] | []>([]);
  const [contentComment, setContentComment] = useState('');

  const addComment = () => {
    setComments([
      ...comments,
      {
        content: contentComment,
      }
    ]);

    setContentComment('');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, idx) => (
          item.type === 'paragraph' ?
            <p key={'content-' + idx}>{item.content}</p> :
            <p key={'content-' + idx}><a>{item.content}</a></p>
        ))}
        {/* <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p> */}
      </div>

      <form onSubmit={(e) => { e.preventDefault(); addComment(); }} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={contentComment}
          placeholder='Deixe um comentário'
          onChange={({ target }) => setContentComment(target.value)}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((item, idx) => (
          <Comment
            key={idx}
            content={item.content}
          />
        ))}
      </div>

    </article>
  );
}
