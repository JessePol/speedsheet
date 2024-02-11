<script lang="ts">
  import { onMount } from "svelte";
  import { Sheet, SheetConfig, BasicHTMLRenderer } from "speedsheet";

  let element: HTMLElement;

  const sheetConfig = new SheetConfig(10, 10);

  const sheet = new Sheet(sheetConfig);

  onMount(() => {
    const renderer = new BasicHTMLRenderer(element, sheet);
    renderer.renderSheet();
  });
</script>

<section bind:this={element}></section>
