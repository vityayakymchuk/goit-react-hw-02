import css from '../Feedback/Feedback.module.css'

const Feedback = ({ good, neutral, bad, total, positiveValue }) => {
    
    return (
        <ul className={css.feedback}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positiveValue}%</li> 
        </ul>
    )
};

export default Feedback;