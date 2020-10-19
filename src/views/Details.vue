<template>
  <div id="details">
    <div id="detail" v-if="xinxi.length > 0">
      <div id="detail-intr">
        <!-- 放大镜 -->
        <div id="intr-left">
          <!-- 大图 -->
          <div id="big-image">
            <div id="shubiao" v-show="magnifyingGlass" :style="{ top: top, left: left }"></div>
            <img
              @mouseenter="magnifyingGlass=!magnifyingGlass"
              @mouseleave="magnifyingGlass=!magnifyingGlass"
              :src="xinxi[0].big_image"
            />
          </div>
          <!-- 小图 -->
          <!-- 等待修改 -->
          <div id="small-image">
            <img :src="xinxi[0].big_image" />
          </div>
        </div>
        <!-- 商品详情简介 -->
        <div id="intr-right">
          <div id="title">{{ xinxi[0].title }}</div>
          <!-- 商品详情表格 -->
          <div id="dfr">
            <div class="dfr_td">
              <div>鲜花花材</div>
              <div>{{ xinxi[0].detail_cai }}</div>
            </div>
            <div class="dfr_td">
              <div>鲜花包装</div>
              <div>{{ xinxi[0].packing }}</div>
            </div>
            <div class="dfr_td">
              <div>鲜花花语</div>
              <div>{{ xinxi[0].flower_language }}</div>
            </div>
            <div class="dfr_td">
              <div>附送赠品</div>
              <div>免费附送精美贺卡，代写你的祝福。（你下单时可填写留言栏）</div>
            </div>
            <div class="dfr_td">
              <div>配送范围</div>
              <div>本地区各市县、乡镇、街道（市区内免费配送）</div>
            </div>
            <div class="dfr_td">
              <div>商品说明</div>
              <div>由于花材的季节原因和手工包扎，可能在花束的形式和搭配上与图片不完全一致，但我们保证鲜花的主花材品种、新鲜程度、数量、颜色与说明一致，谢谢。</div>
            </div>
          </div>
          <!-- 商品价格 -->
          <div id="intr-price">
            <div id="price-new">
              <span>优惠价</span>
              <span>￥</span>
              <span>{{ xinxi[0].price_new.toFixed(2) }}</span>
            </div>
            <div id="price-old">
              <s>
                市场价： ￥
                <span>{{ xinxi[0].price_old.toFixed(2) }}</span>
              </s>
            </div>
          </div>
          <!-- 商品销量 -->
          <div id="salesVolume">
            <div>
              累计销量
              <span>{{ xinxi[0].sales }}</span>
            </div>
            <div>
              累计评价
              <span>7</span>
            </div>
          </div>
          <div id="collection">
            <p>收藏</p>
            <div id="number">
              <p>数量</p>
              <button @click="jian">-</button>
              <input type="text" v-model="num" />
              <button @click="num++">+</button>
            </div>
          </div>
          <div id="buy-now">
            <button @click="add(uid,num,xinxi[0].did)">加入购物车</button>
            <button>立即购买</button>
          </div>
        </div>
      </div>
      <!-- 放大镜对应的大图 -->
      <div id="magnifyingGlass" v-show="magnifyingGlass">
        <img
          :src="xinxi[0].big_image"
          :style="{ 'margin-top': '-' + top, 'margin-left': '-' + left }"
        />
      </div>
      <!-- 放大镜触发事件的蒙层 -->
      <div
        id="mengceng"
        @mousemove="move"
        @mouseenter="magnifyingGlass=!magnifyingGlass"
        @mouseleave="magnifyingGlass=!magnifyingGlass"
      ></div>
      <!-- 商品详情图片 -->
      <div id="details-intr">
        <div id="recommend"></div>
        <div id="d-intr">
          <div id="detail-intr-header">
            <p>商品详情</p>
          </div>
          <div id="detail-intr-image">
            <img src="images/details/1.jpg" />
            <img src="images/details/2.jpg" />
            <img src="images/details/3.jpg" />
            <img src="images/details/4.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["did"],
  data() {
    return {
      num: 1,
      magnifyingGlass: false,
      top: 0,
      left: 0,
      imgs: [
        "images/index/floor-1-2.jpg",
        "images/index/floor-1-3.jpg",
        "images/index/floor-1-4.jpg",
      ],
      xinxi: [],
      uid: 0,
    };
  },
  methods: {
    jian() {
      if (this.num > 1) {
        this.num--;
      } else {
        this.num = 1;
      }
    },
    move(e) {
      if (e.offsetY < 75) {
        this.top = 0;
      } else if (e.offsetY > 325) {
        this.top = "250px";
      } else {
        this.top = e.offsetY - 75 + "px";
      }
      if (e.offsetX < 75) {
        this.left = 0;
      } else if (e.offsetX > 325) {
        this.left = "250px";
      } else {
        this.left = e.offsetX - 75 + "px";
      }
    },
    // 加入购物车
    add(uid, num, did) {
      this.axios.post("/addCar", {
        car_uid: uid,
        car_count: num,
        car_sid: did,
      });
    },
  },
  mounted() {
    this.axios.get("/details", { params: { did: this.did } }).then((res) => {
      this.xinxi = res.data.results;
      console.log(this.xinxi);
      this.uid = parseInt(window.sessionStorage.getItem("uid"));
    });
  },
};
</script>
<style scoped>
#details {
  padding: 30px;
  position: relative;
}
#detail-intr {
  width: 1190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#intr-left {
  text-align: left;
  position: relative;
}
#shubiao {
  width: 150px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
}
#big-image > img {
  width: 400px;
  height: 400px;
  margin-bottom: 15px;
}
#small-image > img {
  width: 70px;
  height: 70px;
}
#intr-right {
  margin-left: 50px;
  text-align: left;
}
#intr-right > #title {
  font-size: 26px;
  font-weight: 700;
  padding: 10px;
}
#dfr > .dfr_td {
  border: 1px solid #f46;
  font-size: 12px;
  color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#intr-right > #dfr > div + div {
  border-top: 0px solid #f46;
}
#intr-right > #dfr > div > div {
  padding: 8px 10px;
  line-height: 14px;
}
#intr-right > #dfr > div > div:first-child {
  flex: 0 0 10%;
  height: 100%;
  text-align: center;
  border-right: 1px solid #f46;
  background-color: #ffeff1;
  box-sizing: border-box;
}
#intr-right > #dfr > div > div:last-child {
  box-sizing: border-box;
}
#intr-right > #dfr > div:last-child > div:first-child {
  height: 44px;
  line-height: 28px;
}
#intr-price {
  display: flex;
  margin: 20px 0;
  padding: 10px 0;
  color: #999;
  font-size: 12px;
  line-height: 24px;
  background-color: #e9e9e9;
}
#intr-price > div {
  display: flex;
  justify-content: flex-start;
}
#price-new {
  padding: 0 30px;
}
#price-new > span:not(:first-child) {
  padding-left: 10px;
  color: #f46;
}
#price-new > span:last-child {
  font-size: 24px;
  font-weight: 700;
  padding-right: 30px;
  border-right: 2px solid #ccc;
}
#price-old {
  font-size: 14px;
}
#salesVolume {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999;
  line-height: 30px;
  border-top: 1px dotted #9e9e9e;
  border-bottom: 1px dotted #9e9e9e;
  cursor: pointer;
}
#salesVolume > div:first-child {
  flex: 0 0 50%;
  text-align: center;
  border-right: 1px dotted #9e9e9e;
}
#salesVolume > div:first-child > span,
#salesVolume > div:last-child > span {
  color: #f46;
  padding: 0 5px;
}
#salesVolume > div:last-child {
  flex: 0 0 50%;
  text-align: center;
}
#collection {
  margin: 20px 0;
  display: flex;
  align-items: center;
  color: #999;
  font-size: 12px;
}
#collection > p {
  margin-right: 50px;
  cursor: pointer;
}
#number {
  display: flex;
  align-items: center;
}
#number > p {
  margin-right: 30px;
}
#number > input {
  width: 53px;
  height: 25px;
  text-align: center;
  box-sizing: border-box;
  border: 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
#number > button {
  width: 25px;
  height: 25px;
  border: 0;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
}
#buy-now > button {
  background-color: #f46;
  padding: 10px 50px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  margin-right: 20px;
  box-sizing: border-box;
}
#buy-now > button:first-child {
  background-color: #ffeded;
  color: #f46;
  border: 1px solid #f46;
  font-weight: 600;
}
#magnifyingGlass {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 30px;
  left: 800px;
  overflow: hidden;
}
#magnifyingGlass > img {
  width: 550px;
  height: 550px;
}
#mengceng {
  width: 400px;
  height: 400px;
  background: transparent;
  position: absolute;
  top: 30px;
  left: calc(50% - 595px);
  cursor: move;
}
#details-intr {
  width: 1190px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
#recommend {
  flex: 0 0 20%;
  height: 1000px;
  border: 1px solid #ededed;
  margin-right: 40px;
}
#d-intr {
  flex: 0 0 70%;
}
#detail-intr-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #333;
  border: 1px solid #e9e9e9;
  box-shadow: 0px 0px 3px 1px #e9e9e9 inset;
  background-color: #fefefe;
}
#detail-intr-header > p {
  flex: 0 0 100%;
  font-size: 17px;
  height: 45px;
  line-height: 45px;
  cursor: pointer;
  border-top: 2px solid #f46;
}
#detail-intr-header > p::before {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  border-top: 5px solid #f46;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-left: 50%;
}
</style>
