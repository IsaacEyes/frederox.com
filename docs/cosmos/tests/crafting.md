::: warning
This page is just for testing components!
:::

## Crafting table

<craftingTable
  :input = "[
    'titanium_ingot', 'raw_titanium', 'titanium_ingot', 
    'titanium_ingot', 'raw_titanium', 'raw_titanium',
    'titanium_ingot', 'titanium_ingot', 'titanium_ingot'
  ]"
  output = "raw_titanium"
/>

## Furnace

<furnace 
  input="raw_titanium"
  output="titanium_ingot"
/>

## Blast Furnace

<blastFurnace
  input="raw_titanium"
  output="titanium_ingot"
/>

<script setup>
import craftingTable from "/components/craftingTable.vue"
import furnace from "/components/furnace.vue"
import blastFurnace from "/components/blastFurnace.vue"
</script>
