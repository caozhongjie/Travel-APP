<template>
  <ul class="list">
    <li class="item" v-for="item in letters" :ref="item" :key="item" @click="handleLetterClick" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "alphabet",
    props: {
      cities: Object
    },
    data(){
      return{
        touchStatus:false
      }
    },
    computed:{
      letters(){
        const letters = [];
        for(let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick: function (e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart:function () {
        this.touchStatus = true;
      },
      handleTouchMove:function (e) {
        if(this.touchStatus){
            const startY = this.$refs['A'][0].offsetTop;
            const touchY = e.touches[0].clientY-86;
            const  index =Math.floor((touchY-startY)/22)
          if(index>=0 && index<this.letters.length){
            this.$emit('change',this.letters[index])
          }

        }
      },
      handleTouchEnd:function () {
        this.touchStatus = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .44rem
      color $bgColor
</style>
