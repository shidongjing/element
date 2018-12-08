<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="nav-list">
        <router-link class="nav" :to="{name:'goods'}">商品</router-link>
        <router-link class="nav" to='ratings'>评价</router-link>
        <router-link class="nav" to='sellers'>商家</router-link>
    </div>
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
// import goods from './components/goods'
import axios from 'axios'
export default {
  name: "App",
  data(){
    return {
      seller:{}
    }
  },
  components:{
        'v-header':Header,
        // goods
    },
  // created(){
  //   axios.get('/good/seller').then(res => {
  //     if(res.data.code === 0){
  //       this.seller = res.data.data;
  //       console.log(this.seller)
  //     }
  // })
  // }
  created () {
    axios.get('/good/seller').then(res => {
      if(res.data.code === 0){
        this.seller = res.data.data
      }
    })

  }
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {

}
.nav-list{
  display: flex;
  border-bottom: 1px solid rgb(7, 17, 27,0.1);
}
.nav{
  flex-grow: 1;
  text-decoration: none;
  font-size: 14px;
  color:rgb(77, 85, 93);
  line-height: 40px;
  height: 40px;
  text-align: center;
  }
  .router-link-exact-active{
    color: rgb(240, 20, 20)
  }

</style>
