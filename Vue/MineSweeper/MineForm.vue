<template>
  <div>
    <input type="number" v-model="row" />
    <input type="number" v-model="cell" />
    <input type="number" v-model="mine" />
    <button @click="onClickBtn">시작</button>
  </div>
</template>
<script>
import { START_GAME } from "./store";
export default {
  data() {
    return {
      row: 10,
      cell: 10,
      mine: 10,
    };
  },
  methods: {
    onClickBtn() {
      this.$store.commit(START_GAME, {
        row: this.row,
        cell: this.cell,
        mine: this.mine,
      });
    },
  },
};
</script>
<style></style>
