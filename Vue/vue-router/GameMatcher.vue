<template>
  <div>
    <div v-if="currentGame === 'number-baseball'">
      숫자야구
      <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'tic-tac-toe'">
      틱택토
      <tic-tac-toe></tic-tac-toe>
    </div>
    <div v-else-if="currentGame === 'lotto-generator'">
      로또 생성기
      <lotto-generator></lotto-generator>
    </div>
    <div v-else>
      해당하는 게임이 없음
    </div>
  </div>
</template>
<script>
import NumberBaseball from "../NumberBaseball/NumberBaseball";
import LottoGenerator from "../LottoGenerator/LottoGenerator";
import TicTacToe from "../TicTacToe-Vuex/TicTacToe";
export default {
  components: {
    NumberBaseball,
    LottoGenerator,
    TicTacToe,
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
  computed: {
    currentGame() {
      return this.$route.params.name;
    },
  },
};
</script>
