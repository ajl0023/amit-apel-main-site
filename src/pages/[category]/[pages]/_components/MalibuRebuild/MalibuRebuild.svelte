<script>
  import { ready } from "@roxi/routify";
  import { onMount } from "svelte";
  onMount(() => {
    $ready();
  });
</script>

<div class="container">
  <h3>Dear Friends and Neighbors,</h3>
  <div class="text-container">
    <p>
      If you're like me and my neighbors that have had your homes damaged or
      completely burnt from the wildfires, I want to extend my hand to you and
      support you as much as I can. While rebuilding my own personal loss, I've
      brought my team together to be here as a help and guide to work with you
      and build a new home. With 20 years of architectural experience I'm
      expecting to go through some obstacles given the size of this disaster. We
      will need to go through a learning process as we work with the authorities
      and help them to accommodate us; however, if we take this on as a
      community, we'll be able to overcome these obstacles more accurately and
      promptly.
    </p>
    <p class="credit">-Amit Apel</p>
    <div class="bottom-text-container">
      <p>Feel free to contact me or any one of my staff so we can meet.</p>
      <p>- Email: apeldesign@apeldesign.com</p>
      <p>- Phone: 310.317.0500</p>
      <p>
        Together we will heal and bring these cities back to life to create new
        memories.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .bottom-text-container {
    font-size: 0.6em;
    p:first-child {
      margin-bottom: 1rem;
    }
    p:nth-child(3) {
      margin-bottom: 1rem;
    }
  }
  .container {
    overflow-y: auto;
    height: 100%;
    font-family: unisans;
    display: flex;
    align-items: center;

    flex-direction: column;
    color: #68208e;
    padding: 1rem;
  }
  h3 {
    font-weight: 700;
    font-size: 2em;
    text-align: center;

    font-family: "Montserrat", sans-serif;
    margin-bottom: 1.3rem;
  }
  .text-container {
    text-align: center;
    font-size: 2em;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    max-width: 900px;

    p {
      font-size: 0.8em;
      font-weight: 500;
      &:last-child {
        font-size: 0.6em;
      }
    }
    .credit p {
      font-size: 0.4em;
    }
    .credit {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    @media screen and (max-width: 720px) {
      font-size: 1.5em;
    }
  }
</style>
