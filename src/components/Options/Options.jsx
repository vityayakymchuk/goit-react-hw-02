import css from './Options.module.css';

const Options = ({ onClick, reset, onReset }) => {
    return (
        <div className={css.buttons}>
            <button className={css.btn} onClick={() => onClick('good')}>Good</button>
            <button className={css.btn} onClick={() => onClick('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => onClick('bad')}>Bad</button>
            {reset !== 0 && <button className={css.btn} onClick={() => onReset()}>Reset</button>}
        </div>
    );
};

export default Options;