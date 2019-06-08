<template>
  <div>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>ele.me</mt-button>
      </router-link>
      <mt-button slot="right">登录|注册</mt-button>
    </mt-header>
    <div class="c">123</div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClose() {
        
    }
  }
};
</script>

<style  >
.c {
  box-sizing: border-box;
}
</style>
