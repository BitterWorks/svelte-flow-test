<script lang="ts">
    import type { Fruit } from "../types/IndexTypes";
    
    import { createEventDispatcher } from "svelte";


    let name: string;
    let color: string;
    let amount: number;

    function handleSubmit(){
        const fruit: Fruit = {
            name: name,
            color: color,
            amount: amount,
            id: Math.random()
        };
        dispatch("addFruit", fruit);
    };

    let dispatch = createEventDispatcher();
</script>

<article>
    <h2>Añadí tu Fruta</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="name" bind:value={name}>
        <input type="text" placeholder="color" bind:value={color}>
        <input type="number" placeholder="amount" bind:value={amount}>
        <button>Añadir</button>
    </form>
</article>

<style>

</style>