<script>
  import Sidebar from "../../components/Sidebar.svelte";
</script>

<Sidebar />

<main>
  <h1>Security Rapport</h1>
  <div class="rapport-container">
    <div class="rapport-item-container">1</div>
    <div class="rapport-item-container">2</div>
    <div class="rapport-item-container">3</div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .rapport-container {
    width: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .rapport-item-container {
    width:  30%;
    
  }
</style>
