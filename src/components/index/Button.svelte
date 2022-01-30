<script lang="ts">
    import Icon from "./Icon.svelte";

    export let iconName: string;
    export let text: string = "";

</script>

<button on:click class={iconName}>
    {#if iconName}
        <Icon name={iconName} /> 
    {:else}
        {text}
    {/if}
</button>

<style>
    button {
        width: fit-content;
        display: inline;
    }

    .trash {
        background-color: darkred;
        border-color: rgb(177, 0, 0);
    }

    .trash:hover {
        background-color: rgb(192, 3, 3);
    }
</style>