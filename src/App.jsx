import './App.css'
import { useState } from 'react';
import Description from '../src/components/Description/Description';
import Options from '../src/components/Options/Options';
import Feedback from '../src/components/Feedback/Feedback';

function App() {
    const getData = localStorage.getItem('feedbackData');
    const initialFeedbackData = getData ? JSON.parse(getData) : {
        good: 0,
        neutral: 0,
        bad: 0
    };

    const [feedbackType, setFeedbackType] = useState(
        initialFeedbackData
    );

   





   

    const updateFeedback = (type) => {
        setFeedbackType(prevState => ({
            ...prevState,
            [type]: prevState[type] + 1
        }));
    };

    const totalFeedback = feedbackType.good + feedbackType.neutral + feedbackType.bad;
    


const resetFeedback = () => {setFeedbackType({
        good: 0,
        neutral: 0,
        bad: 0
    })}


    localStorage.setItem('feedbackData', JSON.stringify(feedbackType));

    return (<div>
        <Description title='Sip Happens Café' description='Please leave your feedback about our service by selecting one of the options below.' />
        <Options onClick={updateFeedback} reset={totalFeedback} onReset={resetFeedback} />
        {totalFeedback>0 ? (<Feedback
                good={feedbackType.good}
                neutral={feedbackType.neutral}
                bad={feedbackType.bad}
                total={totalFeedback}
    
            />) : (<p style={{ fontSize: '25px', marginTop: '20px' }}>No feedback yet</p>)}
        
        </div>
    )
}

export default App;
