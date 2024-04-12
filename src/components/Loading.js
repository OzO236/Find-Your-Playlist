import React, { useEffect, useState } from 'react';
import styles from '../styles/Loading.module.css'

function Loading() {
  const [showCat1, setShowCat1] = useState(true); // loadingCat1의 표시 여부 상태
  const [showCat2, setShowCat2] = useState(false); // loadingCat2의 표시 여부 상태

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCat1(!showCat1); // loadingCat1의 표시 여부를 반전
      setShowCat2(!showCat2); // loadingCat2의 표시 여부를 반전
    }, 1000); // 1초마다 변경

    return () => clearInterval(interval); // 언마운트 시 interval 클리어
  }, [showCat1, showCat2]);  

  return(
    <div className={styles.back}>
      <div className={styles.topLayer}>
        <div className={styles.loadingStn}>당신의 취향 분석중</div>
        <div className={styles.loadingCat1} style={{ display: showCat1 ? 'block' : 'none' }}>
          <span>.　♪　∧,＿∧<br/></span>
          <span>　　　(´･ω･`) ))<br/></span>
          <span>　(( (　つ　ヽ、　♪ <br/></span>
          <span>　　　〉 とノ　)))<br/></span>
          <span>　　（__ノ^(＿)<br/></span>
        </div>
        <div className={styles.loadingCat2} style={{ display: showCat2 ? 'block' : 'none' }}>
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