import './styles/index.scss'

const namespace = 'button'

const Button = ({onClickHandler} : any) => {

    return (
        <button
            data-testid={namespace}
            className={`${namespace}__reveal`}
            onClick={onClickHandler}
        >
            Reveal
        </button>
    )
}

export default Button
