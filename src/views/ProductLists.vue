<template>
  <div id="productLists">
    <!-- 左侧商品分类信息 -->
    <div id="lists-left">
      <div id="lists-nav">
        <ul>
          <li v-for="(lists, i) of listsNav" :key="i">
            <router-link to="/details">{{ lists.fenlei }}</router-link>
          </li>
        </ul>
      </div>
      <div id="lists-sales"></div>
    </div>
    <!-- 右侧商品列表 -->
    <div id="lists-right">
      <!-- 上部商品排列方式 -->
      <div id="list-top">
        <ul class="list-top-intr">
          <li>价格：</li>
          <li>
            <router-link to="#">100-200元</router-link>
          </li>
          <li>
            <router-link to="#">200-300元</router-link>
          </li>
          <li>
            <router-link to="#">300-500元</router-link>
          </li>
          <li>
            <router-link to="#">500-800元</router-link>
          </li>
          <li>
            <router-link to="#">800元以上</router-link>
          </li>
          <li>
            <router-link to="#">取消</router-link>
          </li>
        </ul>
        <ul class="list-top-intr">
          <li>排序：</li>
          <li>
            <router-link to="#">价格 ↓</router-link>
          </li>
          <li>
            <router-link to="#">相关 ↓</router-link>
          </li>
          <li>
            <router-link to="#">销量 ↓</router-link>
          </li>
          <li>
            <router-link to="#">时间 ↓</router-link>
          </li>
        </ul>
      </div>
      <!-- 商品列表 -->
      <div id="list-bottom">
        <router-link
          :to="'/details/' + list.did"
          class="list"
          v-for="(list, i) of listsAll"
          :key="i"
        >
          <img :src="list.big_image" />
          <p>{{ list.title }}</p>
          <div>
            <strong>
              <span style="font-size:12px">￥</span>
              {{ list.price_new.toFixed(2) }}
            </strong>
            <span>{{ list.sales }}人已付款</span>
          </div>
        </router-link>
      </div>
      <!-- 分页页码 -->
      <div id="pagination">
        <ul>
          <li v-for="i of pages" :key="i" :class="{ active: n === i }">
            <span @click="fenye((i - 1) * 36, i)">{{ i }}</span>
          </li>
          <button @click="next(n)">下一页</button>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listsNav: [],
      listsAll: [],
      pages: 0,
      n: 1,
      jinyong: false,
    };
  },
  methods: {
    //分页查询的请求
    fenye(page, i) {
      this.n = i;
      this.axios.get("/list", { params: { page: page } }).then((res) => {
        this.listsAll = res.data;
      });
    },
    next(n) {
      this.fenye(n * 36);
      this.n++;
    },
  },
  mounted() {
    this.axios.get("/header").then((res) => {
      this.listsNav = res.data;
    });
    this.axios.get("/lists").then((res) => {
      let n = res.data.length;
      this.pages = Math.ceil(n / 36);
    });
    this.fenye(0);
    this.n = 1;
  },
};
</script>
<style scoped>
#productLists {
  width: 1190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
}
#productLists a {
  text-decoration: none;
  color: #6b6c6e;
  font-size: 12px;
}
#productLists a:hover {
  color: #f46;
}
#lists-left {
  flex: 0 0 20%;
  padding-right: 5px;
}
#lists-nav,
#lists-sales {
  width: 210px;
  border: 1px solid #000;
  border-top: 3px solid #f46;
  box-sizing: border-box;
}
#lists-nav > ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
#lists-nav > ul > li {
  flex: 0 0 35%;
  padding-left: 20px;
  text-align: left;
  color: #333;
  font-size: 12px;
  line-height: 23px;
}
#lists-nav > ul > li:nth-child(1),
#lists-nav > ul > li:nth-child(9),
#lists-nav > ul > li:nth-child(19),
#lists-nav > ul > li:nth-child(31),
#lists-nav > ul > li:nth-child(49),
#lists-nav > ul > li:nth-child(58),
#lists-nav > ul > li:nth-child(76),
#lists-nav > ul > li:nth-child(79) {
  flex: 0 0 80%;
  padding: 0;
  margin: 5px auto;
  background-color: #f46;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
}
#lists-nav > ul > li:nth-child(1) > a,
#lists-nav > ul > li:nth-child(9) > a,
#lists-nav > ul > li:nth-child(19) > a,
#lists-nav > ul > li:nth-child(31) > a,
#lists-nav > ul > li:nth-child(49) > a,
#lists-nav > ul > li:nth-child(58) > a,
#lists-nav > ul > li:nth-child(76) > a,
#lists-nav > ul > li:nth-child(79) > a {
  color: #fff;
  font-size: 14px;
}
#lists-nav > ul > li:nth-child(1) > a:hover,
#lists-nav > ul > li:nth-child(9) > a:hover,
#lists-nav > ul > li:nth-child(19) > a:hover,
#lists-nav > ul > li:nth-child(31) > a:hover,
#lists-nav > ul > li:nth-child(49) > a:hover,
#lists-nav > ul > li:nth-child(58) > a:hover,
#lists-nav > ul > li:nth-child(76) > a:hover,
#lists-nav > ul > li:nth-child(79) > a:hover {
  color: #fff;
}
#list-top {
  flex: 0 0 80%;
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  margin-bottom: 20px;
}
#list-top > .list-top-intr {
  flex: 0 0 100%;
  display: flex;
  line-height: 40px;
  height: 50px;
  border: 1px dotted #ccc;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
#list-top > .list-top-intr li {
  text-align: right;
  width: 70px;
  height: 40px;
  margin: 0 5px;
}
#list-top > .list-top-intr li:first-child {
  font-size: 12px;
  color: #333;
  font-weight: 700;
  margin-left: 30px;
}
#list-top > ul:last-child {
  border-top: 0;
}
#list-top > ul:last-child > li:not(:first-child) > a {
  border: 1px solid rgb(204, 204, 204);
  text-align: center;
  padding: 8px 15px;
  background-color: #fff;
  color: #333;
}
#list-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
#list-bottom > a {
  display: block;
  flex: 0 0 20%;
  padding-bottom: 10px;
  transition: all 0.3s linear;
}
#list-bottom > a:hover {
  transform: translateY(-6px);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}
#list-bottom > a > img {
  width: 220px;
  height: 232px;
}
#list-bottom > a > p {
  color: #333;
  font-size: 15px;
  font-weight: 500;
  line-height: 2em;
  text-align: left;
  margin-top: 10px;
  padding: 0 10px;
}
#list-bottom > a > div {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  color: #f46;
  margin-top: 5px;
}
#list-bottom > a > div > span {
  font-size: 12px;
  color: #999;
  font-weight: 400;
}
#pagination {
  flex: 0 0 100%;
  height: 50px;
  margin: 20px 0;
}
#pagination > ul {
  display: flex;
  margin-left: 55%;
  margin-right: 20%;
  justify-content: space-around;
  align-items: center;
}
#pagination > ul > li {
  display: block;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #eee;
  cursor: pointer;
}
#pagination > ul > button {
  border: 0;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.active {
  background-color: #f46 !important;
  color: #fff !important;
  border: 0 !important;
}
</style>
