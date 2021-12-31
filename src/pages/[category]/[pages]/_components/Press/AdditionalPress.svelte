<script>
  import { logos } from "./logos";

  const images = logos;
</script>

<div class="wrapper">
  <h5 class="content-header">Also appeared on</h5>
  <div class="container">
    {#each logos as logo}
      <div class="item-container">
        <div
          style="padding-top: {(logo.height / logo.width) * 100}%;"
          class="aspect-ratio-container"
        >
          <div class="image-container">
            <img src={logo.url} class="image" alt="" />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .content-header {
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    text-align: center;
    font-size: 6em;
    padding: 20px;
    color: #68208e;
    @media screen and (max-width: 820px) {
      font-size: 10vw;
    }
  }
  .wrapper {
    width: 100vw;
    height: 100%;
    display: flex;
    position: absolute;

    flex-direction: column;
    transform: translateY(90vh);
    align-items: center;
    justify-content: center;
    padding: 20px;
    .container {
      height: 100%;
      max-width: 1200px;
      width: 100%;
      padding: 15px;
      overflow-y: scroll;
      display: flex;
      position: relative;
      border-radius: 12px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .item-container {
    overflow: hidden;
    width: 120px;
    padding: 10px;
    position: relative;

    @media screen and (max-width: 430px) {
      display: flex;

      flex-direction: column-reverse;
    }
  }

  .aspect-ratio-container {
    position: relative;
    .image {
      opacity: 1;
      width: 100%;
      height: 100%;
      display: block;
      display: flex;
      object-fit: cover;
      object-position: center center;
    }
  }
  .image-container {
    overflow: hidden;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
