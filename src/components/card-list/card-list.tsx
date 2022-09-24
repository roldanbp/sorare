import './styles/index.scss'
import { Cards } from '../../types/Cards'
import { CardProps } from '../../types/Cards'
import Card from '../card/card'

const namespace = 'card-list'

const CardList = (data?: Cards) => {
    return (
        <div data-testid={namespace} className={namespace}>
            {data?.cards?.map((item: CardProps) => (
                <Card key={item.player.firstName} {...item} />
            ))}
        </div>
    )
}

export default CardList
