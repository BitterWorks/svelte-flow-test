<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { Fruit } from "../../../../graphql/generated/graphql";
    import Button from "../../shared/Button.svelte";
    import { url } from "@roxi/routify";

    export let fruit: Fruit;

    let dispatch = createEventDispatcher();
</script>

<article class="fruitCard">
    <a href={$url(`./${fruit.id}`)}><h5>{fruit.name}</h5></a>
    <p>
        Color: <span class="fruitColor">{fruit.color.name}</span>
    </p>
    <p
    class:warning={fruit.amount < 4}
    >
        Cant.: <span class="fruitAmount">{fruit.amount}</span>
    </p>
    <p>
        Id: <span class="fruitId">{fruit.id}</span>
    </p>
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