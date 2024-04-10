import React from 'react';
import styles from '../styles/Main.module.css';
import clt from '../asset/main_playctl.png';

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.objects}>

        <div className={styles.screen}>
          <div className={styles.chats}>
            <div className={styles.chat1}>
              <p>당신의 K-POP 플리를 찾아드림</p>
            </div>
            <div className={styles.chat2}>
              <p>나에게 맞는 K-POP 플리 찾으러 가기</p>
            </div>
          </div>
          <div className={styles.visited}>
            <p>방문자 수: 500</p>
          </div>
        </div>
  
        <div className={styles.playctl}>
          <img src={clt} alt="no clt img" />
        </div>

      </div>
    </div>
  )
}

export default Main