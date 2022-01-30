import { gql } from '@apollo/client';


export const GET_FRUITS = gql`
    query {
        fruits{
            name
            amount
            id
            color{
                name
            }
        }
    }
`;