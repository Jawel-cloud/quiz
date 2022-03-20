import React, { useContext } from 'react';
import { CheckContext } from '../Context/CheckContext';
import QuizABC from "../Components/quizABC";
import AllQuestions from '../Components/AllQuestions';
import prog_icon from '../Assets/Icons/prog_icon.png';
import start_icon from '../Assets/Icons/prog_play-btn.png';
const Prog = () => {
    const { toggleBackground, toggleButton_color } = useContext(CheckContext);
    const questions = AllQuestions.programmingQuestions;
    toggleBackground('prog_start');
    toggleButton_color('prog_btn');
    return (
        <>
            <QuizABC questions={questions}
                category='PROGRAMOWANIE'
                background_start='prog_start'
                background_select='prog_select'
                background_score='prog_score'
                title_color='title_prog'
                category_icon={prog_icon}
                start_icon={start_icon}
            />

        </>
    );
}

export default Prog;