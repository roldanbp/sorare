import './styles/index.scss'
import Context from '../../store/context'
import { useContext } from 'react'

const namespace = 'button'

const Button = () => {
    const { reveal, revealCards } = useContext(Context)

    if (reveal) {
        return null
    }

    return (
        <button
            data-testid={namespace}
            className={`${namespace}__reveal`}
            onClick={revealCards}
        >
            Reveal
        </button>
    )
}

export default Button
