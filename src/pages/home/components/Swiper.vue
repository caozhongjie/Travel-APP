<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"  alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
      data(){
          return {
            swiperOption:{
              pagination: '.swiper-pagination',
              loop:true
            },
            swiperList:[
              {
              id:"0001",
              imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/1b/4143c7e0bfe78d02.jpg_750x200_5a220f6e.jpg'
                },
              {
                id:"0002",
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1810/a8/664024556572fd02.jpg_750x200_ffe41025.jpg'
              },
            ]
          }
      },
      props:{
        list:Array
      },
      computed:{
          showSwiper(){
            return this.list.length
          }
      }
    }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background white
  .wrapper
    overflow hidden
    width 100%;
    height 0;
    padding-bottom 26%
    .swiper-img
         width 100%


</style>
