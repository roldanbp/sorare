
import "./styles/index.scss"
import { PlaceholderProps } from "../../types/placeholder"

const namespace = "card-list"

const PlaceHolder = ({placeholder} : PlaceholderProps) => {
    
    return <div className={`${namespace}`}>
        {placeholder?.map(() => <div className={`${namespace}__placeholder`} />)}
    </div>
}

export default PlaceHolder