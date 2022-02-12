<script lang="ts">
    import type { Fruit } from "../../graphql/generated/graphql";
    export let fruit: Fruit | undefined;
</script>

<div>
    <h1>{fruit?.name}</h1>
    <hr>
    <br>
    <p>Color => {fruit?.color.name}</p>
    <p>Cantidad => {fruit?.amount}</p>
    <p>ID => {fruit?.id}</p>
</div>