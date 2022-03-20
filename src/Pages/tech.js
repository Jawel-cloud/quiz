import React, { useContext } from 'react';
import { CheckContext } from '../Context/CheckContext';
import QuizABC from "../Components/quizABC";
import AllQuestions from '../Components/AllQuestions';
import tech_icon from '../Assets/Icons/tech_icon.png';
import start_icon from '../Assets/Icons/tech_play-btn.png';
const Tech = () => {
    const { toggleBackground, toggleButton_color } = useContext(CheckContext);
    const questions = AllQuestions.technologyQuestions;
    toggleBackground('tech_start');
    toggleButton_color('tech_btn');
    return (
        <>
            <QuizABC questions={questions}
                category='TECHNOLOGIA'
                background_start='tech_start'
                background_select='tech_select'
                background_score='tech_score'
                title_color='title_tech'
                category_icon={tech_icon}
                start_icon={start_icon}
            />

        </>
    );
}

export default Tech;