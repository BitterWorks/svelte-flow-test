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

export const ADD_FRUIT = gql`
    mutation ($fruitName: String!, $color: String!, $amount: Int!) {
        createFruit(name: $fruitName, amount: $amount, color: $color){
            name
            amount
            color {
                name
            }
        }
    }
`;