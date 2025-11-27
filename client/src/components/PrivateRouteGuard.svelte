<script>
  import { user, redirectAfterLogin } from "../stores/clientAuth.js";
  import { navigate, Route } from "svelte-routing";

  export let path;
  export let component;

  $: if ($user === null) {
    redirectAfterLogin.set(path);
    navigate("/", { replace: true });
  }
</script>

<Route {path} >
  {#if $user}
    <svelte:component this={component} />
  {/if}
</Route>
