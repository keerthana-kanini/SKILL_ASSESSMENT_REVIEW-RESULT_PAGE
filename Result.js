// function changeContent() {
//     // Get the content element
//     const contentElement = document.getElementById('question_no_one');
//     const contentElement1 = document.getElementById('question');
//     const contentElement2 = document.getElementById('optionanswer');
//     const contentElement3 = document.getElementById('option2answer');
//     const contentElement4= document.getElementById('option3answer');
//     const contentElement5 = document.getElementById('option4answer');
    
//     // Change the content
//     contentElement.textContent = 'How Can Design Benifit From Online UX Communities?';
//     contentElement1.textContent = 'Questions 2 of 11';
//     contentElement2.textContent = 'Start a design business and file key legal documents';
//     contentElement3.textContent = 'Share full case studies';
//     contentElement4.textContent = 'Get inspiration from other designers';
//     contentElement5.textContent = 'Communicate with company executives';

//   }



const contentArray = ["How Can Design Benifit From Online UX Communities?", "Find out the types of button from the options?", "How Can Design Benifit From Online UX Communities?","How Can Design Benifit From Online UX Communities?", "Find out the types of button from the options?", "How Can Design Benifit From Online UX Communities?","How Can Design Benifit From Online UX Communities?", "Find out the types of button from the options?", "How Can Design Benifit From Online UX Communities?"];
const contentArray1 =["Questions 2 of 15","Questions 3 of 15","Questions 4 of 15","Questions 5 of 15","Questions 6 of 15","Questions 7 of 15","Questions 8 of 15","Questions 9 of 15","Questions 10 of 15","Questions 11 of 15","Questions 12 of 15","Questions 13 of 15","Questions 14 of 15","Questions 15 of 15"]
const contentArray2=["Start a design business and file key legal documents","Start a design business and file key legal documents","Get inspiration from other designers","Get inspiration from other designers"]
const contentArray3=["Share full case studies","Share full case studies","Communicate with company executives","Communicate with company executives"]
const contentArray4=["Start a design business and file key legal documents","Share full case studies","Get inspiration from other designers","Communicate with company executives"]
const contentArray5=["Share full case studies","Start a design business and file key legal documents","Communicate with company executives","Get inspiration from other designers"]


let currentIndex = 0;
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let currentIndex4 = 0;
let currentIndex5 = 0;

function changeContent(direction) {
    const contentElement = document.getElementById('question1');
    const contentElement1 = document.getElementById('question1to15');
    const contentElement2 = document.getElementById('choice1');
    const contentElement3 = document.getElementById('choice2');
    const contentElement4 = document.getElementById('choice3');
    const contentElement5 = document.getElementById('choice4');
  
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % contentArray.length;
      currentIndex1 = (currentIndex1 + 1) % contentArray1.length;
      currentIndex2 = (currentIndex2 + 1) % contentArray2.length;
      currentIndex3 = (currentIndex3 + 1) % contentArray3.length;
      currentIndex4 = (currentIndex4 + 1) % contentArray4.length;
      currentIndex5 = (currentIndex5 + 1) % contentArray5.length;
    } else if (direction === 'previous') {
      currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length;
      currentIndex1 = (currentIndex1 - 1 + contentArray1.length) % contentArray1.length;
      currentIndex2 = (currentIndex2 - 1 + contentArray2.length) % contentArray2.length;
      currentIndex3 = (currentIndex3 - 1 + contentArray3.length) % contentArray3.length;
      currentIndex4 = (currentIndex4 - 1 + contentArray4.length) % contentArray4.length;
      currentIndex5 = (currentIndex5 - 1 + contentArray5.length) % contentArray5.length;
    }
  
    contentElement.textContent = contentArray[currentIndex];
    contentElement1.textContent = contentArray1[currentIndex1];
    contentElement2.textContent = contentArray2[currentIndex2];
    contentElement3.textContent = contentArray3[currentIndex3];
    contentElement4.textContent = contentArray4[currentIndex4];
    contentElement5.textContent = contentArray5[currentIndex5];
  }
  