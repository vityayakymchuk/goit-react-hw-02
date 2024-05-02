import css from '../Feedback/Feedback.module.css'

const Feedback = ({ good, neutral, bad, total }) => {
    let positive;
    if (total === 0 || neutral === total) {
        positive = 0
    } else {positive = Math.round((good / (total - neutral)) * 100)}
    
    return (
        <ul className={css.feedback}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positive}%</li> 
        </ul>
    )
};

export default Feedback;