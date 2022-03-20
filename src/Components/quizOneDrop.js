import React, { useState, useEffect, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { CheckContext } from '../Context/CheckContext';
import yes_icon from '../Assets/Icons/yes_icon.png';

const reorder1 = (list, list2, startIndex, endIndex) => {
    let result1 = Array.from(list);
    let result2 = Array.from(list2);
    const [removedFrom1] = result1.splice(startIndex, 1);
    const [removedFrom2] = result2.splice(startIndex, 1);
    result2.splice(endIndex, 0, removedFrom1);
    result1.splice(endIndex, 0, removedFrom2);
    return [result1,result2]};

const Choice = ({ choice, index }) => {
    const { button_color } = useContext(CheckContext);
    return (
        <Draggable draggableId={'a' + index} index={index}>
            {(provided,snapshot) => (
                <div className={`choice ${button_color}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    >
                    {choice}
                </div>)}
        </Draggable>
    );}

const MyAnswer = ({ myAnswer, index }) => {
    const { button_color } = useContext(CheckContext);
    return (
        <Draggable draggableId={'a' + index} index={index}>
            {(provided,snapshot) => (
            // {provided => (
                <div className={`choice ${button_color}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    >
                    {myAnswer}
                </div>)}
        </Draggable>
    );}

const QuestionList = React.memo(function QuestionList({ choices }) {
    return choices.map((choice, index) => (<Choice choice={choice} index={index} key={index} />));});
const AnswerList = React.memo(function AnswerList({ myAnswers }) {
    return myAnswers.map((myAnswer, index) => (<MyAnswer myAnswer={myAnswer} index={index} key={index} />));});

const QuizAppOneDrop = (props) => {
    const [question, setQuestion] = useState();
    const [choices, setChoices] = useState([]);
    const [myAnswers,setMyAnswers] = useState([]);
    const { isTrue, toggleResult, score, toggleScore, visibleAnswer, toggleVisible, visibleChoices,
         toggleVisibleChoices, background, toggleBackground } = useContext(CheckContext);

    useEffect(() => {
        setQuestion(props.question);
        setChoices(props.choices);
        setMyAnswers(props.myAnswers);
    }, [props])

    const onDragEnd = (result) => {
        if (!result.destination) {return;}
        if (result.destination.droppableId === result.source.droppableId &&  result.destination.index === result.source.index) {
            return;}
        let newChoicesAndAnswers = reorder1(choices, myAnswers, result.source.index, result.destination.index);
        setChoices(newChoicesAndAnswers[0].filter(item=>item!==undefined));
        setMyAnswers(newChoicesAndAnswers[1].filter(item=>item!==undefined ));
        toggleVisible(newChoicesAndAnswers[1].filter(item=>item!==undefined));
        toggleVisibleChoices((newChoicesAndAnswers[0].filter(item=>item!==undefined)).map(item=><div className='choice'>{item}</div>));
        toggleResult(JSON.stringify(newChoicesAndAnswers[1].filter(item=>item!==undefined)) === JSON.stringify(props.correct) ? 'correct' : 'incorrect');
        toggleScore(JSON.stringify(newChoicesAndAnswers[1].filter(item=>item!==undefined)) === JSON.stringify(props.correct)? score + 1 : score);
        props.sendAnsw();}
        
        return (
            <DragDropContext onDragEnd={onDragEnd}>
                <div className='qestionDropWrapper'>
            <h3 className='question'>{question}</h3> 
            <div className={`myAnswers_wrapper ${isTrue}`}>
                <div className='choice'>{isTrue==='correct' || isTrue==='incorrect'? visibleAnswer :
                    <Droppable droppableId='list2'>
                        {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                                >
                                    <AnswerList myAnswers={myAnswers} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>}</div>
                        </div>
                        <div className='ok_wrapper'> {isTrue==='correct'? <div className='ok'><img className='ok_icon' src={yes_icon} alt="YES" /></div> : isTrue==='incorrect'? <div className='ok'>&#10539;</div> : null} </div>
                        </div>
            <div className={`choices_wrapper ${isTrue}`}>
            <div>{isTrue==='correct' || isTrue==='incorrect'? visibleChoices :
                        <Droppable droppableId='list'>
                        {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                                >
                                    <QuestionList choices={choices} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>}</div>
                    </div>
            </DragDropContext>
        );
}
export default QuizAppOneDrop;