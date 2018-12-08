<template>
  <div class="shopcart">
    <div class="content">
        <div class="chart-icon-wrapper">
            <div class="chart-icon icon-shopping_cart" :class="{noZChart:(count>0)}"></div>
            <div class="total-count">{{count}}</div>
        </div>
      <div class="deliver-fee">
          <div class="price border-1px-right">¥{{sumprice}}</div>
          <div class="deliveryPrice">另需配送费¥4元</div>
      </div>
      <div class="deliver-base" :class="{ok:(sumprice >=20)}">{{clearing}}</div>
    </div>
  </div>
</template>
<script>
import cartcontrol from "./cartcontrol";
export default {
    name:'shopcart',
    props:{
        selectFoods:{
            type:Array
        }
    },
    created(){
        setTimeout(() => {
            console.log(this.selectFoods)
        }, 1000);
    },
    computed:{
        count(){
            let count = 0;
            this.selectFoods.forEach(ele=>{
                count += ele.count
            })
            return count   
        },
        sumprice(){
            let price = 0;
                this.selectFoods.forEach(ele =>{
                price += ele.price*ele.count
            })
            return price
         },
         clearing(){
             if(this.sumprice>=20){
                 return '去结算'
             }else{
                 return '¥20'
             }
         }

    }
}
</script>
<style  lang='stylus' ref='stylesheet/stylus' scoped>
.shopcart
  width 100%
  height 48px
  position fixed
  left 0
  bottom 0
  background #141d27
  .content
    width 100%
    height 48px
    display flex
    .chart-icon-wrapper
      height 48px
      flex 0 0 80px
      position relative
      .total-count
        width 24px
        height 16px
        background #ff0000
        border-radius 16px
        position absolute 
        right 0
        top -6px
        text-align center
        line-height 16px
        color #ffffff
        font-weight 700
        font-size 8px
      .chart-icon
        width 44px
        height 44px
        border 6px solid #141d27
        margin -10px 0 0 18px
        border-radius 50%
        background #2b333b
        font-size 24px 
        line-height 44px
        text-align center
        color rgba(255,255,255,0.5)
        &.noZChart
          background #00a0dc
          color #ffffff
    .deliver-fee
        flex 1
        font-size 0
        padding 12px
        .price
            display inline-block
            font-size 16px
            color rgba(255,255,255,0.4)
            line-height 24px
            font-weight 700
            padding-right 12px
            border-right 1px solid rgba(255,255,255,0.1)
        .deliveryPrice
            display inline-block
            font-size 12px
            color rgba(255,255,255,0.4)
            line-height 20px
            font-weight 700
            padding-left 12px
    .deliver-base
      flex 0 0 105px
      font-size 12px
      line-height 48px
      font-weight 700
      color rgba(255,255,255,0.4)
      text-align center
      background #2b333b
      &.ok
        background #008000
        content '去结算'

    
 







</style>


