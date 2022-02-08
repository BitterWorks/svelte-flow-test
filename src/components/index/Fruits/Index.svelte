<script lang="ts">    
    import FruitCards from '../Fruits/FruitCards/Index.svelte';
    import { toFruitArray } from '../../../utils/Index';

    import { operationStore, query, setClient } from '@urql/svelte';
    import { FruitsDocument, Query } from '../../../graphql/generated/graphql';

    import client from "../../../graphql/_client";
    setClient(client);

    const fruits = operationStore<Query>(FruitsDocument)
    query(fruits)
    
</script>

<section id="fruits">
    {#if $fruits.fetching}
        Loading...
    {:else if $fruits.error}
        {$fruits.error.message}
    {:else}
         <FruitCards
        fruits={toFruitArray($fruits?.data?.fruits ?? [])}
        />
    {/if} 
</section>