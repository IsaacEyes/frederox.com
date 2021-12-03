::: info
This page is not complete, therefore may be missing information
:::

# Titanium Ore

Titanium ore is an essential resource which is used for creating many items inside of cosmos.

## Finding Titanium

![Titanium ore](/assets/guide/titanium-ore.png)

Titanium ore spawns in the deepslate layer (below y: 0). It will usually spawn in a group of 3-6, and when mined will drop Raw Titanium. Fortune will effect the amount of ore that is dropped by the block.

## Titanium Ingot

Raw Titanium can be smelted in a **blast furnace** into a Titanium Ingot

<craftingTable
  :input = "[
    'titanium_ingot', 'raw_titanium', 'titanium_ingot',
    'titanium_ingot', 'raw_titanium', 'raw_titanium',
    'titanium_ingot', 'titanium_ingot', 'titanium_ingot'
  ]"
  output = "raw_titanium"
/>

<script setup>
import blastFurnace from "/components/blastFurnace.vue"
import furnace from "/components/furnace.vue"
import craftingTable from "/components/craftingTable.vue"
</script>
