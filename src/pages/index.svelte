<script lang="ts">
    import Form from "../components/Form.svelte";
    import EditFruitCard from "../components/index/EditFruitCard.svelte";
    import FruitCard from "../components/index/FruitCard.svelte";
    import type { Fruit } from "../types/IndexTypes";

    let fruits: Fruit[] = [
        {name: "Manzana", color: "Red", amount: 5, id: 1},
        {name: "Banana", color: "Yellow", amount: 1, id: 2},
        {name: "Grape", color: "Purple", amount: 3, id: 3}
    ];

    let editing: number[] = [];

    function deleteFruit(e: CustomEvent): void{
        const id = e.detail;
        fruits = fruits.filter((fruit) => fruit.id != id);
    };
    function saveEdit(e: CustomEvent): void{
        const fruit = e.detail;
        fruits = [fruit, ...fruits.filter(item => item.id != fruit.id)];
        editing = editing.filter(id => id != fruit.id);
    };
    function undoEdit(e: CustomEvent): void{
        const fruitId = e.detail;
        editing = editing.filter(id => id != fruitId);
    };
    function editMode(e:CustomEvent): void{
        const fruitId = e.detail;
        editing = [fruitId, ...editing];
    };
    function addFood(e: CustomEvent): void{
        const fruit = e.detail;
        fruits = [fruit, ...fruits];
    };

</script>
<main class="container">

    <Form on:addFruit={addFood}/>

    {#each fruits as fruit (fruit.id)}
        {#if editing.includes(fruit.id)}
            <EditFruitCard
            {fruit}
            on:saveEdit={saveEdit}
            on:undoEdit={undoEdit}
            />
        {:else}
            <FruitCard
                {fruit}
                on:deleteFruit={deleteFruit}
                on:editMode={editMode}
            />
        {/if}
    {:else}
        <p>Todavía no hay frutas</p>
    {/each}

</main>
<style>
    
</style>