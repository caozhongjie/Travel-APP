<template>
    <div>
      <detail-banner :sightname="sightName" :bannerImg="bannerImg" :gallaryImg="gallaryImg"></detail-banner>
      <detail-header></detail-header>
      <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
  import  detailBanner from './components/banner'
  import  detailHeader from './components/header'
  import  detailList from './components/List'
  import axios from 'axios'
    export default {
        name: "detail",
      components:{
          'detail-banner':detailBanner,
          'detail-header':detailHeader,
          'detail-list':detailList
      },
      data(){
          return{
            list:[],
            sightName:'',
            bannerImg:'',
            gallaryImg:[]
          }
      },
      methods:{
        getDetailInfo:function () {
          let that = this
          axios.get('/api/detail.json',{params:{
              id:this.$route.params.id
            }}).then( (res)=> {
            if(res.data.ret && res.data.data){
              that.sightName = res.data.data.sightName
              that.bannerImg = res.data.data.bannerImage
              that.gallaryImg = res.data.data.gallaryImages
              that.list = res.data.data.ticketList
            }
          })
        }
      },
      mounted(){
       this.getDetailInfo()
      }
    }
</script>

<style scoped lang="stylus">

</style>
