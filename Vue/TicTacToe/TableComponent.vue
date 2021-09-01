<template>
  <table>
    <tr-component
      v-for="(rowData, rowIndex) in tableData"
      :key="rowIndex"
      :row-data="rowData"
      :row-index="rowIndex"
    ></tr-component>
  </table>
</template>

<script>
import TrComponent from "./TrComponent";

export default {
  components: {
    TrComponent,
  },
  props: {
    tableData: Array,
  },
};
</script>

<style></style>
