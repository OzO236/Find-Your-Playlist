import React from 'react';
import styles from '../styles/Question.module.css'

function Question() {
  return(
    <div className={styles.back}>
      <div className={styles.topLayer}>
        <div className={styles.pageNum}>1/6</div>
        <div className={styles.ex}></div>
        <div className={styles.questionTitle}>오늘집을 나서는 기분은? 🎶</div>
        <div className={styles.questionImg}><img src="" alt=""/></div>
        <div className={styles.question}>신나게 갈래👻</div>
        <div className={styles.question}>조용하게 갈꺼야...😐</div>
        <div className={styles.question}>잘 모르겠어🤡</div>
      </div>
    </div>
  )
}

export default Question;