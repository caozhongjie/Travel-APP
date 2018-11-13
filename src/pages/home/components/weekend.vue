<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList">
        <div class="item-wrapper-img">
        <img class="item-img"
             :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    data(){
      return{
        recommendList:[
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          }
        ]
      }
    },
    props:{
      weekendList:Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-wrapper-img
    height 0
    overflow hidden
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
     padding .1rem
    .item-title
       line-height .54rem
       font-size .32rem
       ellipse()
    .item-desc
       line-height .4rem
       color #ccc
       ellipsis()
</style>
