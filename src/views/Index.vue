<template>
  <div id="index">
    <!-- 轮播图部分 -->
    <div id="swiper">
      <!-- 图片 -->
      <div id="swiper-image">
        <img :src="images[n]" />
      </div>
      <!-- 左右按钮 -->
      <div id="swiper-navigation">
        <button @click="prev()">&lt;</button>
        <button @click="next()">&gt;</button>
      </div>
      <!-- 底部导航 -->
      <div id="swiper-bottom">
        <ul id="swiper-control">
          <li
            v-for="(key,i) of images"
            :key="i"
            @mouseenter="change(i)"
            :class="[n==i ? 'active' : 'not-active']"
          ></li>
        </ul>
      </div>
    </div>
    <!-- 轮播图侧边导航分类 -->
    <div id="left-side">
      <div class="side-one" v-for="(items,i) of fenlei" :key="i">
        <div v-for="(item,n) of items" :key="n">
          <a href="#">{{item}}</a>
        </div>
      </div>
    </div>
    <!-- 爱情鲜花 -->
    <div id="floors">
      <div class="floor" v-for="(item,i) of floor" :key="i">
        <div class="floor-top">
          <p>{{item.title}}</p>
          <router-link to="/details">{{item.more}}</router-link>
        </div>
        <div class="floor-bottom">
          <div class="floor-left">
            <img :src="item.image" />
          </div>
          <div class="floor-intr">
            <router-link to="/productlists" v-for="(intr,i) of floorIntr[i]" :key="i">
              <img :src="intr.image" />
              <p>{{intr.title}}</p>
              <span>￥{{(intr.price_new).toFixed(2)}}</span>
              <s>￥{{(intr.price_old).toFixed(2)}}</s>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>>
<style scoped>
#index a {
  text-decoration: none;
}
#swiper {
  position: relative;
}
#swiper-image img {
  width: 100%;
  transition: all 0.5s linear;
}
#swiper-navigation button {
  width: 50px;
  height: 100px;
  font-size: 30px;
  line-height: 100px;
  text-align: center;
  background-color: #e3e3e3;
  border-radius: 5px;
  border: 0;
  opacity: 0.7;
  position: absolute;
  top: calc(50% - 50px);
  right: 20px;
}
#swiper-navigation button:hover {
  background-color: #eee;
  opacity: 1;
}
#swiper-navigation > button:first-child {
  left: 20px;
}
#swiper-bottom > ul {
  list-style: none;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 37.5px);
}
#swiper-bottom > ul > li {
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 5px;
}
#swiper-bottom > ul > li:hover {
  background: #f46;
}
.active {
  background: #f46;
}
.not-active {
  background-color: rgb(157, 160, 160);
}
#left-side {
  width: 210px;
  padding: 0 10px;
  padding-left: 15px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  color: #333;
  position: absolute;
  top: 232px;
  left: 350px;
}
#left-side > .side-one {
  flex: 0 0 30%;
  text-align: left;
}
#left-side > .side-one:nth-child(1),
#left-side > .side-one:nth-child(10),
#left-side > .side-one:nth-child(19),
#left-side > .side-one:nth-child(36) {
  flex: 0 0 100%;
  text-align: left;
  line-height: 30px;
  color: #f46;
  border-bottom: 1px solid #ccc;
}
#left-side > .side-one:nth-child(1) > div > a,
#left-side > .side-one:nth-child(10) > div > a,
#left-side > .side-one:nth-child(19) > div > a,
#left-side > .side-one:nth-child(36) > div > a {
  color: #f46;
  font-size: 14px;
}
#left-side > .side-one a {
  font-size: 12px;
  color: #757a7f;
  line-height: 23px;
}
#left-side > .side-one a:hover {
  color: #f46;
}
#floors {
  width: 1190px;
  margin: 0px auto;
}
#floors > .floor {
  margin: 0 auto;
  padding: 20px 0;
}
#floors > .floor > .floor-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid #f46;
  font-size: 18px;
  line-height: 18px;
  color: #f46;
}
#floors > .floor > .floor-top > p {
  padding-left: 8px;
}
#floors > .floor > .floor-top > a {
  color: #f46;
  font-size: 14px;
}
#floors > .floor > .floor-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
#floors > .floor > .floor-bottom > .floor-left {
  flex: 0 0 15%;
}
#floors > .floor > .floor-bottom > .floor-intr {
  flex: 0 0 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 15px;
}
#floors > .floor > .floor-bottom > .floor-intr > a {
  padding-bottom: 15px;
  margin-bottom: 20px;
  display: block;
  overflow: hidden;
  transition: all 0.3s linear;
}
#floors > .floor > .floor-bottom > .floor-intr > a:hover {
  transform: translateY(-6px);
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
}
#floors > .floor > .floor-bottom > .floor-intr img {
  width: 230px;
  height: 250px;
}
#floors > .floor > .floor-bottom > .floor-intr p {
  color: #333;
  font-size: 15px;
  font-weight: 600;
  margin: 10px 0;
}
#floors > .floor > .floor-bottom > .floor-intr span {
  color: #f46;
  font-size: 18px;
  padding: 0 5px;
}
#floors > .floor > .floor-bottom > .floor-intr s {
  color: #b5b5b5;
  font-size: 14px;
}
</style>
<script>
export default {
  data() {
    return {
      n: 0,
      images: [
        "images/index/1.jpg",
        "images/index/2.jpg",
        "images/index/3.jpg",
      ],
      timer: "",
      fenlei: [],
      floor: [],
      floorIntr: [],
    };
  },
  methods: {
    prev() {
      if (this.n == 0) {
        this.n = 2;
      } else {
        this.n--;
      }
    },
    next() {
      if (this.n == 2) {
        this.n = 0;
      } else {
        this.n++;
      }
    },
    change(i) {
      this.n = i;
    },
    f1(n) {
      this.axios
        .get("/index3", {
          params: { n: n },
        })
        .then((res) => {
          this.floorIntr.push(res.data.results);
        });
    },
    f2() {
      for (var i = 0; i < 6; i++) {
        var n = i * 8;
        this.f1(n);
      }
    },
  },
  mounted() {
    window.setInterval(() => {
      if (this.n == 2) {
        this.n = 0;
      } else {
        this.n++;
      }
    }, 4000);
    this.axios.get("/index1").then((res) => {
      this.fenlei = res.data;
    });
    this.axios.get("/index2").then((res) => {
      this.floor = res.data;
    });
    this.f2();
  },
};
</script>