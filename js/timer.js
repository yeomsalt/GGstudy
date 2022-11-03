const timer = document.querySelector("div#timer");
const day = document.querySelector("div#Day");

function getDate(){
    const date = new Date();
    day.innerText = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
    // console.log(day.innerText);
}

getDate();
setTimeout(getDate,1000);



