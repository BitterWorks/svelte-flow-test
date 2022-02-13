<script lang="ts">
    import { query } from "@urql/svelte";
    import FruitDetail from "../components/fruitDetail/FruitDetail.svelte";

    import type { Scalars } from "../graphql/generated/graphql";
    import { indexStores } from "../stores/IndexStores";
    const { retrieveFruitStore } = indexStores;

    export let fruitId: Scalars["ID"];
    retrieveFruitStore.variables = {
        id: fruitId
    }
    query(retrieveFruitStore)
</script>

<main class="container">
    <article>
        {#if $retrieveFruitStore.fetching}
            Loading...
        {:else if $retrieveFruitStore.error}
            {$retrieveFruitStore.error.message}
        {:else}
                <FruitDetail fruit={$retrieveFruitStore?.data?.fruit} />
        {/if} 
    </article>
</main>