<template>
      <div>
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="item-title border-bottom">
            <span class="item-title-icon iconfont">&#xe604;</span>
           {{item.title}}
          </div>
          <div v-if="item.children">
            <detail-list :list="item.children" class="item-children"></detail-list>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "DetailList",
         props:{
           list:Array
      },
      mounted(){
          console.log(this.list)
      }

    }
</script>

<style scoped lang="stylus">
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-title-icon
      position relative
      top .2rem
      display inline-block
      margin-right .1rem
      font-size .72rem
  .item-children
    padding 0 .2rem

</style>
