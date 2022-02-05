<script lang="ts">
    import type { ReadableQuery } from 'svelte-apollo';
    
    import type { GetFruitsQuery } from "../../../types/Index";
    import FruitCards from '../Fruits/FruitCards/Index.svelte';
    import { toFruitArray } from '../../../utils/Index';

    export let getFruitsQuery: GetFruitsQuery;

    
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