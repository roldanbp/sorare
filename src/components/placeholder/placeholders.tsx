import './styles/index.scss'
import { PlaceholderProps } from '../../types/placeholder'
import Button from '../../components/button/button'

const namespace = 'card-list'

const PlaceHolder = ({ placeholder, onClickHandler }: PlaceholderProps) => {
    return (
        <>
            <Button onClickHandler={onClickHandler} />
            <div className={`${namespace}`}>
                {placeholder?.map(() => (
                    <div
                        data-testid={'placeholders'}
                        key={Math.random()}
                        className={`${namespace}__placeholder`}
                    />
                ))}
            </div>
        </>
        
    )
}

export default PlaceHolder
