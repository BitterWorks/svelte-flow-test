<script lang="ts">
    import type { ReadableQuery } from 'svelte-apollo';
    import type { Fruit, FruitsQuery } from "../../types/Index";


    import FruitCards from '../../components/index/FruitCards.svelte';
    import { toFruitArray } from '../../utils/Index';

    export let getFruitsQuery: ReadableQuery<FruitsQuery<Fruit[]>>;

    
</script>
{#await $getFruitsQuery}
    Loading...
{:then result}
    {#if result.data}
        <FruitCards
        fruits={toFruitArray(result.data.fruits)}
        {getFruitsQuery}
        />
    {/if}
{/await}