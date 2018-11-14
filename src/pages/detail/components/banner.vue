<template>
  <div>
    <div class="banner" @click="showGallaryImg">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightname}}</div>
        <div class="banner-number"><span class="iconfont">&#xe692;</span>{{gallaryImg.length}}</div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImg" @close="closeGallary" v-show="showGallary"></common-gallary>
  </div>
</template>

<script>
  import  commonGallary from 'common/gallary/gallary'
    export default {
        name: "banner",
      components:{
          'common-gallary':commonGallary
      },
      data(){
          return{
            imgs:null,
            showGallary:false
          }
      },
      props:{
        sightname:String,
        bannerImg:String,
        gallaryImg:Array
      },
      methods:{
        showGallaryImg:function () {
              this.showGallary = true

        },
        closeGallary:function () {
          this.showGallary = false
        }
      }
    }
</script>

<style scoped lang="stylus">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      color white
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .1rem
        margin-right .2rem
        padding 0 .4rem
        line-height .36rem
        height .4rem
        border-radius .2rem
        background rgba(0,0,0,0.8)
        font-size .24rem
        .banner-icon
          font-size .24rem

</style>
