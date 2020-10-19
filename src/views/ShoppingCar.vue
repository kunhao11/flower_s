<template>
  <div id="car">
    <h1>我的购物车</h1>
    <!-- 购物车列表 -->
    <div id="car_lists">
      <div id="car_lists_header">
        <p>选择</p>
        <p>商品</p>
        <p>单价</p>
        <p>数量</p>
        <p>小计</p>
        <p>操作</p>
      </div>
      <div class="car_lists_intr" v-for="(list,i) of lists" :key="i">
        <!-- 1 复选框 -->
        <input class="choose" type="checkbox" v-model="list.car_state" @click="add2(list.c_id)" />
        <!-- 2 商品 -->
        <div class="shangpin">
          <!-- 缩略图 -->
          <img :src="list.big_image" />
          <!-- 商品名 -->
          <div>
            <!-- 标题 -->
            <p>{{list.title}}</p>
            <!-- 商品货号 -->
            <p>商品货号：1314</p>
          </div>
        </div>
        <!-- 3 单价 -->
        <p class="price">￥{{list.price_new.toFixed(2)}}</p>
        <!-- 4 数量 -->
        <div class="number">
          <button @click="jian(list.c_id,list.car_count)">-</button>
          <input type="text" :value="list.car_count" disabled />
          <button @click="add(list.c_id,list.car_count)">+</button>
        </div>
        <!-- 5 小计 -->
        <span class="subtotal">￥{{(list.car_count*list.price_new).toFixed(2)}}</span>
        <!-- 6 删除操作 -->
        <button class="delete" @click="del(list.c_id)">删除</button>
      </div>
      <div id="car_lists_footer">
        <div>
          <input type="checkbox" @click="quan" v-model="quanxuan" />
          <span>全选</span>
        </div>
        <div id="totle">
          <span>总价：</span>
          <span>￥{{total.toFixed(2)}}</span>
          <button>去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      uid: 0,
      lists: [],
      choose: [],
      quanxuan: 0,
    };
  },
  methods: {
    // 获取用户购物车数据
    getCar() {
      this.axios
        .get("/shoppingCar", { params: { uid: this.uid } })
        .then((res) => {
          this.lists = res.data;
          // console.log(this.lists);
        });
    },
    add(c_id, n) {
      n++;
      this.axios.get("/shoppingCarUpdate", { params: { c_id: c_id, n: n } });
      this.getCar();
    },
    jian(c_id, n) {
      if (n > 1) {
        n--;
        this.axios.get("/shoppingCarUpdate", { params: { c_id: c_id, n: n } });
        this.getCar();
      }
    },
    del(c_id) {
      this.axios.get("/shoppingCarDelete", { params: { c_id: c_id } });
      this.getCar();
    },
    quan(e) {
      // 获取全选按钮的状态
      // console.log(e.target.checked);
      if (e.target.checked == true) {
        for (let i of this.lists) {
          i.car_state = 1;
          this.choose.push(i);
        }
      } else {
        for (let i of this.lists) {
          i.car_state = 0;
        }
        this.choose.splice(0);
      }
    },
    // 计算选中的商品的价钱
    add2(c_id) {
      // 遍历lists，将选中的商品添加到chosoe
      for (let i of this.lists) {
        // console.log(this.lists[i].c_id);
        if (i.c_id == c_id) {
          if (i.car_state == 0) {
            i.car_state = 1;
            this.choose.push(i);
          } else {
            i.car_state = 0;
            for (let n = 0; n < this.choose.length; n++) {
              if (this.choose[n].c_id == c_id) {
                this.choose.splice(n, 1);
              }
            }
          }
        }
      }
      // 如果所有的商品全都被选中，即choose的长度等于lists的长度，则全选按钮选中，否则不选中
      if (this.choose.length == this.lists.length) {
        this.quanxuan = 1;
      } else {
        this.quanxuan = 0;
      }
    },
  },
  // 计算属性计算总价
  computed: {
    total() {
      var sum = 0;
      for (var i of this.choose) {
        sum += i.car_count * i.price_new;
      }
      return sum;
    },
  },
  watch: {},
  mounted() {
    this.uid = window.sessionStorage.getItem("uid");
    this.getCar();
  },
};
</script>
<style scoped>
#car {
  width: 1190px;
  margin: 0 auto;
  padding: 30px 0;
}
#car > h1 {
  text-align: left;
  font-size: 20px;
  color: #333;
  line-height: 30px;
  padding-left: 20px;
}
#car_lists_header {
  display: flex;
  margin-top: 5px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #eff2f5;
  font-size: 14px;
  color: #333;
}
#car_lists_header > p:first-child,
#car_lists_header > p:nth-child(3),
#car_lists_header > p:last-child,
.car_lists_intr > .choose,
.car_lists_intr > .price,
.car_lists_intr > .delete {
  flex: 1;
}
#car_lists_header > p:nth-child(2),
.car_lists_intr > .shangpin {
  flex: 4;
}
#car_lists_header > p:nth-child(4),
#car_lists_header > p:nth-child(5),
.car_lists_intr > .number,
.car_lists_intr > .subtotal {
  flex: 2;
}
.car_lists_intr {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 12px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.car_lists_intr > input {
  flex: 1;
}
.car_lists_intr > .shangpin {
  flex: 4;
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.shangpin > img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: 50px;
}
.shangpin > div > p {
  text-align: left;
  padding: 7px 0;
}
.number > input {
  width: 40px;
  text-align: center;
  height: 27px;
  border: 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  margin: 0 -1px;
}
.number > button {
  height: 31px;
  width: 30px;
}
.car_lists_intr > .delete {
  width: 70%;
  border: 0;
  height: 30px;
  background-color: transparent;
}
#car_lists_footer {
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding-left: 40px;
  color: #333;
  font-size: 12px;
  background-color: #eff2f5;
}
#totle > span ~ span {
  color: #f46;
  font-size: 24px;
  font-weight: 700;
}
#totle > button {
  height: 48px;
  font-size: 16px;
  color: #fff;
  background-color: #f46;
  border: 0;
  padding: 0 20px;
  margin-left: 20px;
}
</style>