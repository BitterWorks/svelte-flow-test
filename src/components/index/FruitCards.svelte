<script lang="ts">
    import type { Fruit } from "../../types/Index";

    import EditFruitCard from "./EditFruitCard.svelte";
    import FruitCard from "./FruitCard.svelte";

    export let fruits: Fruit[];

    let editing: number[] = [];

    function deleteFruit(e: CustomEvent): void{
        const id = e.detail;
        // fruits = fruits.filter((fruit) => fruit.id != id);
    };
    function saveEdit(e: CustomEvent): void{
        // const fruit = e.detail;
        // fruits = [fruit, ...fruits.filter(item => item.id != fruit.id)];
        // editing = editing.filter(id => id != fruit.id);
    };
    function undoEdit(e: CustomEvent): void{
        // const fruitId = e.detail;
        // editing = editing.filter(id => id != fruitId);
    };
    function editMode(e:CustomEvent): void{
        // const fruitId = e.detail;
        // editing = [fruitId, ...editing];
    };
</script>
<div>
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
</div>