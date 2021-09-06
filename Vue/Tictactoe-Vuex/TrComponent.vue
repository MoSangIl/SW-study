<template>
  <tr>
    <td-component
      v-for="(cellData, cellIndex) in rowData"
      :key="cellIndex"
      :cell-index="cellIndex"
      :row-index="rowIndex"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";
export default {
  components: {
    TdComponent,
  },
  props: {
    rowIndex: Number,
  },
  computed: {
    rowData() {
      return this.$store.state.tableData[this.rowIndex];
    },
  },
};
</script>
