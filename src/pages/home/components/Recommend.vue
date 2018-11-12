<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList">
        <img class="item-img"
             :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data(){
      return{
        recommendList:[
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          },
          {
            id:'0001',
            imgUrl:"http://img1.qunarzz.com/sight/p0/1811/48/481345746fe3ce9fa3.img.jpg_200x200_fbd18714.jpg",
            title:'长隆欢乐世界',
            desc:'来广州必去的游乐园'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipse()
      .item-desc
        line-height .4rem
        color #ccc
        ellipse()
      .item-button
        background #ff9600
        padding 0 .1rem
        border-radius .06rem
        margin-top .16rem
</style>
