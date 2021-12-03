<template>
  <img
    v-if="item"
    :src="withBase(`/assets/items/${item}.png`)"
    :style="`padding: 5px; width: 75px; background: url(${withBase(
      '/assets/common/slot.png'
    )}); background-size: cover; background-repeat: no-repeat; center;`"
    :alt="toolTip(item)"
    :title="toolTip(item)"
  />
</template>

<script setup>
import { withBase, useData } from "vitepress";

const props = defineProps({
  item: String,
});

function toolTip(text) {
  const words = text.replace("_", " ").split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}
</script>
