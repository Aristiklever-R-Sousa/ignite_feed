import { ChangeEvent, InvalidEvent, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

type Author = {
  avatarUrl: string,
  role: string,
  name: string,
}

export type PostType = {
  id: string,
  author: Author,
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[],
  publishedAt: Date,
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    // timeStyle: 'full',
  }).format(post.publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState<{ id: string, content: string }[] | []>([]);
  const [contentComment, setContentComment] = useState('');

  const addComment = () => {
    setComments([
      ...comments,
      {
        id: 'comment-' + comments.length + 1,
        content: contentComment,
      }
    ]);

    setContentComment('');
  }

  const deleteComment = (id: string) => {
    const commentsWithoutDeleteOne = comments.filter(item => item.id !== id);

    setComments(commentsWithoutDeleteOne);

  }

  const handleChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentComment(event.target.value);
    event.target.setCustomValidity('');
  }

  const handleInvalidTextarea = (event: InvalidEvent<HTMLTextAreaElement>) => {
    // const element = target as EventTarget & HTMLInputElement;
    event.target.setCustomValidity('É necessário preencher!');
  }

  const isTextareaEmpty = contentComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item, idx) => (
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
          onChange={handleChangeTextarea}
          required
          onInvalid={handleInvalidTextarea}
        />

        <footer>
          <button type='submit' disabled={isTextareaEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((item) => (
          <Comment
            key={item.id}
            id={item.id}
            content={item.content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>

    </article>
  );
}
