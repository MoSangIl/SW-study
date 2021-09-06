import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import NumberBaseball from "../NumberBaseball/NumberBaseball";
import RespondCheck from "../ResponseCheck/RespondCheck";
import RockScisorsPaper from "../RockSisorsPaper/RockScisorsPaper";
import LottoGenerator from "../LottoGenerator/LottoGenerator";
import TicTacToe from "../TicTacToe-Vuex/TicTacToe";
import GameMatcher from "./GameMatcher";

Vue.use(VueRouter);
Vue.use(Vuex);
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/number-baseball", component: NumberBaseball },
    { path: "/respond-check", component: RespondCheck },
    { path: "/rock-scisors-paper", component: RockScisorsPaper },
    { path: "/lotto-generator", component: LottoGenerator },
    { path: "/tic-tac-toe", component: TicTacToe },
    { path: "/game/:name", component: GameMatcher },
  ],
});
