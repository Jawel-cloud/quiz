import React, { useContext } from 'react';
import { CheckContext } from '../Context/CheckContext';
import QuizABC from "../Components/quizABC";
import AllQuestions from '../Components/AllQuestions';
import kult_icon from '../Assets/Icons/hand-icon.png';
import start_icon from '../Assets/Icons/kult_play-btn.png';
const Kult = () => {
    const { toggleBackground, toggleButton_color } = useContext(CheckContext);
    const questions = AllQuestions.cultureQuestions;
    toggleBackground('kult_start');
    toggleButton_color('kult_btn');
    return (
        <>
            <QuizABC questions={questions}
                category='KULTURA'
                background_start='kult_start'
                background_select='kult_select'
                background_score='kult_score'
                title_color='title_kult'
                category_icon={kult_icon}
                start_icon={start_icon}
            />

        </>
    );
}

export default Kult;