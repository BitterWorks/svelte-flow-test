<script lang="ts">
    import Form from "../components/Form.svelte";
    import Button from "../components/index/Button.svelte";
    import type { Fruit } from "../types/IndexTypes";

    let fruits: Fruit[] = [
        {name: "Manzana", color: "Red", amount: 5, id: 1},
        {name: "Banana", color: "Yellow", amount: 1, id: 2},
        {name: "Grape", color: "Purple", amount: 3, id: 3}
    ];

    function deleteFruit(id: number): void{
        fruits = fruits.filter((fruit) => fruit.id != id);
    };

    function addFood(e: CustomEvent): void{
        const fruit = e.detail;
        fruits = [fruit, ...fruits];
    };

</script>
<main class="container">

    <Form on:addFruit={addFood}/>

    {#each fruits as fruit (fruit.id)}
        <article>
            <h5>{fruit.name}</h5>
            <p>Color: {fruit.color}</p>
            <p class:warning={fruit.amount < 4}>Cant.: {fruit.amount}</p>
            <p>Id: {fruit.id}</p>
            <div class="buttons">
                <Button
                iconName={"trash"}
                on:click|once={() => deleteFruit(fruit.id)}
                />
                <Button
                iconName={"edit"}
                />
            </div>
        </article>
    {:else}
        <p>Todavía no hay frutas</p>
    {/each}

</main>
<style>
    .warning {
        color: orange;
    }
</style>