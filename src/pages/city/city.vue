<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :hotcity="hotcity" :cities="cities" :alphabet="alphabet"></city-list>
      <city-alphabet :cities="cities" @change="getChildData"></city-alphabet>
    </div>
</template>

<script>
  import cityheader from './components/Header'
  import citysearch from './components/Search'
  import cityList from './components/List'
  import alphabet from './components/Alphabet'
  import axios from 'axios'
    export default {
        name: "city",
      data(){
        return{
          hotcity:[],
          cities:{},
          alphabet:''
        }
      },
      components:{
          'city-header':cityheader,
          'city-search':citysearch,
          'city-list'  :cityList,
          'city-alphabet':alphabet
      },
      mounted(){
          this.getCityInfo()
      },
      methods:{
        getCityInfo:function () {
          let that = this
          axios.get('/api/city.json').then(function (res) {
            let result = res.data;
            console.log(result.data.cities)
            if(result.ret && result.data){
              that.cities = result.data.cities;
              that.hotcity= result.data.hotCities;
              console.log(that.cities)
              console.log(that.hotcity)
            }
          })
        },
        getChildData:function (val) {
          this.alphabet = val;
        }
      }

    }
</script>

<style scoped lang="stylus">

</style>
