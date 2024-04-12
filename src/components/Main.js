import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Main.module.css';
import clt from '../asset/main_playctl.png';
// firebase.js에서 db를 import
import { db } from '../firebase';
// firestore의 메서드 import
import { doc, getDoc, updateDoc } from 'firebase/firestore';


const Main = () => {

  const navigate = useNavigate();
  const [visitedUser, setvisitedUser] = useState(0);

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "items", "visited");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setvisitedUser(docSnap.data().visited);
      } else {
        console.log("일치하는 데이터가 없습니다.")
      }
    };

    fetchData(); // 컴포넌트가 마운트될 때 fetchData 함수를 호출
  }, []);

  // 데이터 수정하기
  useEffect(() => {
    const incrementVisitor = async () => {
      const docRef = doc(db, "items", "visited");
      const docSnap = await getDoc(docRef); // docSnap 가져오기
      const visited = docSnap.data().visited; // docSnap에서 visited 가져오기
      await updateDoc(docRef, {
        visited: visited + 1
      });
      setvisitedUser(visited + 1);
    };
  
    incrementVisitor();
  }, []);

  // console.log("visitedUser:", visitedUser);

  return (
    <div className={styles.container}>
      <div className={styles.objects}>

        <div className={styles.screen}>
          <div className={styles.chats}>
            <div className={styles.chat1}>
              <p>당신의 K-POP 플리를 찾아드림</p>
            </div>
            <div className={styles.chat2} onClick={()=>{navigate('../question')}}>
              <p>나에게 맞는 K-POP 플리 찾으러 가기</p>
            </div>
          </div>
          <div className={styles.visited}>
            <p>{`방문자 수: ${visitedUser}`}</p>
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