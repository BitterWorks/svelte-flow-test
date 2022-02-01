<script lang="ts">
    import { query, ReadableQuery, mutation } from 'svelte-apollo';
    import Form from "../components/Form.svelte";
    import FruitCards from '../components/index/FruitCards.svelte';
    import { ADD_FRUIT, GET_FRUITS } from '../graphql/queries/Index';
    import type { Fruit, FruitsQuery } from "../types/Index";
    import { toFruitArray } from '../utils/Index';


    let getFruitsQuery: ReadableQuery<FruitsQuery<Fruit[]>> = query(GET_FRUITS);
    let createFruitQuery = mutation(ADD_FRUIT);

    async function addFruit(e: CustomEvent){
        try {
            await createFruitQuery({variables: {
                fruitName: e.detail.name,
                color: e.detail.color,
                amount: e.detail.amount
            }});
            getFruitsQuery.refetch();
        } catch {
            //TODO: toast
        };
    };    

</script>
<main class="container">

    <Form on:addFruit={addFruit}/>

    {#await $getFruitsQuery}
        Loading...
    {:then result}
        {#if result.data}
            <FruitCards fruits={toFruitArray(result.data.fruits)} />
        {/if}
    {/await}

</main>
<style>
    
</style>