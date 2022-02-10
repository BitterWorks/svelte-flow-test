<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Fruit } from "../../../../graphql/generated/graphql";
    import Button from "../../shared/Button.svelte";

    export let fruit: Fruit;

    let dispatch = createEventDispatcher();
</script>

<article>
    <h5>{fruit.name}</h5>
    <p>Color: {fruit.color.name}</p>
    <p class:warning={fruit.amount < 4}>Cant.: {fruit.amount}</p>
    <p>Id: {fruit.id}</p>
    <div class="buttons">
        <Button
        iconName={"trash"}
        on:click|once={() => dispatch("deleteFruit", fruit.id)}
        />
        <Button
        iconName={"edit"}
        on:click|once={() => dispatch("editMode", fruit.id)}
        />
    </div>
</article>

<style>
    .warning {
        color: orange;
    }
</style>