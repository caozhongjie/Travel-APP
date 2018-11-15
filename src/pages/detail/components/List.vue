<template>
      <div>
        <div class="item" v-for="item in list" :key="item.id">
          <div class="item-title border-bottom">
            <span class="item-title-icon "></span>
           {{item.ticketGroup}}
          </div>
          <div v-for="(tickType,index) in item.ticketTypeInfo" :key="index">
            <ticket-list :ticketTypeInfo="tickType"></ticket-list>
          </div>
        </div>
      </div>
</template>

<script>
  import ticketList from './tickList'
    export default {
        name: "DetailList",
         props:{
           list:Array
      },
      watch:{
          list:function () {
            console.log(this.list)
          }
      },
      components:{
          'ticket-list':ticketList
      }

    }
</script>

<style scoped lang="stylus">
  .item-title
    position relative
    z-index 4
    line-height .88rem
    height .88rem
    font-size .32rem
    text-indent .2rem
    margin-bottom -.02rem
    border-bottom .05px solid gray
    .item-title-icon
      position relative
      top .08rem
      left .06rem
      display inline-block
      width .36rem
      height .36rem
      background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
      background-size .4rem 3rem
  .item-children
    padding 0 .2rem

</style>
