<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
          <ul v-if="goods">
            <li v-for="(item,index) in goods" :key="index" :class="{current: currentIndex === index}" @click="selectIndex(index,$event)">
              <div class="text-wrapper border-1" >
                <span class="icon"  v-show="item.type > 0" :class="classMap[item.type]"></span>
                <span class="text" >{{item.name}}</span> 
              </div>
            </li>
          </ul>
        </div>
        <div class="foods-wrapper" ref="foodWrapper">
          <ul>
            <li v-for="(items,index) in goods" :key="index" class="foods-list-hook">
              <div class="items-title">{{items.name}}</div>
              <ul>
                <li class="items-content-wrapper" :key="index" v-for="(item2,index) in items.foods">
                    <div class="items-icon"><img :src="item2.icon" alt=""></div>
                    <div class="items-content">
                        <div class="item-name">{{item2.name}}</div>
                        <div class="items-description">{{item2.description}}</div>
                        <div class="ratings">
                          <span>月销{{item2.sellCount}}</span>
                          <span>好评率{{item2.rating}}</span>
                        </div>
                        <div class="prices">
                          <span class="price">¥{{item2.price}}</span>
                          <span class="oldPrice"><del>{{item2.oldPrice}}</del></span>
                        </div> 
                  </div>
                  <cartcontrol :food=item2></cartcontrol>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <shopcart :selectFoods=selectFoods></shopcart>
    </div>
</template>
<style  lang='stylus' ref='stylesheet/stylus' scoped>
  @import '../assets/stylus/index.styl';
  .items-title{
    height: 26px;
    padding-left: 14px;
    font-size: 12px;
    color: #93999f;
    line-height: 26px;
    background-color: #f3f5f7;
    border-left: 4px solid #d9dde1;
  }
  .items-content-wrapper{
      padding 18px 0 18px 0
      margin 0px 18px 0px 18px
      border-bottom 1px solid #d9dde1
      position relative
  }
  .items-icon,img{
    width 57px
    height 57px
    vertical-align baseline

  }
  .item-name{
    font-size 14px
    color rgb(7,17,27)
    line-height 14px
  }
  .items-description,.ratings{
    font-size 10px
    color rgb(147,153,159)
    line-height 10px
    margin-top 8px
  }
  .ratings{

  }
  .prices{
    margin-top 8px
    height 24px
  }
  .price{
    font-size 20px
    color rgb(147,153,159)
    line-height 14px
    margin-top 8px
    margin-right 12px
  }
  .oldPrice{
    font-size 10px
    color rgb(147,153,159)
    line-height 10px
  }
  .items-icon,.items-content{
        display inline-block
    }
  .items-content{
    vertical-align top
    margin-top 2px
    margin 2px 0 0 10px
  }
  .items-content-wrapper{
    font-size 0 
  }
  .current{
    font-weight bold !important;
  } 
  
  
    

</style>

<script>
import axios from 'axios'
import Vue from 'vue'
import cartcontrol from './cartcontrol'
import BScroll from "better-scroll"
 import shopcart from './shopcart'

export default {
  name: 'goods',
  data () {
    return {
      goods: [],
      heightList: [],
      scrollY: 0,
    }
  },
  components:{
        'cartcontrol':cartcontrol,
        'shopcart':shopcart
  },
  created(){
      this.classMap = [
      "decrease",
      "discount",
      "special",
      "invoice_1",
      "guarantee"
    ],
    axios.get('/good/goods').then(res=>{
      if(res.data.code === 0){
        this.goods = res.data.data 
        Vue.nextTick(()=>{
          this._initscroll(); //  dom绑定一个scroll
          this._caculateHeight();
          // 计算一下foods高度
        })
      }
    })
  },

  computed:{
    currentIndex(){
      for (let i = 0; i < this.heightList.length; i++) {
        let height1 = this.heightList[i];
        let height2 = this.heightList[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
      }
      return 0;
    },
    selectFoods(){
      let foods = []
      console.log(this.goods)
      if(this.goods.length !== 0){
          console.log(foods)
          this.goods.forEach(good => {
            good.foods.forEach(food =>{
              if(food.count){
                foods.push(food)
              }
            })
          });
         
      }
       return foods
    },

  },
  methods:{
    selectIndex($index,$event){
      if(!event._constructed){
        return
      }//如果不存在这个属性,则为原生点击事件，不执行下面的函数
      let foodList = this.$refs.foodWrapper.getElementsByClassName(
        'foods-list-hook');
      this.foodScroll.scrollToElement(foodList[$index],300)
    },
    _initscroll(){
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click:true
      })
      this.foodScroll = new BScroll(this.$refs.foodWrapper,{
        click:true,
        probeType: 3,
      })
      this.foodScroll.on('scroll',pos=>{
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _caculateHeight(){
      let foodList = this.$refs.foodWrapper.getElementsByClassName('foods-list-hook');
      let height = 0;
      this.heightList.push(height);
      for(let i = 0;i < foodList.length; i++){
          let item = foodList[i]
          height += item.clientHeight;
          this.heightList.push(height)
      }
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='stylus' ref='stylesheet/stylus'>
  @import '../assets/stylus/index.styl';
  .goods 
    display flex
    position absolute
    top 174px
    bottom 48px
    left 0
    right 0
    width 100%
    overflow  hidden;
    .foods-wrapper
      flex 1
    .menu-wrapper
      flex 0 0 80px
      background-color  #f3f5f7
      li 
        height 54px
        width 52px
        font-size 12px
        font-weight 200
        padding 0 12px 0 12px
        .text-wrapper 
          display table-cell
          vertical-align middle
          height 54px
          width 52px
        .border-1 
          border-color rgba(7,17,27,0.1)
          .icon
            display inline-block
            width 14px
            height 14px
            vertical-align top
            background-size  14px 14px
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3');
          .text
            width 30px
            height 30px
            font-size 12px
            vertical-align top
            line-height 14px
        
    .foods-wrapper
      flex-grow 1
</style>