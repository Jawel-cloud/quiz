import React, { useContext } from 'react';
import { CheckContext } from '../Context/CheckContext';
import QuizABC from "../Components/quizABC";
import AllQuestions from '../Components/AllQuestions';
import hist_icon from '../Assets/Icons/his_icon.png';
import start_icon from '../Assets/Icons/his_play-btn.png';
const Hist = () => {
    const { toggleBackground, toggleButton_color } = useContext(CheckContext);
    const questions = AllQuestions.historyQuestions;
    toggleBackground('hist_start');
    toggleButton_color('hist_btn');

    return (
        <>
            <QuizABC questions={questions}
                category='HISTORIA'
                background_start='hist_start'
                background_select='hist_select'
                background_score='hist_score'
                title_color='title_hist'
                category_icon={hist_icon}
                start_icon={start_icon}
            />

        </>
    );
}

export default Hist;