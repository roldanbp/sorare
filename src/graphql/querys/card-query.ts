import { gql } from "@apollo/client";

export const getCardQuery = ( slug: string) => {
return  gql`
{
  cards(slugs: "${slug}") {
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
`;
}