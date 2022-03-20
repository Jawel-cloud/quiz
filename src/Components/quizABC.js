import QuizAppOneDrop from './quizOneDrop';
import QuizAppDragDrop from './quizDnd';
import { CheckContext } from '../Context/CheckContext';
import React, { useState, useContext } from 'react';
import yes_icon from '../Assets/Icons/yes_icon.png';


const QuizABC = (props) => {

    const [title, setTitle] = useState('WYBRANA KATEGORIA:')
    const [quesType, setQuesType] = useState('');
    const [indx, setIndx] = useState(9);
    const { toggleResult, score, toggleScore, isTrue, background, toggleBackground,
        button_color, component, toggleComponent } = useContext(CheckContext);

    const handleStart = () => {
        toggleComponent('quiz');
        setTitle('WYBIERZ PPRAWIDŁOWĄ ODPOWIEDŹ')
        toggleScore(0)
    }

    const [availableQuestions, setAvailableQuestions] = useState(props.questions); //table with available questions:
    const [randomNumber, setRandomNumber] = useState(Math.floor((Math.random() * availableQuestions.length)));  //random question number:
    const activeQuestion = availableQuestions.filter((quest, index) => index === randomNumber);  //active question on the screen:

    const handleAnswer = () => {
        toggleResult('');
        const remains = availableQuestions.filter((quest, index) => index !== randomNumber);
        setAvailableQuestions(remains);
        setRandomNumber(Math.floor((Math.random() * remains.length)));
        if (remains.length === 0) {
            toggleComponent('score');
            setAvailableQuestions(props.questions);
        }
    };
    const reciveAnswer = (e) => {
        setTimeout(handleAnswer, 1000);
        if (quesType === 'abc') {
            let correctChoice = activeQuestion.map(active => active.correct);
            let index = e.target.value;
            correctChoice.join();
            setIndx(index);
            if (e.target.name == correctChoice) {
                toggleScore(score + 1);
                toggleResult('correct')
            } else { toggleResult('incorrect') }
        }
    }
    const Question = (props) => {  //dla typu abc, title dla wszystkich
        setQuesType(props.type);
        console.log(indx);
        setTitle(props.type === 'abc' ? 'WYBIERZ PPRAWIDŁOWĄ ODPOWIEDŹ' : props.type === 'dnd' ? 'USTAW PRAWIDŁOWĄ KOLEJNOŚĆ' : 'PRZECIĄGNIJ POPRAWNĄ ODPOWIEDŹ W PUSTE POLE');
        let options = props.choices.map((choice, index) =>
            <button className={`choiceButton ${button_color}`} onClick={reciveAnswer} name={choice} value={index}>{choice}
                {indx == index && isTrue === 'incorrect' ? <div className='ok_button'>&#10539;</div> : null}
                {indx == index && isTrue === 'correct' ? <div className='ok_button'><img className='ok_icon' src={yes_icon} alt="YES" /></div> : null}
            </button>)

        return (  //dla wszystkich 3 typów:
            <div>
                {props.type === 'oneDrop' ? null : <h3 className='question'>{props.q}</h3>}
                {props.type === 'abc' ? <div className='quizComp_wrapper'>{options}</div> : props.type === 'dnd' ?
                    <div><QuizAppDragDrop {...availableQuestions[randomNumber]} sendAnsw={reciveAnswer} /></div>
                    : <div><QuizAppOneDrop {...availableQuestions[randomNumber]} sendAnsw={reciveAnswer} /></div>
                }
            </div>
        )
    }
    const quizQuestion = activeQuestion.map(quest => <Question
        key={quest.id} q={quest.question} choices={quest.choices} ok={quest.correct} type={quest.type} />);

    const CategoryComponent = () => {
        toggleBackground(props.background_start);
        return (
            <div className='categorySite_wrapper'>
                <p className={`title ${props.title_color}`}>{title}</p>
                <div>
                    <img className='categoryImage' src={props.category_icon} alt="Ikona Kategorii" />
                    <p className='categoryName'>{props.category}</p></div>
                <button className={`button-start ${button_color}`} onClick={handleStart}><p>Rozpocznij</p>
                    <img className='start_icon' src={props.start_icon} alt="Start" /></button>
            </div>
        );
    }
    const QuizComponent = () => {
        toggleBackground(props.background_select);
        return (
            <div>
                <p className={`title ${props.title_color}`}>{title}</p>
                <div className={`score ${button_color}`}>{score}</div>
                {quizQuestion}
            </div>)
    }
    const ScoreComponent = () => {
        toggleBackground(props.background_score);
        return (
            <div className='categorySite_wrapper'>
                <div>
                    <img className='categoryImage' src={props.category_icon} alt="Ikona Kategorii" />
                    <p className='categoryName'>{props.category}</p>
                </div>
                <div className='completeScore_wrapper'>
                    <div className='title_wrapper'><div className={`title ${props.title_color}`}>TWÓJ WYNIK</div></div>
                    <div className={`completeScore ${button_color}`}>{score}/{props.questions.length}</div>
                </div>
                <button className={`button-start ${button_color}`} onClick={handleStart}><p>Powtórz quiz</p>
                    <img className='start_icon' src={props.start_icon} alt="Start" /></button>
            </div>
        )
    }

    return (
        <div className='CategoryPage_wrapper'>
            {component === 'quiz' ? <QuizComponent /> : component === 'score' ? <ScoreComponent /> : <CategoryComponent />}
        </div>

    );
}
export default QuizABC;