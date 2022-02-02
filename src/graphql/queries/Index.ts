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
        createFruit(data: {
            name: $fruitName, amount: $amount, color: $color
        }){
            name
            amount
            color {
                name
            }
        }
    }
`;

export const UPDATE_FRUIT = gql`
    mutation ($fruitName: String, $color: String, $amount: Int, $id: ID!) {
        updateFruit(data:{
            name: $fruitName, amount: $amount, color: $color, id: $id
        }
        ){
            name
            amount
            color {
                name
            }
            id
        }
    }
`;