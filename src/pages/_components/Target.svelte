<script>
  import { transition } from "../../crossfade";
  export let hide;
  export let key;

  const { receive, send } = $transition;
</script>

{#if !hide}
  <div class="canvas" in:receive={{ key: key }} out:send={{ key: key }} />
{/if}

<style>
  .canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    left: 0;
  }
</style>
