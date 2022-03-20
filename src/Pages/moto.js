import React, { useContext } from 'react';
import { CheckContext } from '../Context/CheckContext';
import QuizABC from "../Components/quizABC";
import AllQuestions from '../Components/AllQuestions';
import moto_icon from '../Assets/Icons/mot_icon.png';
import start_icon from '../Assets/Icons/mot_play-btn.png';
const Moto = () => {
    const { toggleBackground, toggleButton_color } = useContext(CheckContext);
    const questions = AllQuestions.motorizationQuestions;
    toggleBackground('moto_start');
    toggleButton_color('moto_btn');
    return (
        <>
            <QuizABC questions={questions}
                category='MOTORYZACJA'
                background_start='moto_start'
                background_select='moto_select'
                background_score='moto_score'
                title_color='title_moto'
                category_icon={moto_icon}
                start_icon={start_icon}
            />

        </>
    );
}

export default Moto;