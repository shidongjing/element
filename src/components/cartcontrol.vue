<template>
    <div  class="cart-control-wrapper">
        <span id="cart-control" class="icon-remove_circle_outline min" v-show="food.count" @click="remove"></span>
        <span class="count" v-show="food.count">{{food.count}}</span>
        <span @click="add" class="icon-add_circle add"></span>
        {{food}}
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue';
export default {
    name:"cartcontrol",
    props:{
        food:{
            type:Object
        }
    },
    created(){

    },
    methods:{
        add(event){
            if(!this.food.count){
                Vue.set(this.food,'count');
                this.food.count = 1;
            }else{
                this.food.count++
            }
            // this.food.count++
        },
        remove(){
            if(this.food.count<0){
                return
            }
            this.food.count--
        }
    }
}
</script>

<style  lang='stylus' ref='stylesheet/stylus' scoped>
    .cart-control-wrapper

        position absolute 
        bottom  14px
        right 0px
        
    .add,.min
        width 24px
        height 24px
        padding 6px
        display inline-block
        font-size 24px
        line-height 24px
        text-align center
        color #00a0dc
    .count
        width 12px
        display inline-block
        font-size 10px
        text-align center
        line-height 24px
        padding-top 6px
        vertical-align top
</style>




