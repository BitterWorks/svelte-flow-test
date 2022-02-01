<script lang="ts">
    import { query } from 'svelte-apollo';

    import Form from "../components/Form.svelte";
    import EditFruitCard from "../components/index/EditFruitCard.svelte";
    import FruitCard from "../components/index/FruitCard.svelte";
    import FruitCards from '../components/index/FruitCards.svelte';
    import { GET_FRUITS } from '../graphql/queries/Index';
    import type { Fruit } from "../types/Index";

    let fruitsQuery = query(GET_FRUITS);
    let fruits: Fruit[];

    function toFruitFormat(item: any): Fruit{
        return {
            name: item.name,
            id: item.id,
            amount: item.amount,
            color: item.color.name
        }
    };
    function toFruitArray(JSONData: any[]): Fruit[]{
        return JSONData.map((item) => toFruitFormat(item));
    };
    function addFood(e: CustomEvent): void{
        const fruit = e.detail;
        fruits = [fruit, ...fruits];
    };    

</script>
<main class="container">

    <Form on:addFruit={addFood}/>

    {#await $fruitsQuery}
        Loading...
    {:then result}
        {#if result.data}
            <FruitCards fruits={toFruitArray(result.data.fruits)} />
        {/if}
    {/await}

</main>
<style>
    
</style>