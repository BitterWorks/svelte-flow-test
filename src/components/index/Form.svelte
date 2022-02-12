<script lang="ts">
    import { toasts } from "svelte-toasts";
    import { indexConstants } from "../../utils/Constants";    
    import { mutation } from "@urql/svelte";
    import { indexStores } from "../../stores/IndexStores";

    const { createFruitStore } = indexStores;
    const { TOAST_DEFAULTS } = indexConstants;

    let fruitName: string;
    let color: string;
    let amount: number | undefined;
    
    const createFruitMutation = mutation(createFruitStore);
    function createFruit(){
        const newFruit = {
            fruitName,
            color,
            amount
        }
        createFruitMutation(newFruit).then(result => {
            if (!result.error){
                toasts.success({
                    title: "Fruta creada!",
                    description: "Salió todo bien",
                    ...TOAST_DEFAULTS
                });
            } else {
                toasts.error({
                    title: "No se pudo crear la fruta",
                    description: "Salió todo mal",
                    ...TOAST_DEFAULTS
                });
            };
        });
        fruitName = "";
        color = "";
        amount = undefined;
    };
</script>

<article>
    <h2>Añadí tu Fruta</h2>
    <form on:submit|preventDefault={createFruit}>
        <input type="text" placeholder="name" bind:value={fruitName}>
        <input type="text" placeholder="color" bind:value={color}>
        <input type="number" placeholder="amount" bind:value={amount}>
        <button>Añadir</button>
    </form>
</article>