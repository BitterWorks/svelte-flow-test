<script lang="ts">    
    import { query } from '@urql/svelte';
    
    import FruitCards from '../Fruits/FruitCards/Index.svelte';
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
        fruits={$fruitList?.data?.fruits ?? []}
        />
    {/if} 
</section>