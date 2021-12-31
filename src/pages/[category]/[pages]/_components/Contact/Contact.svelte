<script>
  import { onMount } from "svelte";
  import { ready } from "@roxi/routify";
  let form;
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {})
      .catch((error) => alert(error));
  };
  onMount(() => {
    $ready();
  });
</script>

<div class="content-container">
  <div class="misc-info-wrapper">
    <div class="info-container">
      <h5>Hours</h5>
      <p>Monday-Friday 9am-5pm</p>
    </div>

    <div class="info-container">
      <h5>Address</h5>
      <p>33202 1/4 mulholland hwy</p>
      <p>malibu, ca 90265</p>
      <p>apeldesign@apeldesign.com</p>
    </div>
  </div>
  <form
    bind:this={form}
    name="emailForm"
    data-netlify="true"
    class="form-container flex-item"
    netlify
  >
    <input type="hidden" name="form-name" value="emailForm" />

    <div class="contact-field">
      <label for="" class="contact-label">Email</label>
      <input class="contact-input" name="email" />
    </div>

    <div class="contact-field">
      <div class="contact-control">
        <label for="" class="contact-label">Name</label>

        <input id="name-input" class="contact-input" type="text" name="name" />
      </div>
    </div>

    <div class="contact-field">
      <div class="contact-control">
        <label for="" class="contact-label">Country</label>

        <input
          id="country-input"
          class="contact-input"
          type="text"
          name="country"
        />
      </div>
    </div>
    <div class="contact-field">
      <div class="contact-control">
        <label for="" class="contact-label">Phone</label>

        <input
          id="phone-input"
          class="contact-input"
          type="phone"
          name="phone"
        />
      </div>
    </div>
    <div class="contact-field">
      <div class="contact-control">
        <label for="" class="contact-label">Message</label>
        <textarea
          id="message-input"
          class="contact-textarea contact-input"
          type="text"
          name="message"
        />
      </div>
    </div>
    <div class="contact-field">
      <div class="contact-control" />
    </div>

    <div class="contact-field">
      <div class="contact-control">
        <input
          on:click={handleSubmit}
          type="submit"
          class="contact-button contact-input contact-is-link contact-is-fullwidth"
        />
      </div>
    </div>
  </form>
</div>

<style lang="scss">
  .content-container {
    display: flex;
    padding: 1rem;

    justify-content: center;
    max-width: 800px;
    width: 100%;

    margin: auto;

    input[type="submit"] {
      background-color: #68208e;

      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
    @media screen and (max-width: 610px) {
      flex-direction: column-reverse;
    }
  }

  .misc-info-wrapper {
    display: flex;
    margin-right: 1rem;
    font-family: "Roboto Mono", monospace;
    flex-direction: column;
    width: 100%;

    .info-container {
      text-align: center;
      height: 100%;
      width: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
      background-color: white;
      box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
        rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
      padding: 48px;
      flex-direction: column;
      text-transform: uppercase;
      border-radius: 4px;

      h5 {
        color: #68208e;
        font-size: 1.2em;
      }
      p {
        font-size: 1em;
      }
    }
    @media screen and (max-width: 610px) {
      margin-right: 0rem;
      max-width: 100%;
    }
  }

  .form-container {
    display: flex;
    color: #1a1f36;

    background-color: white;
    box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
      rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
    padding: 48px;
    width: 100%;

    max-width: 448px;
    background: white;
    border-radius: 4px;

    flex-direction: column;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Ubuntu, sans-serif;
    @media screen and (max-width: 610px) {
      margin-bottom: 1.5rem;
      max-width: 100%;
    }
    @media screen and (max-width: 650px) {
      padding: 25px;
    }
  }

  .contact-input {
    width: 100%;
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;

    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  label {
    font-size: 14px;

    display: block;
    font-family: "Roboto Mono", monospace;
    font-weight: 400;
  }
</style>
