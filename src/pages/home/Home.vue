<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons  :iconList="iconList"></home-icons>
    <home-recommend :recomList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/weekend'
  import axios from 'axios'
  export default {
    name: "Home",
    components:{
      'home-header':HomeHeader,
      'home-swiper':HomeSwiper,
      'home-icons' :HomeIcons,
      'home-recommend':HomeRecommend,
      'home-weekend':HomeWeekend
    },
    data(){
      return{
        city:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    mounted(){
      this.getHomeInfo()
    },
    methods:{
      getHomeInfo:function () {
        axios.get('/api/index.json').then(this.getHomeInfoSucc) //   /api/index.json == /static/mock/index.json
      },
      getHomeInfoSucc:function (res) {
        let result = res.data;
        console.log(result)
        if(result.ret && result.data){
          this.city       = result.data.city;
          this.swiperList = result.data.swiperList
          this.iconList   = result.data.iconList
          this.recommendList = result.data.recommendList
          this.weekendList =result.data.weekendList
          console.log(this.weekendList)
        }
      }
    }
  }
</script>

<style scoped>

</style>
