<template>
  <div class="blast-furnace">
    <p class="title" style="padding-left: 10px">Blast Furnace</p>

    <div style="display: grid; grid-column-gap: 20px; padding: 10px">
      <div style="grid-column-start: 1">
        <itemSlot :item="input" />
      </div>
      <div style="grid-column-start: 2">
        <img src="/assets/common/arrow.png" style="width: 75px" alt="Arrow" />
      </div>
      <div style="grid-column-start: 3">
        <itemSlot :item="output" />
      </div>
      <div>
        <img src="/assets/common/flame.png" style="margin-left: 7.5px; width: 60px" alt="Flame" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase, useData } from "vitepress";
import itemSlot from "/components/ui/itemSlot.vue";

const props = defineProps({
  input: String,
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

.blast-furnace {
  background-color: #c6c6c6;
  image-rendering: pixelated;
  max-width: 400px;
  border-radius: 3px;
}

.row {
  display: flex;
  justify-content: space-around;
}

.title {
  font-family: "Minecraft Regular";
  font-size: 25px;
  margin: 0;
}
</style>
