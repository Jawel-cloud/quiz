import React, { useState, useEffect, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CheckProvider, { CheckContext } from '../Context/CheckContext';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const Choice = ({choice, index}) => {
    const { button_color } = useContext(CheckContext);
    return (
        <Draggable draggableId={'a' + index} index={index}>
            {provided => (
                <div className={`choice ${button_color}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {choice}
                </div>
            )}

        </Draggable>
    );
}

const QuestionList = React.memo(function QuestionList({choices}) {
    return choices.map((choice, index) => (
        <Choice choice={choice} index={index} key={index} />
    ));});

const QuizAppDragDrop = (props) => {
    const [question, setQuestion] = useState();
    const [choices, setChoices] = useState([]);
    const { score, toggleScore, isTrue, toggleResult, background, toggleBackground, button_color } = useContext(CheckContext);
    useEffect(() => {
        setQuestion(props.question);
        setChoices(props.choices);
    }, [props])

    const check = () => {
        toggleResult(JSON.stringify(choices) === JSON.stringify(props.correct) ? 'correct' : 'incorrect');
        toggleScore(JSON.stringify(choices) === JSON.stringify(props.correct) ? score + 1 : score);}

    const onDragEnd = (result) => {
        if (!result.destination) {return;}
        if (result.destination.index === result.source.index) {return;}
        const newChoices = reorder(choices, result.source.index, result.destination.index);
        setChoices(newChoices);}

    let propsCorrect = props.correct.map(item=><div className='choice'>{item}</div>);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={`choices_wrapper ${isTrue}`}>
                    <div>{isTrue === 'correct' || isTrue === 'incorrect' ? propsCorrect :
                        <Droppable droppableId='list'>
                            {provided => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    <QuestionList choices={choices} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    }</div>
                </div>
                <br />
                <button className={`choice ${button_color}`} onClick={() => { check(); props.sendAnsw(); }}>Sprawdź</button>
        </DragDropContext>
    );
}
export default QuizAppDragDrop;