import React, { useEffect } from "react";
import "./styles/app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {

  const [username, setUsername] = React.useState(null);
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [stop, setStop] = React.useState(false);
  const [earned, setEarned] = React.useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "what has been e currency of Greece sine 2002?",
      answers: [
        {
          text: "Euro",
          correct: true,
        },
        {
          text: "Peso",
          correct: false,
        },
        {
          text: "Drachma",
          correct: false,
        },
        {
          text: "Lira",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "which Indian sportsperson was awarded the “order of Australia” award in 2012?",
      answers: [
        {
          text: "Saina Nehwal",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: true,
        },
        {
          text: "Sania Mirza",
          correct: false,
        },
        {
          text: "Rahul Dravid",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "To whom did Ravindranath Tagore dedicate his book 'Visva Parichay' written on science?",
      answers: [
        {
          text: "C v raman",
          correct: false,
        },
        {
          text: "Jagdish chandra Bose",
          correct: false,
        },
        {
          text: "P c Roy",
          correct: false,
        },
        {
          text: "Satyendra nath Bose",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "What is the new name of the Hyderabad franchise that would replace Deccan Charges in IPL6?",
      answers: [
        {
          text: "Sun Chargers",
          correct: false,
        },
        {
          text: "Nizam Jyothi",
          correct: false,
        },
        {
          text: "Andhra Aces ",
          correct: false,
        },
        {
          text: "Sun risers Hyderabad",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: " In India, under which Union Ministry does the 'Rajbhasha Vibhag' function?",
      answers: [
        {
          text: "Home Affairs",
          correct: true,
        },
        {
          text: "HRD",
          correct: false,
        },
        {
          text: "Culture",
          correct: false,
        },
        {
          text: "Law & Justice",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: " According to a proverb, what is said to be 'the mother of invention'?",
      answers: [
        {
          text: "Society",
          correct: false,
        },
        {
          text: "Proglem",
          correct: false,
        },
        {
          text: "Science",
          correct: false,
        },
        {
          text: "Necessity",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: " Which constituency does Abhijit Mukherjee represents in the 15th Lok Sabha ?",
      answers: [
        {
          text: "Jadavpur",
          correct: false,
        },
        {
          text: "Birbhum",
          correct: false,
        },
        {
          text: "Jangipur ",
          correct: true,
        },
        {
          text: "Midnapore",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " Which of these ships was not part of Christopher Columbus's first voyage in 1492 ?",
      answers: [
        {
          text: "Nina",
          correct: false,
        },
        {
          text: "La Gorda",
          correct: true,
        },
        {
          text: "Pinta",
          correct: false,
        },
        {
          text: "Santa Maria",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: " Which of these tourist attractions is situated on an island ?",
      answers: [
        {
          text: "Ellora Caves",
          correct: false,
        },
        {
          text: " Ajanta Caves",
          correct: false,
        },
        {
          text: "Kanheri Caves",
          correct: false,
        },
        {
          text: "Elephanta Caves",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: " Which of these world champions is a parent of twins?",
      answers: [
        {
          text: "Sushil Kumar ",
          correct: false,
        },
        {
          text: " M. C. Mary Kom",
          correct: true,
        },
        {
          text: "Vishwanathan Anand",
          correct: false,
        },
        {
          text: "Gagan Narang",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "  What was the first ministerial portfolio held by Indira Gandhi?",
      answers: [
        {
          text: "Home Affairs ",
          correct: false,
        },
        {
          text: " Information & Broadcasting",
          correct: true,
        },
        {
          text: "Science & Technology",
          correct: false,
        },
        {
          text: " Education",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "  Which of these Indian currency notes does not have the special geometrical shape that helps the visually impaired denominations?",
      answers: [
        {
          text: "Rs 100 ",
          correct: false,
        },
        {
          text: " Rs 50",
          correct: false,
        },
        {
          text: "Rs 1000",
          correct: false,
        },
        {
          text: " Rs 10",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = React.useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
    []);
  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned:  {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}

          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername} />}
    </div>
  );
}

export default App;
