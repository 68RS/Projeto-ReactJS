import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export const Comment = ({ content, onDeleteComment }) => {
  const handleDeleteComment = () => {
    onDeleteComment(content);
  } 

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/68RS.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Robson Santos</strong>
              <time title='28 de agosto às 11:21h' dateTime='2023-08-28'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>28</span>
            </button>
        </footer>
      </div>

    </div>
  )
}

