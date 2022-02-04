<script lang="ts">
    import FruitCards from '../../components/index/FruitCards.svelte';
    import { indexStore } from '../../stores/Index';

    const { getFruitListQuery } = indexStore;
    const fruitListQuery = getFruitListQuery();
</script>

<div>
    {#if $fruitListQuery.loading}
        Loading...
    {:else if $fruitListQuery.error}
        Errors: {$fruitListQuery.error}
    {:else if $fruitListQuery.data}
        <FruitCards />
    {/if}
</div>