<template>
  <tr>
    <td-component
      v-for="(cellData, cellIndex) in rowData"
      :key="cellIndex"
      :cell-data="cellData"
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
    rowData: Array,
    rowIndex: Number,
  },
};
</script>
