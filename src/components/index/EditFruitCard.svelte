<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Fruit } from "../../types/IndexTypes";
    import Button from "./Button.svelte";

    export let fruit: Fruit;
    let name: string = fruit.name;
    let color: string = fruit.color ? fruit.color : "";
    let amount: number = fruit.amount;
    const id: number = fruit.id
    const initialName: string = name;

    let dispatch = createEventDispatcher();

    $: fruit = {
        name: name,
        color: color,
        amount: amount,
        id: id
    }

</script>

<article>
    <h5>{initialName} (Editando)</h5>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="color" bind:value={color}>
    <input type="number" placeholder="amount" bind:value={amount}>
    <p>Id: {fruit.id}</p>
    <Button
    iconName={"back"}
    on:click|once={() => dispatch("undoEdit", fruit.id)}
    />
    <Button
    iconName={"tick"}
    on:click|once={() => dispatch("saveEdit", fruit)}
    />
</article>