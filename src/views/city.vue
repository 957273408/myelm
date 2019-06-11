<template>
  <div class="city_container">
    <mt-header class="head_tit"
               title="2323"
               fixed>
      <router-link to="/home"
                   class="head_tit"
                   slot="left">
        <svg aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </router-link>
      <router-link to=""
                   slot="right">
        <mt-button class="head_tit">切换城市</mt-button>
      </router-link>
    </mt-header>
    <form action="">
      <div>
        
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.head_tit,
/deep/ .mint-header-title {
  font-weight: 400;
  @include sc(0.7rem, #fff);
}
</style>
