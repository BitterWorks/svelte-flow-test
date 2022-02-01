<script>
    import { getFruitsQuery } from "../../graphql/queries/Index";
    import { toFruitArray } from "../../utils/Index";
    import FruitCards from "./FruitCards.svelte";
    
</script>
{#await $getFruitsQuery}    
    Loading...
{:then result}
    {#if result.data}
        <FruitCards fruits={toFruitArray(result.data.fruits)} />
    {/if}
{/await}