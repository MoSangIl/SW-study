<template>
  <div>
    <div>
      <h3>동적 라우트</h3>
      <ul>
        <li><router-link to="/game">게임메쳐</router-link></li>
        <li>
          <router-link to="/game/number-baseball"
            >숫자야구-동적 라우트</router-link
          >
        </li>
        <li>
          <router-link to="/game/respond-check"
            >반응속도-동적 라우트</router-link
          >
        </li>
        <li>
          <router-link to="/game/rock-scisors-paper"
            >가위바위보-동적 라우트</router-link
          >
        </li>
        <li>
          <router-link to="/game/lotto-generator"
            >로또 번호 추첨-동적 라우트</router-link
          >
        </li>
        <li>
          <router-link to="/game/tic-tac-toe">틱택토-동적 라우트</router-link>
        </li>
      </ul>
      <br />
      <h3>히스토리 정적 라우트</h3>
      <ul>
        <li><router-link to="/number-baseball">숫자야구</router-link></li>
        <li><router-link to="/respond-check">반응속도</router-link></li>
        <li><router-link to="/rock-scisors-paper">가위바위보</router-link></li>
        <li><router-link to="/lotto-generator">로또 번호 추첨</router-link></li>
        <li><router-link to="/tic-tac-toe">틱택토</router-link></li>
      </ul>
      <h3>쿼리 스트링</h3>
      <router-link to="/game/Query?name=상일&sex=man&age=24"
        >쿼리스트링</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import router from "./router";

export default {
  router,
};
</script>
<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
