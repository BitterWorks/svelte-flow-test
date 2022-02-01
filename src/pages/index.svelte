<script lang="ts">
    import { query, ReadableQuery } from 'svelte-apollo';

    import Form from "../components/Form.svelte";
    import type { Fruit, FruitsQuery } from "../types/Index";
    import { GET_FRUITS } from '../graphql/queries/Index';
    import Fruits from '../components/index/Fruits.svelte';


    let getFruitsQuery: ReadableQuery<FruitsQuery<Fruit[]>> = query(GET_FRUITS);  

</script>
<main class="container">
    <Form {getFruitsQuery} />
    <Fruits {getFruitsQuery} />
</main>