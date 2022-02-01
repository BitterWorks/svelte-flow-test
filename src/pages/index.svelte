<script lang="ts">
    import { query, ReadableQuery } from 'svelte-apollo';

    import Form from "../components/Form.svelte";
    import FruitCards from '../components/index/FruitCards.svelte';
    import { GET_FRUITS } from '../graphql/queries/Index';
    import type { Fruit, FruitsQuery } from "../types/Index";
    import { toFruitArray } from '../utils/Index';


    let getFruitsQuery: ReadableQuery<FruitsQuery<Fruit[]>> = query(GET_FRUITS);
    let fruits: Fruit[];

    function addFood(e: CustomEvent): void{
        const fruit = e.detail;
        fruits = [fruit, ...fruits];
    };    

</script>
<main class="container">

    <Form on:addFruit={addFood}/>

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