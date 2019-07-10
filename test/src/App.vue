<template>
  <div id="app">
    <div class="cont">
      <router-view />
    </div>
    <div class="nav">
      <p @click="jumphFn">信息</p>
      <p @click="jumpmFn">好友</p>
      <p @click="jumpqFn">空间</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      index:1
    }
  },
  methods: {
    jumphFn: function() {
      this.$router.push("/");
    },
    jumpmFn: function() {
      this.$router.push("/more");
    },
    jumpqFn: function() {
      this.$router.push("/qzing");
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .cont {
    width: 100%;
    flex: 1;
    display: flex;
  }
  .nav {
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ccc;
  }
}
</style>
