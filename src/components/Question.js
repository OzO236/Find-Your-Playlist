import React from 'react';
import styles from '../styles/Question.module.css'
import Q1image from '../asset/Q1image.png'
import Q2image from '../asset/Q2image.png'
import Q3image from '../asset/Q3image.png'
import Q4image from '../asset/Q4image.png'
import Q5image from '../asset/Q5image.png'

function Question() {
  return(
    <div className={styles.back}>
      <div className={styles.topLayer}>

        <div className={styles.secLayer}>
          <div className={styles.pageNum}>1/6</div>
          <div className={styles.questionTitle}>오늘집을 나서는 기분은?🎶</div>
        </div>

        <div className={styles.questionImg}><img src={Q1image} alt="Qimage"/></div>
        <div className={styles.question}>신나게 갈래👻</div>
        <div className={styles.question}>조용하게 갈꺼야...😐</div>
        <div className={styles.question}>잘 모르겠어🤡</div>
      </div>
    </div>
  )
}

export default Question;