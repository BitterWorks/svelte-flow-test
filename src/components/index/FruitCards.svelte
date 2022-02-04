<script lang="ts">
    import { mutation } from 'svelte-apollo';

    import { DELETE_FRUIT, UPDATE_FRUIT } from '../../graphql/Queries';
    import type { Fruit } from "../../types/Index";
    import EditFruitCard from "./EditFruitCard.svelte";
    import FruitCard from "./FruitCard.svelte";
    import { indexStore } from '../../stores/Index';

    
    let editing: number[] = [];
    let updateFruitQuery = mutation(UPDATE_FRUIT);
    let deleteFruitMutation = mutation(DELETE_FRUIT);
    const { refetchQuery, fruitListQuery } = indexStore;
    
    $: console.log($fruitListQuery.result)
    let fruits: Fruit[] = []

    async function deleteFruit(e: CustomEvent){
        const id = e.detail;
        try {
            const response = await deleteFruitMutation({variables: {
                id: id
            }});
            refetchQuery();
            console.log(response)
            // TODO: toast
        } catch {
            //TODO: toast
        };
    };
    async function saveEdit(e: CustomEvent){
        const fruit = e.detail;
        try {
            await updateFruitQuery({variables: {
                fruitName: fruit.name,
                color: fruit.color,
                amount: fruit.amount,
                id: fruit.id
            }});
            refetchQuery();
            undoEdit(e);
            // TODO: toast
        } catch {
            //TODO: toast
        };
    };
    function undoEdit(e: CustomEvent): void{
        const fruitId = e.detail.id;
        editing = editing.filter(id => id != fruitId);
    };
    function editMode(e:CustomEvent): void{
        const fruitId = e.detail;
        editing = [fruitId, ...editing];
    };
</script>

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