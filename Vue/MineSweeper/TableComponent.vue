<template>
  <table>
    <table>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td
          v-for="(cellData, cellIndex) in rowData"
          :key="cellIndex"
          :style="cellDataStyle(rowIndex, cellIndex)"
          @click="onClickTd(rowIndex, cellIndex)"
          @contextmenu.prevent="onRightClickTd(rowIndex, cellIndex)"
        >
          {{ cellDataText(rowIndex, cellIndex) }}
        </td>
      </tr>
    </table>
  </table>
</template>

<script>
import { mapState } from "vuex";
import {
  CODE,
  OPEN_CELL,
  FLAG_CELL,
  QUESTION_CELL,
  NORMALIZE_CELL,
  CLICK_MINE,
} from "./store";
export default {
  components: {},
  props: {},
  computed: {
    ...mapState(["tableData", "halted"]),
    cellDataStyle(state) {
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            return {
              background: "#444",
            };
          case CODE.CLICKED_MINE:
            return {
              background: "black",
              color: "white",
            };
          case CODE.OPENED:
            return {
              background: "white",
            };
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return {
              background: "red",
            };
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: "yellow",
            };
          default:
            return {
              background: "white",
            };
        }
      };
    },
    cellDataText() {
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.MINE:
            return "";
          case CODE.NORMAL:
            return "";
          case CODE.FLAG_MINE:
          case CODE.FLAG:
            return "!";
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            return "?";
          case CODE.CLICKED_MINE:
            return "펑";
          default:
            return this.$store.state.tableData[row][cell] || "";
        }
      };
    },
  },
  methods: {
    onClickTd(row, cell) {
      if (this.halted) {
        return;
      }
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL:
          this.$store.commit(OPEN_CELL, { row, cell });
          return;
        case CODE.MINE:
          this.$store.commit(CLICK_MINE);
          return;
        default:
          return;
      }
    },
    onRightClickTd(row, cell) {
      if (this.halted) {
        return;
      }
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL:
        case CODE.MINE:
          this.$store.commit(FLAG_CELL, { row, cell });
          return;
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          this.$store.commit(QUESTION_CELL, { row, cell });
          return;
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          this.$store.commit(NORMALIZE_CELL, { row, cell });
          return;
        default:
          return;
      }
    },
  },
};
</script>

<style></style>
