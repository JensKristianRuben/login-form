<script>
  import { Router, Link, Route } from "svelte-routing";

  let mode = "login";

  const goRight = () => (mode = "register");
  const goLeft = () => (mode = "login");
</script>

<main
  class="login-and-register-main-container"
  class:right-active={mode === "register"}
>
  <div class="info-box left-info">
    <h2 class="info-box-header">Velkommen</h2>
    <p class="info-box-text">
      Join our community and unlock amazing features. Create your account
      inseconds.
    </p>
    <button
      type="button"
      id="goRight"
      class="side-btn right-side"
      on:click={goRight}>Sign up?</button
    >
  </div>

  <form action="" class="left-form">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" />

    <label for="password">Password</label>
    <input type="password" id="password" name="password" />

    <button type="submit">Login</button>
  </form>
  <div class="info-box right-info">
    <h2 class="info-box-header">Hey</h2>
    <p class="info-box-text">
      Already part of our community? Log in in seconds.
    </p>
    <button
      type="button"
      id="goLeft"
      class="side-btn left-side"
      on:click={goLeft}>Already have Account?</button
    >
  </div>
  <form action="" class="right-form">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" />

    <label for="password">Password</label>
    <input type="password" id="password" name="password" />

    <label for="password2">Repeat Password</label>
    <input type="password" id="password2" name="password2" />

    <button type="submit">Register</button>
  </form>
</main>

<style>
  .login-and-register-main-container {
    position: relative;
    width: 800px;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    background: #0f260f;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  form {
    background-color: pink;
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition:
      transform 0.6s ease-in-out,
      opacity 0.6s ease-in-out;
  }

  .left-form {
    left: 0;
    background: #92f392;
    opacity: 0;
  }

  .right-form {
    right: 0;
    background: pink;
  }

  .info-box {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    color: white;
    z-index: 15;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  .left-info {
    left: 0;
    opacity: 1;
  }

  .right-info {
    right: 0;
    opacity: 0;
    transform: translateX(50%);
  }

  button {
    background: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
  }

  .side-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 12px 22px;
    border-radius: 8px;
    background: #fff;
    font-weight: bold;
    border: none;
    cursor: pointer;
    z-index: 20;
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
  }

  .right-side {
    right: 25%;
  }
  .left-side {
    left: 25%;
  }

  .active {
    display: block;
    transform: translateY(-5px);
  }
  .inactive {
    display: none;
  }
  .right-active .overlay {
    transform: translateX(100%);
  }
  .right-active .left-form {
    opacity: 1;
  }
  .right-active .right-form {
    transform: translateX(0);
    opacity: 0;
  }
  .right-active .left-info {
    opacity: 0;
    transform: translateX(-50%);
  }
  .right-active .right-info {
    opacity: 1;
    transform: translateX(0);
  }

  input {
    padding: 8px 12px;
    border-radius: 6px;
    border: none;
    outline: none;
  }

  form button[type="submit"] {
    margin-top: 12px;
    background: white;
    color: #333;
    font-weight: bold;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .login-and-register-main-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .login-and-register-main-container {
      width: 100%;
      height: 100%;
    }

    form {
      width: 100%;
      height: 50%;
      flex-direction: row;
    }
    .left-form {
      top: 0;
      z-index: 2;
    }
    .right-form {
      top: 100%;
      opacity: 0;
    }

    .overlay {
      width: 100%;
      height: 50%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right-active .overlay {
      transform: translateY(100%);
    }
    .right-active .left-form {
      transform: translateY(-100%);
      opacity: 0;
    }
    .right-active .right-form {
      transform: translateY(-100%);
      opacity: 1;
    }
  }
</style>
