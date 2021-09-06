<template>
  <div>
    <mine-form />
    <span>{{ timer }}</span>
    <table-component></table-component>
    <span>{{ result }}</span>
  </div>
</template>
<script>
import { mapState } from "vuex";
import store, { INCREMENT_CELL } from "./store";
import MineForm from "./MineForm";
import TableComponent from "./TableComponent";

let interval;
export default {
  store,
  components: {
    MineForm,
    TableComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["timer", "result", "halted"]),
  },

  methods: {},
  watch: {
    halted(value, oldValue) {
      if (!value) {
        interval = setInterval(() => {
          this.$store.commit(INCREMENT_CELL);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    },
  },
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
