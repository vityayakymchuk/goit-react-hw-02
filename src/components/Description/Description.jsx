import css from './Description.module.css'

const Description = ({title, description}) => {
    return (
        <div>
            <h1 className={css.title}>{title}
            </h1>
            <p className={css.description}>{description}
            </p>
        </div>
    )
};

export default Description;