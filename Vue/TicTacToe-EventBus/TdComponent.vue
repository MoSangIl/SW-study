<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
  props: {
    cellData: String,
    cellIndex: Number,
    rowIndex: Number,
  },
  methods: {
    onClickTd() {
      if (this.cellData) return;

      EventBus.$emit("clickTd", this.rowIndex, this.cellIndex);
    },
  },
};
</script>
<style scoped></style>
