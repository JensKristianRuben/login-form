<script>
  import Sidebar from "../../components/sidebar.svelte";
  import GenerateIcon from "../../components/icons/GenerateIcon.svelte";
  import CopyIcon from "../../components/icons/CopyIcon.svelte";

  import { onMount } from "svelte";
  import { io } from "socket.io-client";
  import toastr from "toastr";

  let password = $state("");
  let socket;
  let strength = $state(4);
  let strengthText = $derived(() => {
    if (strength === 1) return "WEAK";
    if (strength === 2) return "FAIR";
    if (strength === 3) return "GOOD";
    if (strength === 4) return "STRONG";
    return "";
  });
  let method = $state("standard");

  onMount(() => {
    socket = io("http://localhost:8080");

    socket.on("server-password", (newPassword) => {
      password = newPassword;
    });

    socket.on("server-error", (msg) => {
      console.error(msg);
      password = "ERROR";
    });

    return () => socket.disconnect();
  });

  function handleCopy() {
    if (password !== "" && password !== "Loading...") {
      navigator.clipboard.writeText(password);
      toastr.succes("Password copied");
    }
  }

  function chooseMethod() {
    if (method === "standard") {
      console.log("standard");
    }
    if (method === "random-thunder") {
      password = "Loading...";
      socket.emit("get-external-password");
    }
  }
</script>

<Sidebar />

<main>
  <div class="password-generator-container">
    <div class="password-text-and-button-wrapper">
      <p>{password}</p>
      <CopyIcon onclick={handleCopy} />
      <GenerateIcon onclick={chooseMethod} />
    </div>
    <div class="strength-bar-info">
      <p>Strength</p>
      <p id="strength-value">{strengthText()}</p>
    </div>
    <div class="strength-bar">
      <div class="bar {strength >= 1 ? 'level-' + strength : ''}"></div>
      <div class="bar {strength >= 2 ? 'level-' + strength : ''}"></div>
      <div class="bar {strength >= 3 ? 'level-' + strength : ''}"></div>
      <div class="bar {strength >= 4 ? 'level-' + strength : ''}"></div>
    </div>
  </div>

  <div class="generate-option-grid">
    <button
      class="generate-option {method === 'standard' ? 'selected' : ''}"
      onclick={() => (method = "standard")}
    >
      <h3>Standard randomness</h3>
      <p>Kinda fake randomness</p>
    </button>
    <button
      class="generate-option {method === 'random-thunder' ? 'selected' : ''}"
      onclick={() => (method = "random-thunder")}
    >
      <h3>Thunder Random</h3>
      <p>Computers fake it, nature doesn't.</p>
    </button>
    <button
      class="generate-option {method === '3' ? 'selected' : ''}"
      onclick={() => (method = "3")}
    >
      <h3>3</h3>
      <p></p>
    </button>
    <button
      class="generate-option {method === '4' ? 'selected' : ''}"
      onclick={() => (method = "4")}
    >
      <h3>4</h3>
      <p></p>
    </button>
    <button
      class="generate-option {method === '5' ? 'selected' : ''}"
      onclick={() => (method = "5")}
    >
      <h3>5</h3>
      <p></p>
    </button>
    <button
      class="generate-option {method === '6' ? 'selected' : ''}"
      onclick={() => (method = "6")}
    >
      <h3>6</h3>
      <p></p>
    </button>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    width: 100%;
    padding: 20px;
    margin: 0;
    color: white;
  }
  .password-generator-container {
    width: 500px;
    border: 1px solid #6fbd96;
    background-color: #001a0d;
  }

  .password-text-and-button-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .generate-option-grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 20px;
    justify-items: center;
  }

  .generate-option {
    width: 200px;
    height: 100px;
    border: 1px solid #6fbd96;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }

  .selected {
    border: 2px solid #00ff80;
    background-color: rgba(0, 255, 128, 0.1);
    color: white;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 255, 128, 0.2);
  }

  .strength-bar-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .strength-bar {
    height: 15px;
    flex-grow: 1;
    border: 2px solid white;
    background-color: transparent;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: row;
  }

  .bar {
    height: 10px;
    flex-grow: 1;
    border: 2px solid white;
    background-color: transparent;
    transition: all 0.3s ease;
  }
  .level-1 {
    background-color: #f64a4a;
    border-color: #f64a4a;
  }

  .level-2 {
    background-color: #fb7c58;
    border-color: #fb7c58;
  }

  .level-3 {
    background-color: #f8cd65;
    border-color: #f8cd65;
  }

  .level-4 {
    background-color: #00ff80;
    border-color: #00ff80;
    box-shadow: 0 0 10px rgba(0, 255, 128, 0.4);
  }

  #strength-value {
    display: flex;
    justify-content: flex-end;
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }
</style>
