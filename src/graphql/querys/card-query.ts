import { gql } from '@apollo/client'

export const GET_CARD_QUERY = gql`
    query Cards($slugs: [String!]) {
        cards(slugs: $slugs) {
            player {
                firstName
                lastName
                pictureUrl
                country {
                    flagUrl
                }
            }
            age
            position
            rarity
            shirtNumber
            serialNumber
            season {
                name
            }
            team {
                ... on Club {
                    pictureUrl
                }
            }
        }
    }
`
