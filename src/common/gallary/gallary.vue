<template>
    <div class="container" @click="handleGallary">
     <div class="wrapper">
       <swiper :options="swiperOptions">
         <!-- slides -->
         <swiper-slide v-for="(item,index) in imgs" :key="index">
           <img class="gallary-img" :src="item"  alt="">
         </swiper-slide>
         <div class="swiper-pagination" slot="pagination" ></div>
       </swiper>
     </div>
    </div>
</template>

<script>
    export default {
        name: "gallary",
      data(){
          return{
            swiperOptions:{
              pagination:'.swiper-pagination',
              paginationType:'fraction',
              observeParents:true,
              observer:true
            }
          }
      },
      props:{
          imgs:{
            type:Array,
            default(){
              return['http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg','http://img1.qunarzz.com/sight/p0/1801/b1/b1d9333879b23687a3.img.jpg_r_800x800_9851958d.jpg']
            }
          }

      },
      methods:{
        handleGallary:function () {
          this.$emit('close')
        }
      }

    }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    z-index 99
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
