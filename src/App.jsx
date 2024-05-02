import './App.css';
import { useState, useEffect } from 'react';
import Description from '../src/components/Description/Description';
import Options from '../src/components/Options/Options';
import Feedback from '../src/components/Feedback/Feedback';
import Notification from '../src/components/Notification/Notification';

function App() {
    const [feedbackType, setFeedbackType] = useState({ good: 0, neutral: 0, bad: 0 });

    useEffect(() => {
        const getData = localStorage.getItem('feedbackData');
        if (getData) {
            setFeedbackType(JSON.parse(getData));
        } else {
            setFeedbackType({
                good: 0,
                neutral: 0,
                bad: 0
            });
        }
    }, []);


    const updateFeedback = (type) => {
        const updatedFeedback = { ...feedbackType, [type]: feedbackType[type] + 1 };
        setFeedbackType(updatedFeedback);
        localStorage.setItem('feedbackData', JSON.stringify(updatedFeedback));
    };

    const totalFeedback = feedbackType ? feedbackType.good + feedbackType.neutral + feedbackType.bad : 0;

    const resetFeedback = () => {
        setFeedbackType({ good: 0, neutral: 0, bad: 0 });
        localStorage.removeItem('feedbackData');
    };

    let positive;
    if (totalFeedback === 0 || feedbackType?.neutral === totalFeedback) {
        positive = 0;
    } else {
        positive = Math.round((feedbackType?.good / (totalFeedback - feedbackType?.neutral)) * 100);
    }

    return (
        <div>
            <Description title='Sip Happens Café' description='Please leave your feedback about our service by selecting one of the options below.' />
            <Options onClick={updateFeedback} reset={totalFeedback} onReset={resetFeedback} />
            {totalFeedback > 0 ? (
                <Feedback
                    good={feedbackType?.good}
                    neutral={feedbackType?.neutral}
                    bad={feedbackType?.bad}
                    total={totalFeedback}
                    positiveValue={positive}
                />
            ) : (
                <Notification />
            )}
        </div>
    );
}

export default App;