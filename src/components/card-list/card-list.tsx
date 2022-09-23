import "./styles/index.scss"
import { Cards } from "../../types/Cards"
import { CardProps} from "../../types/Cards"
import Card from "../card/card"

const namespace = "card-list"

const List = (data: Cards) => {

    return <div className={namespace}>{data?.cards?.map((item: CardProps) => <Card {...item} />)}</div>
} 

export default List