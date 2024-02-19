const questionele=document.getElementById("question");
const answerformele=document.getElementById("answer-form");
const scoreele=document.getElementById("score");
let answer;
let score=0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const generateQues=()=>{
    const randomnum1=getRndInteger(1,10);
    const randomnum2=getRndInteger(1,10);
    let question;

    const quesno=getRndInteger(1,5);
    switch(quesno){
        case 1:
            question=`Q. what is ${randomnum1} multiply by ${randomnum2}`;
            answer=randomnum1*randomnum2;
        break;
        case 2:
            question=`Q. what is ${randomnum1} divide by ${randomnum2}`;
            answer=randomnum1/randomnum2;
        break;
        case 3:
            question=`Q. what is ${randomnum1} added to ${randomnum2}`;
            answer=randomnum1+randomnum2;
        break;
        case 4:
            question=`Q. what is ${randomnum1} substract by ${randomnum2}`;
            answer=randomnum1-randomnum2;
        break;
        default:
            question=`Q. what is ${randomnum1} Mod by ${randomnum2}`;
            answer=randomnum1%randomnum2;
        break;
    }
    questionele.innerText=question;
};
generateQues();

const checkans=(event)=>{
    event.preventDefault();
    const formdata=new FormData(answerformele);
    const useranswer= +formdata.get("answer");
    if(useranswer==answer){
        score+=1;
    }
    else{
        if(score!=0){
            score-=1;
        }
    }
    scoreele.innerText=score;
    event.target.reset();
    generateQues();
};




    