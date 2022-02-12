<script lang="ts">
    import { mutation } from "@urql/svelte";
    import { toasts } from "svelte-toasts";
    import type { DeleteFruitMutationVariables,Fruit,FruitInput,Scalars,UpdateFruitMutationVariables } from "../../../../graphql/generated/graphql";
    import { indexStores } from "../../../../stores/IndexStores";
    import { indexConstants } from "../../../../utils/Constants";
    import { filterObj } from "../../../../utils/Logic";
    import EditFruitCard from "./EditFruitCard.svelte";
    import FruitCard from "./FruitCard.svelte";
    const { fruitListStore, updateFruitStore, deleteFruitStore } = indexStores;
    export let fruits: Fruit[];

    let editing: Scalars["ID"][] = JSON.parse(localStorage.getItem("editing") as string) || [];
    $: console.log(editing)
    $: editing && localStorage.setItem("editing", JSON.stringify(editing));

    function undoEdit(fruitId: Scalars["ID"]): void{
        console.log(editing)
        editing = editing.filter(id => id != fruitId);
    };
    function editMode(e:CustomEvent): void{
        const fruitId = e.detail;
        editing = [fruitId, ...editing];
    };
    const updateFruitMutation = mutation(updateFruitStore);
    function updateFruit(newFruit: UpdateFruitMutationVariables){
        updateFruitMutation(newFruit);
    }; 
    function saveEdit(e: CustomEvent){
        const id: Scalars["ID"] = e.detail[1].id
        delete e.detail[1].id
        const diffObj: FruitInput = filterObj(e.detail[0], e.detail[1]);
        if (Object.keys(diffObj).length > 0){
            updateFruit({...diffObj, id})
        };
        undoEdit(id);
        toasts.success({
            title: "Fruta guardada!",
            description: "Salió todo bien",
            ...indexConstants.TOAST_DEFAULTS
        });
    };
    const deleteFruitMutation = mutation(deleteFruitStore);
    function delFruit(fruitToDelete: DeleteFruitMutationVariables){
        deleteFruitMutation(fruitToDelete);
    };
    function deleteFruit(e: CustomEvent){
        const id: Scalars["ID"] = e.detail;
        delFruit({id});
        toasts.warning({
            title: "Fruta borrada!",
            description: "Salió todo bien",
            ...indexConstants.TOAST_DEFAULTS
        });
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