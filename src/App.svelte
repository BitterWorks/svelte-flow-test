<script>
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';

  import { ApolloClient, InMemoryCache } from "@apollo/client";
  import { setClient } from "svelte-apollo";

  const client = new ApolloClient({
    uri:"http://127.0.0.1:8001/graphql/",
    cache: new InMemoryCache(),
    request: fetchOptions => {
            console.log('fetchOptions', fetchOptions);
        },

        onError: ({ networkError, graphQLErrors, response, operation }) => {
            console.log('graphQLErrors', graphQLErrors);
            console.log('networkError', networkError);
            console.log('response', response);
            console.log('operation', operation);
        },
    });
    setClient(client);
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</svelte:head>

<Router {routes} />
