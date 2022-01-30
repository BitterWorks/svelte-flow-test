<script lang="ts">
    let show: boolean = true;
    function hideAlert(): void {
        show = false;
    };
</script>

{#if show}
    <div class="alert">
        ¡Solo por hoy! ¡50% de descuento en peras!
        <b on:click={hideAlert}>x</b>
    </div>
{/if}
<style>
    .alert {
        padding: 0.8rem;
        font-size: 1.2rem;
        background-color: green;
        border-radius: 4px;
        margin-bottom: 2rem;
    }
    b {
        float: right;
        margin-right: 0.5rem;
        cursor: pointer;
    }
</style>