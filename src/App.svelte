<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';

  import client from "../src/graphql/_client";
  import { setClient } from '@urql/svelte';
  setClient(client);
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</svelte:head>

<Router {routes} />
