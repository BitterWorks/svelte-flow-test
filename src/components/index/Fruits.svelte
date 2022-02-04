<script lang="ts">
    import type { ReadableQuery } from 'svelte-apollo';
    
    import type { Fruit, FruitsQuery } from "../../types/Index";
    import FruitCards from '../../components/index/FruitCards.svelte';
    import { toFruitArray } from '../../utils/Index';

    export let getFruitsQuery: ReadableQuery<FruitsQuery<Fruit[]>>;

    
</script>

<section id="fruits">
    {#if $getFruitsQuery.loading}
        Loading...
    {:else if $getFruitsQuery.error}
        Errors
    {:else if $getFruitsQuery.data}
        <FruitCards
        fruits={toFruitArray($getFruitsQuery.data.fruits)}
        {getFruitsQuery}
        />
    {/if}
</section>