<script lang="ts">
import { mutation } from "@urql/svelte";
import type { MutationCreateFruitArgs } from "../../graphql/generated/graphql";
import { indexStores } from "../../stores/IndexStores";

    const { createFruitStore } = indexStores;

    let fruitName: string;
    let color: string;
    let amount: number | undefined;
    
    const createFruitMutation = mutation(createFruitStore);
    function createFruit(){
        const newFruit = {
            fruitName,
            color,
            amount
        }
        createFruitMutation(newFruit);
        fruitName = "";
        color = "";
        amount = undefined;
    };
</script>

<article>
    <h2>Añadí tu Fruta</h2>
    <form on:submit|preventDefault={createFruit}>
        <input type="text" placeholder="name" bind:value={fruitName}>
        <input type="text" placeholder="color" bind:value={color}>
        <input type="number" placeholder="amount" bind:value={amount}>
        <button>Añadir</button>
    </form>
</article>