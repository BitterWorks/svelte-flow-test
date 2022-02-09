<script lang="ts">    
    import FruitCards from '../Fruits/FruitCards/Index.svelte';
    import { toFruitArray } from '../../../utils/Index';

    import { query } from '@urql/svelte';
    import { indexStore } from '../../../stores/Index';

    const { fruitList } = indexStore;
    query(fruitList)
    
</script>

<section id="fruits">
    {#if $fruitList.fetching}
        Loading...
    {:else if $fruitList.error}
        {$fruitList.error.message}
    {:else}
         <FruitCards
        fruits={toFruitArray($fruitList?.data?.fruits ?? [])}
        />
    {/if} 
</section>