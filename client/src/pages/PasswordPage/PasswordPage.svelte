<script>
  import { navigate } from "svelte-routing";

  async function logout() {
    const response = await fetch("http://localhost:8080/api/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      console.log("Logout failed");
      return;
    }
    navigate("/");
  }
</script>

<nav class="navigation-bar">
  <div class="side-dropdown">
    <img src="./a-way-in.png" alt="awayinvault logo" class="logo" />
    <a href="/passwords" class="menu-link">passwords</a>
    <a href="/activation" class="menu-link">Activation</a>
    <a href="/" class="menu-link">Login</a>
    <button class="logout-button" id="logoutButton" on:click={logout}
      >Logout</button
    >
  </div>
</nav>

<main class="passwords-main">
  <div class="logo-and-create-password-wrapper">
    <img src="/a-way-in.png" alt="awayinvault logo" class="logo-create-btn" />
    <h1>AwayinVault</h1>
    <button class="add-password-button">+</button>
  </div>
  <div class="search-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-search"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>

    <input
      type="text"
      name="passwordsSearchBar"
      id="passwordsSearchBar"
      placeholder="search passwords..."
      class="passwords-search-bar"
    />
  </div>
</main>

<style>
  .navigation-bar {
    display: flex;
    align-items: center;
  }
  .side-dropdown {
    position: absolute;
    top: 0;
    left: 15px;
    width: 250px;
    height: 100vh;
    background-color: #012c01;
    transform: translateX(-90%);
    transition: transform 0.3s ease;
    z-index: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .side-dropdown:hover {
    transform: translateX(-10%);
  }

  .menu-link {
    padding: 12px 20px;
    color: #e8f5e9;
    text-decoration: none;
    font-size: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition:
      background 0.2s,
      padding-left 0.2s;
  }

  .menu-link:hover {
    background: rgba(255, 255, 255, 0.08);
    padding-left: 28px;
  }

  .logout-button {
    padding: 12px 20px;
    font-size: 15px;
    color: #ffb3b3;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transition:
      background 0.2s,
      padding-left 0.2s;
    margin-top: auto;
  }

  .logout-button:hover {
    background: rgba(255, 50, 50, 0.15);
    padding-left: 28px;
  }

  .passwords-main {
    height: 100vh;
  }

  .logo {
    height: 50px;
    width: 50px;
    margin: 0 auto;
  }

  /* -------------------------------------LOGO AND CREATE BUTTON WRAPPER ---------------------------------------*/

  .logo-and-create-password-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    max-width: 1000px;
  }

  .logo-create-btn {
    margin-top: 50px;
    width: 100px;
    height: 100px;
  }
  h1 {
    font-size: 4em;
    margin-top: 50px;
    color: #6fbd96;
  }

  .add-password-button {
    background-color: #6fbd96;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-left: 20px;
  }

  .add-password-button:hover {
    background-color: #00ff80;
    transform: translateY(-2px);
    box-shadow: 0 0 8px rgba(51, 170, 119, 0.5);
  }

  /* ---------------------------------------- SEARCH BAR ----------------------------- */
  .search-wrapper {
    position: relative;
    width: 80%;
    margin: 0 auto;
    max-width: 1000px;
  }

  .lucide-search {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    pointer-events: none;
    color: #6fbd96;
  }
  .passwords-search-bar {
    width: 70%;
    max-width: 1000px;
    padding: 12px 40px;
    font-size: 1rem;
    border: 1px solid #6fbd96;
    color: #6fbd96;
    border-radius: 8px;
    outline: none;
    display: block;
    margin: 20px auto;
    box-sizing: border-box;
    background-color: #001a00;
    transition: all 0.3s ease;
  }
  .passwords-search-bar:focus {
    width: 100%;
    border: 1px solid #00ff80;
    box-shadow: 0 0 8px rgba(51, 170, 119, 0.5);
  }
</style>
