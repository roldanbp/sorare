import { useQuery, gql } from "@apollo/client";

const namespace = "card-details";

const FILMS_QUERY = gql`
{
    card(slug:"marco-verratti-2021-unique-1"){
      name
    }
  }
`;

const CardDetails = () => {
    
    const { data, loading, error } = useQuery(FILMS_QUERY);

    return <div className={namespace}>
        {data}
    </div>
}

export default CardDetails;