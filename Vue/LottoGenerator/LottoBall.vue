<template>
  <div class="ball" :style="background">{{ number }}</div>
</template>

<script>
export default {
  name: "LottoBall",
  computed: {
    background() {
      let background;
      if (this.number <= 10) {
        background = "red";
      } else if (this.number > 10 && this.number <= 20) {
        background = "orange";
      } else if (this.number > 20 && this.number <= 30) {
        background = "yellow";
      } else if (this.number > 30 && this.number <= 40) {
        background = "blue";
      } else if (this.number > 40) {
        background = "green";
      }
      return {
        background,
      };
    },
  },
  props: {
    number: Number,
  },
};
</script>

<style>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>
