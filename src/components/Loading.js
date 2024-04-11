import React from 'react';
import styles from '../styles/Loading.module.css'

function Loading() {
  return(
    <div className={styles.back}>
      <div className={styles.topLayer}>
        <div className={styles.loadingStn}>당신의 취향 분석중</div>
        <div className={styles.loadingCat1}>
          <span>.　♪　∧,＿∧<br/></span>
          <span>　　　(´･ω･`) ))<br/></span>
          <span>　(( (　つ　ヽ、　♪ <br/></span>
          <span>　　　〉 とノ　)))<br/></span>
          <span>　　（__ノ^(＿)<br/></span>
        </div>
        <div className={styles.loadingCat2} style={{display: "none"}}>
          <span>.　　∧＿∧　♪<br/></span>
          <span>　　(´･ω･`)　　♪<br/></span>
          <span>　　（ つ　つ<br/></span>
          <span>((　（⌒ __)　))<br/></span>
          <span>　　　し' っ<br/></span>
        </div>
      </div>
    </div>
  )
}

export default Loading;