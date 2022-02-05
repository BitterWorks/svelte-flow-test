<script lang="ts">
    import { query } from 'svelte-apollo';

    import Form from "../components/index/Form.svelte";
    import type { GetFruitsQuery } from "../types/Index";
    import { GET_FRUITS } from '../graphql/operations/Index';
    import Fruits from '../components/index/Fruits/Index.svelte';


    let getFruitsQuery: GetFruitsQuery = query(GET_FRUITS);  

</script>
<main class="container">
    <Form {getFruitsQuery} />
    <Fruits {getFruitsQuery} />
</main>