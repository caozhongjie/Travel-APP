<template>
  <div>
    <div class="ticket-title border-bottom">
      <h5 class="ticket-title-title">{{ticketTypeInfo.ticketTypeName}}</h5>
      <div class="ticket-title-price">
        <span class="ticket-title-right">￥{{ticketTypeInfo.ticketTypePrice}}</span>
        <span class="">起</span>
        <span class="iconfont showIcon" @click="changeList">&#xe6aa;</span>
      </div>
    </div>
    <div v-show="showList">
      <div class="ticket-content border-bottom" v-for="(item,index) in ticketTypeInfo.ticketItemInfo" :key="index">
        <div class="ticket-content-left">
          <p class="ticket-detail-title">{{item.ticketTitle}}</p>
          <p>{{item.ticketDate}}</p>
          <p>{{item.ticketSupply}}</p>
        </div>
        <div class="ticket-content-right">
          <p class="detail-price">￥{{item.ticketPrice}}</p>
          <div class="distine">预定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tick-list",
    data() {
      return {
        showList: false
      }
    },
    props: {
      ticketTypeInfo: Object
    },
    methods:{
      changeList:function () {
        this.showList = !this.showList
      }
    }

  }
</script>

<style scoped lang="stylus">
  .ticket-title
    display flex
    width 100%
    height .8rem
    padding 0 .16rem
    font-size .3rem
    .ticket-title-title
      line-height .8rem
      flex 1
    .ticket-title-price
      padding-right .4rem
      line-height .8rem
      .ticket-title-right
        color #ff9800
        font-size .4rem
      .showIcon
        color #bbb
  .ticket-content
    background #f5f5f5
    padding 0 .16rem
    display flex
    width 100%
    .ticket-content-left
      flex 1
      p
        height .8rem
        line-height .8rem
        padding-left .16rem
      .ticket-detail-title
        font-size .3rem
    .ticket-content-right
      margin auto 0
      padding-right .4rem
      .detail-price
        color #ff9800
        text-align center
        font-size .4rem
      .distine
        width 1.8rem
        height .56rem
        line-height .56rem
        text-align center
        border-radius .08rem
        background #ff9800
        background-image: linear-gradient(130deg, #ffab2e 37%, #ff8c12 100%)


</style>
