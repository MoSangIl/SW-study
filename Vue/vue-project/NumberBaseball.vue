<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
      <button>입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getRandom = function getRandom() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrays = [];
  for (let i = 0; i < 4; i++) {
    const rand = Math.floor(Math.random() * (9 - i));
    arrays[i] = numbers.splice(rand, 1)[0];
  }
  return arrays;
};
export default {
  data() {
    return {
      answer: getRandom(),
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm() {
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: "홈런!",
        });
        this.result = "홈런!!";
        alert("게임 재 설정");
        this.tries = [];
        this.result = "";
        this.answer = getRandom();
      } else {
        let strike = 0;
        let ball = 0;
        const userAnswerArray = this.value.split("").map((v) => parseInt(v));
        for (let i = 0; i < 4; i++) {
          if (this.answer[i] === userAnswerArray[i]) {
            strike++;
          } else if (this.answer.includes(userAnswerArray[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `스트라이크! : ${strike}, 볼! : ${ball}`,
        });
        this.value = "";
      }
      this.$refs.answer.focus();
    },
  },
};
</script>

<style></style>
