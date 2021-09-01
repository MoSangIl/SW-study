<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }} 점</div>
  </div>
</template>
<script>
let interval;
const rmsCoords = {
  바위: "0",
  가위: "-140px",
  보: "-284px",
};
export default {
  data() {
    return {
      imgCord: rmsCoords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://drive.google.com/uc?id=1mLIXt-lDNnz-CqPzNJow0sCpuN3xhqwz) ${this.imgCord} 0`,
      };
    },
  },
  methods: {
    onClickButton() {
      clearInterval(interval);
    },
  },
  created() {
    console.log("create!");
  },
  mounted() {
    console.log("mounted");
    interval = setInterval(() => {
      if (this.imgCord === rmsCoords.바위) {
        this.imgCord = rmsCoords.가위;
      } else if (this.imgCord === rmsCoords.가위) {
        this.imgCord = rmsCoords.보;
      } else if (this.imgCord === rmsCoords.보) {
        this.imgCord = rmsCoords.바위;
      }
    }, 100);
  },
  updated() {},
  destroyed() {
    clearInterval(interval);
  },
};
</script>
<style scoped></style>
