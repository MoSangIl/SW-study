<template>
  <div>
    <div id="결과창">
      <lotto-ball
        v-for="ball in winBalls"
        :key="ball"
        v-bind:number="ball"
      ></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" v-bind:number="bonus"></lotto-ball>
    <button v-if="redo" @click="onRedoButton">한번 더!</button>
  </div>
</template>
<script>
import LottoBall from "./LottoBall";

function getWinNumbers() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}
export default {
  components: {
    "lotto-ball": LottoBall, // "lotto-ball" : LottoBall
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  computed: {},
  methods: {
    randomGenerator() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, 1000 * (i + 1));
      }
      setTimeout(() => {
        this.bonus = this.winNumbers[this.winNumbers.length - 1];
        this.redo = true;
      }, 1000 * this.winNumbers.length);
    },
    onRedoButton() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.randomGenerator();
    },
  },
  updated() {},
  mounted() {
    this.randomGenerator();
  },
  destroyed() {},
};
</script>
<style scoped></style>
