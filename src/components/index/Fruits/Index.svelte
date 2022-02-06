<script lang="ts">    
    import FruitCards from '../Fruits/FruitCards/Index.svelte';
    import { toFruitArray } from '../../../utils/Index';
    
</script>

<section id="fruits">
    <!-- {#if $getFruitsQuery.loading}
        Loading...
    {:else if $getFruitsQuery.error}
        Errors
    {:else if $getFruitsQuery.data}
         <FruitCards
        fruits={toFruitArray($getFruitsQuery.data.fruits)}
        />
    {/if} -->
</section>