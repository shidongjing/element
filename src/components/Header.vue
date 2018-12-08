<template>
    <div class="header">
        <div class="top">
            <div class="log-ico"><img :src="seller.avatar" alt=""></div>
            <div class="main">
                <div class="names"><span class="ico-bg"></span><span class='name'>{{seller.name}}</span></div>
                <div class="time">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
                <div v-if='seller.supports' class="sub">
                    <span class="iocn bgimg"></span><span>{{seller.supports[0].description}}</span>
                </div>
            </div>
        </div>
        <div class="notice">
            <span class="notice-img"></span>
            <span class="notice-font">{{seller.bulletin}}</span>
            <span class="icon-keyboard_arrow_right">&gt</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: {}
    };
  },
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    setTimeout(() => {
      console.log(this.seller);
    }, 100);
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ico-bg {
  display: inline-block;
  margin-right: 6px;
  width: 30px;
  height: 18px;
  background: url("../images/brand@2x.png") no-repeat;
  background-size: 22px 12px;
}
.names {
  margin-top: 2px;
  margin-bottom: 8px;
  height: 18px;
}
.name {
  display: inline-block;
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 18px;
  vertical-align: top;
  margin-top: 2px;
}
.top {
  padding-top: 24px;
}
.top::after {
  content: "";
  display: block;
  clear: both;
}
.log-ico img {
  display: inline-block;
  width: 64px;
  height: 64px;
  float: left;
  margin: 0px 16px 18px 24px;
}
.top .main {
  float: left;
}
.time {
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  font-weight: 200;
  line-height: 12px;
  margin-bottom: 10px;
}
.iocn {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  height: 12px;
  background: url("../images/decrease_1@2x.png");
  background-size: 100% 100%;
}
.iocn + span {
  display: inline-block;
  font-size: 10px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 12px;
  vertical-align: top;
  margin-left: 4px;
}
.sub {
  height: 12px;
}
.header {
  margin: 0;
  padding: 0;
  background: rgba(7, 17, 27, 0.5);
}
.notice {
  background-color: rgba(7, 17, 27, 0.2);
  height: 28px;
  font-size: 10px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 28px;
  padding: 0 12px 0 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
}

.notice .notice-img {
  display: inline-block;
  width: 22px;
  height: 12px;
  background: url("../images/bulletin@2x.png") no-repeat;
  background-size: 22px 12px;
  vertical-align: middle;
}
.notice .notice-font {
  margin-left: 4px;
  margin-right: 4px;
  vertical-align: middle;
}
.icon-keyboard_arrow_right {
  position: absolute;
  right: 12px;
  bottom: 8px;
}
.header::after {
  content: "";
  display: block;
  clear: both;
}
</style>