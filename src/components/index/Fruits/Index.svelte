<script lang="ts">    
    import { query } from '@urql/svelte';
    import FruitCards from '../Fruits/FruitCards/Index.svelte';
    import { indexStores } from '../../../stores/IndexStores';

    const { fruitListStore } = indexStores;
    query(fruitListStore)
</script>

<section id="fruits">
    {#if $fruitListStore.fetching}
        Loading...
    {:else if $fruitListStore.error}
        {$fruitListStore.error.message}
    {:else}
         <FruitCards
        fruits={$fruitListStore?.data?.fruits ?? []}
        />
    {/if} 
</section>