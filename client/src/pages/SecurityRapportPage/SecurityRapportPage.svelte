<script>
  import { onMount } from "svelte";
  import Sidebar from "../../components/Sidebar.svelte";

  let amountOfPasswords = $state();
  let vulnarblePasswords = $state();

  onMount(async () => {
    const response = await fetch("http://localhost:8080/api/passwords/count", {
      credentials: "include",
      headers: {
        "Content-Type": "Application/json"
      }
    })

    
    if (response.ok) {
      const result = await response.json();
      console.log(result.count);
      
      amountOfPasswords = result.count;
    }
    
  });
</script>

<Sidebar />

<main>
  <h1>Security Rapport</h1>
  <div class="rapport-container">
    <div class="rapport-item-container">{amountOfPasswords}</div>
    <div class="rapport-item-container">{vulnarblePasswords}</div>
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
    padding: 50px;
    gap: 20px;
  }
  .rapport-item-container {
    width: 30%;
    height: 300px;
    border: 1px solid #6fbd96;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
