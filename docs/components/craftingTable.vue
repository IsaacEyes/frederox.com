<template>
  <div class="crafting-table" style="image-rendering: pixelated">
    <p class="title" style="padding-left: 10px">Crafting Table</p>

    <div style="display: grid; padding: 10px; padding-top: 0">
      <itemSlot :item="input[0]" style="grid-column-start: 1; grid-row-start: 1" />
      <itemSlot :item="input[1]" style="grid-column-start: 2; grid-row-start: 1" />
      <itemSlot :item="input[2]" style="grid-column-start: 3; grid-row-start: 1" />
      <itemSlot :item="input[3]" style="grid-column-start: 1; grid-row-start: 2" />
      <itemSlot :item="input[4]" style="grid-column-start: 2; grid-row-start: 2" />
      <itemSlot :item="input[5]" style="grid-column-start: 3; grid-row-start: 2" />
      <itemSlot :item="input[6]" style="grid-column-start: 1; grid-row-start: 3" />
      <itemSlot :item="input[7]" style="grid-column-start: 2; grid-row-start: 3" />
      <itemSlot :item="input[8]" style="grid-column-start: 3; grid-row-start: 3" />

      <img src="/assets/common/arrow.png" style="width: 75px; padding: 5px; grid-column-start: 4; grid-row-start: 2" alt="Arrow" />

      <item-slot :item="output" style="grid-column-start: 5; grid-row-start: 2" />
    </div>
  </div>
</template>

<script setup>
import { withBase, useData } from "vitepress";
import itemSlot from "/components/ui/itemSlot.vue";

const props = defineProps({
  input: Array,
  output: String,
});
</script>

<style>
@font-face {
  font-family: "Minecraft Regular";
  src: url("/assets/1_Minecraft-Regular.eot?") format("eot"), url("/assets/1_Minecraft-Regular.woff") format("woff"),
    url("/assets/1_Minecraft-Regular.ttf") format("truetype"), url("/assets/1_Minecraft-Regular.svg#Minecraft-Regular") format("svg");
  font-weight: normal;
  font-style: normal;
}

.crafting-table {
  background-color: #c6c6c6;
  max-width: 400px;
  border-radius: 3px;
}

.title {
  font-family: "Minecraft Regular";
  font-size: 25px;
  margin: 0;
}
</style>
