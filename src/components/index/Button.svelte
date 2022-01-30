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
        width: 49%;
        display: inline;
    }

    .trash {
        background-color: darkred;
        border-color: rgb(168, 0, 0);
    }

    .trash:hover {
        background-color: rgb(192, 3, 3);
    }

    .edit {
        background-color: orange;
        border-color: rgb(255, 157, 0);
    }

    .edit:hover {
        background-color: rgb(255, 196, 0);
    }

    .back {
        background-color: grey;
        border-color: rgb(177, 177, 177);
    }

    .back:hover {
        background-color: rgb(177, 177, 177);
    }
</style>