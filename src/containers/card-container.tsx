import { useQuery } from '@apollo/client'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../components/card-list/card-list'
import PlaceHolder from '../components/placeholder/placeholders'
import { GET_CARD_QUERY } from '../graphql/querys/card-query'
import Context from '../store/context'

const CardContainer = () => {
    const { reveal, revealCards } = useContext(Context)

    const { slug } = useParams()

    const slugs = slug?.split(',') || []

    let placeholders = slugs.filter((c, index) => slugs.indexOf(c) === index)

    const { loading, error, data } = useQuery(GET_CARD_QUERY, {
        variables: { slugs },
    })

    if (!reveal || loading) {
        return (
            <PlaceHolder
                placeholder={placeholders}
                onClickHandler={revealCards}
            />
        )
    }
    if (error) {
        throw new Error()
    }

    return (
        <div>
            <CardList {...data} />
        </div>
    )
}

export default CardContainer
