<template>
  <div id="header">
    <div id="header-top">
      <div class="header-top-left" v-if="login">
        <p>您好，欢迎来到花多彩！</p>
        <router-link to="/login">请登录</router-link>|
        <router-link to="/register">免费注册</router-link>
      </div>
      <div class="header-top-left" v-else>
        <p>您好，欢迎 {{username}} 来到花多彩！</p>
        <a href="javascript:;" @click="zhuxiao">注销</a>
      </div>
      <div>
        <a href="#">个人中心</a>
        <router-link :to="'/shoppingcar/'+uid" id="shopping-car">
          购物车
          <span>{{num}}</span>件
        </router-link>
      </div>
    </div>
    <div id="header-middle">
      <div id="logo">
        <a href="#">
          <img src="images/header/logo.jpg" />
        </a>
      </div>
      <div id="search">
        <div id="search-intr">
          <div>商品</div>
        </div>
        <input type="text" id="search-input" placeholder="请输入您要搜索的花品" v-model="search" />
        <router-link type="button" value="搜索" id="search-button" to="/productlists">搜索</router-link>
      </div>
      <div id="chaxun">
        <a href="#">
          <img src="images/header/chaxun.png" />
        </a>
      </div>
    </div>
    <div id="header-bottom">
      <div id="bottom">
        <ul id="lists">
          <li @mouseover="show" @mouseleave="hidden">
            <a href="javascripyt:;">全部商品分类</a>
          </li>
          <li>
            <a href="#">></a>
          </li>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/productlists">全部鲜花</router-link>
          </li>
          <li>
            <router-link to="#">毕业季</router-link>
          </li>
          <li>
            <router-link to="#">高端鲜花</router-link>
          </li>
          <li>
            <router-link to="#">开业花篮</router-link>
          </li>
          <li>
            <router-link to="#">生日鲜花</router-link>
          </li>
          <li>
            <router-link to="#">绿植</router-link>
          </li>
          <li>
            <router-link to="#">花语大全</router-link>
          </li>
          <li>
            <router-link to="#">永生花</router-link>
          </li>
          <li>
            <router-link to="#">礼品卡</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="commodity">
      <div id="commodity-lists" v-if="hide" @mouseenter="show" @mouseleave="hidden">
        <ul>
          <li v-for="(item,i) of fenlei" :key="i">
            <router-link to="/details">{{item.fenlei}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
#header-top {
  height: 30px;
  border: 1px solid #ddd;
  background-color: #efefef;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #7f7f7a;
}
.header-top-left {
  display: flex;
}
#header-top a {
  text-decoration: none;
  color: #7f7f7a;
  padding: 0 5px;
}
#header-top a:hover {
  color: #f46;
}
#shopping-car span {
  color: #ff4466;
  padding: 5px;
}
#header-middle {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#header-middle > #logo img {
  width: 120px;
  height: 120px;
}
#search {
  border: 2px solid #f46;
  height: 34px;
}
#search-input {
  border: 0;
  width: 350px;
  padding-left: 20px;
}
#search-input::placeholder {
  padding-left: 10px;
}
#search-intr {
  float: left;
  flex-wrap: nowrap;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 9px;
  padding-left: 10px;
}
#search-intr::after {
  content: "";
  display: inline-block;
  border-top: 5px solid #000;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-left: 10px;
}
#search-button {
  height: 40px;
  display: inline-block;
  line-height: 34px;
  text-decoration: none;
  vertical-align: middle;
  border: 0;
  background-color: #f46;
  padding: 0 30px;
  height: 100%;
  color: #fff;
}
#header-bottom {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #f46;
  font-size: 16px;
}
#bottom {
  width: 1190px;
  margin: 0 auto;
}
#lists {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
#lists > li {
  padding: 0 20px;
  transition: all 0.2s linear;
}
#lists > li > a {
  text-decoration: none;
  color: #fff;
}
#lists > li:hover {
  background-color: rgb(255, 116, 142);
  transform: translateY(-3px);
  border-top: 2px solid rgb(250, 34, 73);
}
#commodity {
  position: relative;
}
#commodity-lists {
  width: 230px;
  background-color: #fff;
  position: absolute;
  left: 350px;
  padding: 0 10px 5px 10px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #ccc;
  z-index: 1000;
}
#commodity-lists > ul > li {
  width: 33%;
  font-size: 12px;
  text-align: left;
  line-height: 25px;
  float: left;
}
#commodity-lists > ul > li:nth-child(1),
#commodity-lists > ul > li:nth-child(9),
#commodity-lists > ul > li:nth-child(19),
#commodity-lists > ul > li:nth-child(31),
#commodity-lists > ul > li:nth-child(49),
#commodity-lists > ul > li:nth-child(58),
#commodity-lists > ul > li:nth-child(76),
#commodity-lists > ul > li:nth-child(79) {
  width: 80%;
  display: block;
  background-color: #f46;
  line-height: 30px;
  font-size: 14px;
  margin: 5px 10%;
  margin-top: 10px;
  text-align: center;
}
#commodity-lists > ul > li:nth-child(1) > a,
#commodity-lists > ul > li:nth-child(9) > a,
#commodity-lists > ul > li:nth-child(19) > a,
#commodity-lists > ul > li:nth-child(31) > a,
#commodity-lists > ul > li:nth-child(49) > a,
#commodity-lists > ul > li:nth-child(58) > a,
#commodity-lists > ul > li:nth-child(76) > a,
#commodity-lists > ul > li:nth-child(79) > a {
  color: #fff;
}
#commodity-lists > ul > li:nth-child(1) > a:hover,
#commodity-lists > ul > li:nth-child(9) > a:hover,
#commodity-lists > ul > li:nth-child(19) > a:hover,
#commodity-lists > ul > li:nth-child(31) > a:hover,
#commodity-lists > ul > li:nth-child(49) > a:hover,
#commodity-lists > ul > li:nth-child(58) > a:hover,
#commodity-lists > ul > li:nth-child(76) > a:hover,
#commodity-lists > ul > li:nth-child(79) > a:hover {
  color: #fff;
}
#commodity-lists > ul > li > a {
  text-decoration: none;
  color: #333;
}
#commodity-lists > ul > li > a:hover {
  color: #f46;
}
</style>
<script>
export default {
  data() {
    return {
      hide: false,
      login: true,
      username: "",
      fenlei: [],
      uid: "",
      num: 0,
      search: "",
    };
  },
  methods: {
    show() {
      this.hide = true;
    },
    hidden() {
      this.hide = false;
    },
    zhuxiao() {
      window.sessionStorage.clear();
      this.$router.push("/");
      location.reload();
      this.$router.go(0);
    },
  },
  mounted() {
    this.username = window.sessionStorage.getItem("username");
    this.uid = window.sessionStorage.getItem("uid");
    if (this.username == null) {
      this.login = true;
    } else {
      this.login = false;
    }
    this.axios.get("/header").then((res) => {
      this.fenlei = res.data;
    });
    this.axios
      .get("/shoppingCar", { params: { uid: this.uid } })
      .then((res) => {
        this.num = res.data.length;
      });
  },
};
</script>