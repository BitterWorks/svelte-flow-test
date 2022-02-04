<script lang="ts">
    import { mutation } from "svelte-apollo";

    import { ADD_FRUIT } from "../../graphql/Queries";
    import { indexStore } from "../../stores/Index";
    
    const { refetchQuery } = indexStore;

    let createFruitQuery = mutation(ADD_FRUIT);
    
    let name: string;
    let color: string;
    let amount: number;
    async function addFruit(){
        try {
            await createFruitQuery({variables: {
                fruitName: name,
                color: color,
                amount: amount
            }});
            refetchQuery();
        } catch {
            //TODO: toast
        };
    };

</script>

<article>
    <h2>Añadí tu Fruta</h2>
    <form on:submit|preventDefault={addFruit}>
        <input type="text" placeholder="name" bind:value={name}>
        <input type="text" placeholder="color" bind:value={color}>
        <input type="number" placeholder="amount" bind:value={amount}>
        <button>Añadir</button>
    </form>
</article>