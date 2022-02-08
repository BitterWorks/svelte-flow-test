<script lang="ts">
    import type { Fruit } from "../../../../types/Index";

    import EditFruitCard from "./EditFruitCard.svelte";
    import FruitCard from "./FruitCard.svelte";

    export let fruits: Fruit[];

    let editing: number[] = [];

    async function deleteFruit(e: CustomEvent){
        // const id = e.detail;
        // try {
        //     await deleteFruitMutation({variables: {
        //         id: id
        //     }});
        //     getFruitsQuery.refetch();
        //     // TODO: toast
        // } catch {
        //     //TODO: toast
        // };
    };
    function undoEdit(e: CustomEvent): void{
        const fruitId = e.detail.id;
        editing = editing.filter(id => id != fruitId);
    };
    function editMode(e:CustomEvent): void{
        const fruitId = e.detail;
        editing = [fruitId, ...editing];
    };
    async function saveEdit(e: CustomEvent){
        // const fruit = e.detail;
        // try {
        //     await updateFruitQuery({variables: {
        //         fruitName: fruit.name,
        //         color: fruit.color,
        //         amount: fruit.amount,
        //         id: fruit.id
        //     }});
        //     getFruitsQuery.refetch();
        //     undoEdit(e);
        //     // TODO: toast
        // } catch {
        //     //TODO: toast
        // };
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