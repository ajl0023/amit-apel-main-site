<script>
  import "./barcode.scss";
  import BarDigit from "./BarDigit.svelte";
  import BarMask from "./BarMask.svelte";
  import BarReset from "./BarReset.svelte";
  export let scoped;

  const upcDigits1 = [
    { val: 0 },
    { val: 3, title: "apel-design" },
    { val: 0 },
    { val: 1 },
    { val: 3, title: "architecture" },
    { val: 2 },
  ];
  const upcDigits2 = [
    { val: 3, title: "design" },
    { val: 1 },

    { val: 9 },
    { val: 3, title: "developments" },
    { val: 8 },

    { val: 0 },
  ];
</script>

<div class="container">
  <div class="logo-container">
    <div class="barcode">
      <BarReset />

      {#each upcDigits1 as dig}
        <BarDigit
          scoped="{scoped}"
          data-val="{dig.val}"
          title="{dig.title}"
          target="{dig.val === 3}"
        />
      {/each}

      <BarReset />
      {#each upcDigits2 as dig}
        <BarDigit
          scoped="{scoped}"
          data-val="{dig.val}"
          target="{dig.val === 3}"
          title="{dig.title}"
        />
      {/each}

      <BarReset />
    </div>
  </div>
</div>
<BarMask title="apel-design" />
<BarMask title="architecture" />
<BarMask title="design" />
<BarMask title="developments" />

<style lang="scss">
  @use "sass:math";
  .container {
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 650px) {
      margin-right: -1.5rem;
    }
  }
  .logo-container {
    padding-top: math.div(33%, 10) * 10;
    width: 100%;
    @media screen and (max-width: 650px) {
      display: flex;
      justify-content: space-evenly;
      padding-top: math.div(85%, 10) * 10;
    }
  }
</style>
