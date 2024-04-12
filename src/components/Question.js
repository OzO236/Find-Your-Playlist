import React, { useCallback, useEffect, useState } from 'react';
import styles from '../styles/Question.module.css'
import Q1image from '../asset/Q1image.png'
import Q2image from '../asset/Q2image.png'
import Q3image from '../asset/Q3image.png'
import Q4image from '../asset/Q4image.png'
import Q5image from '../asset/Q5image.png'
import { useNavigate  } from 'react-router-dom';
import Loading from './Loading';

const category = [
  {
    pageNum : 1,
    category1 : [0,1,2,3,4,5],
    category2 : [6,7],
    category3 : [8,9,10]
  },
  {
    pageNum : 2,
    category1 : [1,2,8,10],
    category2 : [0,4,7],
    category3 : [3,5,6,9]
  },
  {
    pageNum : 3,
    category1 : [0,1,2,3,7,10],
    category2 : [4,5,6,8,9]
  },
  {
    pageNum : 4,
    category1 : [3,5,6,9],
    category2 : [0,7,8,10],
    category3 : [1,2,4]
  },
  {
    pageNum : 5,
    category1 : [1,4],
    category2 : [0,5,6,7,10],
    category3 : [2,3,8,9]
  }
]


const questionList = [
  { 
    pageNum : 1,
    title1: "오늘 집을 나서는 기분은?🎶",
    title2: "",
    imgURL: Q1image,
    questions: ["신나게 갈래👻", "조용하게 갈꺼야...😐", "잘 모르겠어🤡"]
  },
  { 
    pageNum : 2,
    title1: "오늘의 기분을 색으로", 
    title2: "표현한다면? 🌈",
    imgURL: Q2image,
    questions: ["핑크색️🩷", "파랑색💙", "회색🩶"]
  },
  { 
    pageNum : 3,
    title1: "오늘 과몰입 가능?😎",
    title2: "",
    imgURL: Q3image,
    questions: ["좋아! 과몰입은 내 전문😏", "아니.. 오늘 그럴 기분 아니야..🤨"]
  },
  { 
    pageNum : 4,
    title1: "오늘 카페에서 마시고 싶은",
    title2: "음료를 고른다면? 🧃",
    imgURL: Q4image,
    questions: ["버터 가득한 콜드브루☕", "네잎클로버를 띄운 녹차🍀", "상큼한 무지개 스무디🍹"]
  },
  { 
    pageNum : 5,
    title1: "카페에서 하고 싶은 것은? 🧐",
    title2: "",
    imgURL: Q5image,
    questions: ["친구와 폭풍 수다🗣️", "생각 없이 멍 때리기😶‍🌫️", "열정 가득 할 일 끝내기🔥"]
  }
]


function Question({setResultData}) {
  const [currPage, setCurrPage] = useState(0);
  const navigate  = useNavigate (); 
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 관리하는 상태

  const handleQuestionClick = (selectedCategory) => {
    // 선택한 카테고리를 누적하여 저장
    setSelectedCategories([...selectedCategories, selectedCategory]);

    // 현재 페이지가 마지막 페이지가 아닌 경우 다음 페이지로 이동
    if (currPage < questionList.length - 1) {
      setCurrPage(currPage + 1);
    }
  };

  useEffect(() => {
    if (selectedCategories.length === questionList.length) {
      // 마지막 페이지인 경우 결과를 계산하고 출력
      const categoryCounts = {};
      selectedCategories.forEach(categories => {
        categories.forEach(category => {
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });
      });

      // 결과 데이터에서 가장 큰 값을 가지는 인덱스 찾기(같은경우 작은인덱스 값 출력)
      let maxCategory = null;
      let maxCount = -1;
      Object.keys(categoryCounts).forEach(category => {
        if (categoryCounts[category] > maxCount) {
          maxCategory = category;
          maxCount = categoryCounts[category];
        }
      });

      // 결과 데이터 설정 -> playlist 컴포넌트에는 설정된 변수가 props로 전달된 상태 
      setResultData(maxCategory);
  
      console.log("결과 데이터:", categoryCounts);
      
      setIsLoading(true);

     // 일정 시간이 지난 후에 navigate 함수 호출
      setTimeout(() => {
        setIsLoading(false); // 로딩 상태를 false로 변경
        navigate('/result'); // 결과 페이지로 이동
      }, 4000); // 4초 후에 navigate 함수 호출
    }
  }, [selectedCategories, setResultData, navigate]);


 //나.. 확인용
  useEffect(() => {
    console.log("selectedCategories", selectedCategories);
  }, [selectedCategories]);


  if (isLoading) {
    return (<><Loading/></>); // 로딩 중에는 로딩 컴포넌트만 표시
  }

  // 로딩 중이 아니면 질문 리스트를 표시
  return (
    <div className={styles.back}>
      <div className={styles.topLayer}>
        <div className={styles.secLayer}>
          <div className={styles.pageNum}>{questionList[currPage].pageNum}/5</div>
          <div className={styles.questionTitle}>{questionList[currPage].title1}<br/>{questionList[currPage].title2}</div>
        </div>
        <div className={styles.questionImg}><img src={questionList[currPage].imgURL} alt="Qimage"/></div>
        {questionList[currPage].questions.map((question, index) => (
          <div key={index} onClick={() => handleQuestionClick(category[currPage][`category${index + 1}`])} className={styles.question}>{question}</div>
        ))}
      </div>
    </div>
  );
}

export default Question;