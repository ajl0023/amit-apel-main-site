<script>
  import BarPage from "./BarPage.svelte";
  export let scoped;
</script>

<div class="upc-digit" data-val={$$props["data-val"]}>
  <div class="bar bar-inactive" />
  {#if $$props.target}
    <BarPage {scoped} title={$$props.title} />{:else}
    <div class="bar bar-inactive" />{/if}

  <div class="bar bar-inactive" />
  <div class="bar bar-inactive" />
</div>

<style lang="scss">
  @for $i from 0 through 9 {
    .upc-digit[data-val="#{$i}"] {
      @media screen and (max-width: 650px) {
        @if $i != 3 {
          display: none;
        } @else {
          width: 14%;
          margin-left: 1.5rem;
          &:nth-child(5) {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
