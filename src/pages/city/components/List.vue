<template>
  <div class="list" ref="wrapper">
    <div >
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotcity" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"  v-for="Inneritem in item" :key="Inneritem.id" @click="handleCityClick(Inneritem.name)">{{Inneritem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: "list",
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    props:{
      hotcity:Array,
      cities:Object,
      alphabet:String
    },
    watch:{
      alphabet:function () {
        if(this.alphabet){
          const element = this.$refs[this.alphabet][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    methods:{
      handleCityClick:function (val) {
        this.changeCity(val)
        this.$router.push('/');
      },
      ...mapMutations(['changeCity'])
    },
    computed:{
      ...mapState(['city'])
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .area
      .border-topbottom
        &:before
          border-color #ccc
        &:after
          border-color #ccc
      .border-bottom
        &:before
          border-color #ccc
      .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
      .button-list
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .button-wrapper
          float left
          width 33.33%
          .button
            text-align center
            margin .1rem
            padding .1rem
            border .02rem solid #ccc
            border-radius .06rem
      .item-list
        .item
          line-height .76rem
          color #666
          padding-left .2rem
</style>
