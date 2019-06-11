<template>
  <div>
    <mt-header fixed>
      <router-link to="/home"
                   class="head_tit"
                   slot="left">
        <mt-button>sunShop</mt-button>
      </router-link>
      <router-link to=""
                   slot="right">
        <mt-button class="head_tit">登录|注册</mt-button>
      </router-link>

    </mt-header>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市:</span>
        <span>定位不准时,请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/'+guessCityid"
                   class="guess_city">
        <span>{{guessCity}}</span>
        <svg aria-hidden="true">
          <use xlink:href="#icon-iconfontjiantou2"></use>
        </svg>
      </router-link>
    </nav>

    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link :to="'/city/'+item.id"
                     v-for="item in hotcity"
                     :key="item.id"
                     tag="li">
          {{item.name}}
        </router-link>
      </ul>
    </section>

    <section class="group_city_container">
      <ul class="letter_classify">
        <li class="letter_classify_li"
            v-for="(val, key,index) in sortgroupcity"
            :key="key">
          <h4 class="city_title">
            {{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <router-link tag="li"
                         class="ellipsis"
                         v-for="(item) in val"
                         :key="item.id"
                         :to="'/city/'+item.id">
              {{item.name}}
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
import { cityGuess, hotcity, groupcity } from '@/api/getData'
export default {
  data () {
    return {
      guessCity: '',//当前城市
      guessCityid: '',//当前城市id
      hotcity: [],//热门城市
      groupcity: {},//所有城市
    };
  },
  methods: {
    handleClose () {

    }
  },
  computed: {
    sortgroupcity () {
      let sortobj = {}
      for (let i = 65; i < 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },
  mounted () {
    // 获取当前城市
    cityGuess().then(res => {
      this.guessCity = res.data.name
      this.guessCityid = res.data.id
    })

    // 获取热门城市
    hotcity().then(res => {
      this.hotcity = res.data
    })

    // 获取所有城市
    groupcity().then(res => {
      this.groupcity = res.data

    })
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.head_tit {
  font-weight: 400;
  @include sc(0.7rem, #fff);
}
.city_nav {
  padding-top: 2.35rem;
  border-top: 1px solid $bc;
  background-color: #fff;
  margin-bottom: 0.4rem;
  .city_tip {
    @include fj;
    line-height: 1.45rem;
    padding: 0 0.45rem;
    span:nth-of-type(1) {
      @include sc(0.55rem, #666);
    }
    span:nth-of-type(2) {
      font-weight: 900;
      @include sc(0.475rem, #9f9f9f);
    }
  }
  .guess_city {
    @include fj;
    align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid $bc;
    border-bottom: 2px solid $bc;
    @include font(0.75rem, 1.8rem);
    span:nth-of-type(1) {
      color: $blue;
    }
    .arrow_right {
      @include wh(0.6rem, 0.6rem);
      fill: #999;
    }
  }
}
#hot_city_container {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.citylistul {
  li {
    float: left;
    text-align: center;
    color: $blue;
    border-bottom: 0.025rem solid $bc;
    border-right: 0.025rem solid $bc;
    @include wh(25%, 1.75rem);
    @include font(0.6rem, 1.75rem);
  }
  li:nth-of-type(4n) {
    border-right: none;
  }
}
.city_title {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid $bc;
  border-bottom: 1px solid $bc;
  @include font(0.55rem, 1.45rem, "Helvetica Neue");
  span {
    @include sc(0.475rem, #999);
  }
}

.letter_classify_li {
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid $bc;
  .groupcity_name_container {
    li {
      color: #666;
    }
  }
}
</style>

