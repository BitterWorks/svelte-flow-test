import { createClient } from "@urql/svelte";

export default createClient({
    url: `${import.meta.env.VITE_API_BASE_URL}graphql/`
});