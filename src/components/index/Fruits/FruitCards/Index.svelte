<script lang="ts">
    import { mutation } from "@urql/svelte";
    import type { Fruit,FruitInput,Scalars,UpdateFruitMutationVariables } from "../../../../graphql/generated/graphql";
    import { indexStores } from "../../../../stores/IndexStores";
    import { filterObj } from "../../../../utils/Index";
    import EditFruitCard from "./EditFruitCard.svelte";
    import FruitCard from "./FruitCard.svelte";
    const { fruitListStore, updateFruitStore } = indexStores;
    export let fruits: Fruit[];

    const updateFruitMutation = mutation(updateFruitStore);
    function updateFruit(newFruit: UpdateFruitMutationVariables){
        updateFruitMutation(newFruit);
    }; 


    let editing: Scalars["ID"][] = [];  
    function deleteFruit(e: CustomEvent){
    };
    function undoEdit(fruitId: Scalars["ID"]): void{
        editing = editing.filter(id => id != fruitId);
    };
    function editMode(e:CustomEvent): void{
        const fruitId = e.detail;
        editing = [fruitId, ...editing];
    };
    function saveEdit(e: CustomEvent){
        const id: Scalars["ID"] = e.detail[1].id
        delete e.detail[1].id
        const diffObj: FruitInput = filterObj(e.detail[0], e.detail[1]);
        if (Object.keys(diffObj).length > 0){
            updateFruit({...diffObj, id})
        };
        undoEdit(id);
        fruitListStore.reexecute();
    };
</script>
<div>
    {#each fruits as fruit (fruit.id)}
        {#if editing.includes(fruit.id)}
            <EditFruitCard
            {fruit}
            on:saveEdit={saveEdit}
            on:undoEdit={() => undoEdit(fruit.id)}
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