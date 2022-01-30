<script lang="ts">

    import Toast from "../components/index/Toast.svelte";

    interface Fruit {
        name:   string,
        color?: string,
        amount: number,
        id:     number
    }

    let fruits: Fruit[] = [
        {name: "Manzana", color: "Red", amount: 5, id: 1},
        {name: "Banana", color: "Yellow", amount: 1, id: 2},
        {name: "Grape", color: "Purple", amount: 3, id: 3}
    ];

    function deleteFruit(id: number): void{
        // Hacer acá el call a borrar la instancia de la fruta
        fruits = fruits.filter((fruit) => fruit.id != id);
        console.log(fruits);
    };
</script>
<main class="container">

    <Toast />


    {#each fruits as fruit (fruit.id)}
        <article>
            <h5>{fruit.name}</h5>
            <p>Color: {fruit.color}</p>
            <p>Cant.: {fruit.amount}</p>
            <p>
                Id: {fruit.id}
                {#if fruit.amount < 4}
                    <ins>
                        ¡Quedan pocas!
                    </ins>
                {/if}
            </p>
            <button on:click={() => deleteFruit(fruit.id)}>Borrar Fruta</button>
        </article>
    {:else}
        <p>Todavía no hay frutas</p>
    {/each}

</main>
<style>
    ins {
        margin-left: 1rem;
    }
</style>