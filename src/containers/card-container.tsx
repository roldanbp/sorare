import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import CardList from "../components/card-list/card-list"
import { getCardQuery } from "../graphql/querys/card-query";

const CARD_QUERY = gql`
{
  cards(slugs: "marco-verratti-2021-unique-1") {
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

const CardContainer = () => {
    const { slug } = useParams();
    
    const { loading, error, data } = useQuery(getCardQuery(slug || ""));

    if(loading){ console.log("LOADING")}
    if(error){ console.log("error")}

    return <CardList {...data}/>
}

export default CardContainer