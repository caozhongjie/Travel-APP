<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    data() {
      return {
        imglIst: [
          {
            id: "001",
            src: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            title: "景点门票"
          },
          {
            id: "002",
            src: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
            title: "广州必游"
          },
          {
            id: "003",
            src: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
            title: "动植物园"
          },
          {
            id: "004",
            src: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
            title: "游乐场"
          },
          {
            id: "005",
            src: "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
            title: "珠江夜游珠江夜游珠江夜游珠江夜游"
          },
          {
            id: "006",
            src: "https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
            title: "打卡圣地"
          },
          {
            id: "007",
            src: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
            title: "一日游"
          },
          {
            id: "008",
            src: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
            title: "泡温泉"
          },
          {
            id: "009",
            src: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            title: "景点门票"
          }
        ],
        swiperOption:{
          autoplay:false
        }
      }
    },
    computed: {
      pages() {
        const pages = [];
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8) //根据值来判断显示咋第几页，向下取整0-7位第一页
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    },
    props:{
      iconList:Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'

  .icons > > >.swiper-container
    height 0;
    padding-bottom 50%;
  .icon
    position relative
    overflow hidden
    height 0
    float left
    width 25%
    padding-bottom 25%

  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    box-sizing border-box
    padding .1rem

  .icon-img-content
    height 100%
    display block
    margin 0 auto

  .icon-text
    position absolute
    left 0
    right 0
    bottom 0
    height .44rem
    line-height .44rem
    color $fontColor
    text-align center
    ellipsis()
</style>
