<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Fruit, FruitInput, UpdateFruitMutationVariables } from "../../../../graphql/generated/graphql";
    import Button from "../../shared/Button.svelte";
    
    let dispatch = createEventDispatcher();

    export let fruit: Fruit | FruitInput | Omit<UpdateFruitMutationVariables, "id">;
    const oldFruit: Omit<UpdateFruitMutationVariables, "id"> = {
        fruitName: (fruit as Fruit).name,
        color: (fruit as Fruit).color.name,
        amount: (fruit as Fruit).amount
    };
    const id: number | any = (fruit as Fruit).id
    const initialName: string = (fruit as Fruit).name;
    let name: string = (fruit as Fruit).name;
    let color: string = (fruit as Fruit).color.name;
    let amount: number = (fruit as Fruit).amount;
    $: fruit = {
        fruitName: name,
        color: color,
        amount: amount,
        id: id
    };
    $: fruitNormalized = fruit as Fruit
    $: fruits = [oldFruit, fruitNormalized]

</script>

<article class="fruitEdit">
    <h5>{initialName} (Editando)</h5>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="color" bind:value={color}>
    <input type="number" placeholder="amount" bind:value={amount}>
    <p>Id: {fruitNormalized.id}</p>
    <Button
    iconName={"back"}
    on:click|once={() => dispatch("undoEdit", fruitNormalized.id)}
    />
    <Button
    iconName={"tick"}
    on:click|once={() => dispatch("saveEdit", fruits)}
    />
</article>