<template>
  <div id="login">
    <div id="login-area">
      <h3>密码登录</h3>
      <div class="username">
        <img src="images/login/username.png" />
        <input type="text" placeholder="用户名" v-model="username" />
      </div>
      <div class="password">
        <img src="images/login/password.png" />
        <input type="password" placeholder="密码" v-model="upwd" />
      </div>
      <button @click="login">登录</button>
      <div id="login-forget">
        <router-link to="#">忘记密码</router-link>
        <router-link to="/register">立即注册</router-link>
      </div>
      <span>第三方登录</span>
      <div>
        <img src="images/login/weixin.png" />
        <img src="images/login/qq.png" />
      </div>
    </div>
  </div>
</template>>
<script>
export default {
  data() {
    return {
      username: "",
      upwd: "",
    };
  },
  methods: {
    login() {
      if (!this.username) {
        window.alert("用户名不能为空");
        return;
      }
      if (!this.upwd) {
        window.alert("密码不能为空");
        return;
      }
      this.axios
        .post("/login", {
          username: this.username,
          upwd: this.upwd,
        })
        .then((res) => {
          if (res.data.code == 200) {
            window.sessionStorage.setItem(
              "username",
              res.data.results[0].username
            );
            window.sessionStorage.setItem("uid", res.data.results[0].uid);
            this.$router.push("/");
            location.reload();
            this.$router.go(0);
          } else {
            window.alert("用户不存在");
          }
        });
    },
  },
};
</script>>
<style scoped>
#login {
  height: 490px;
  background: url(../../public/images/login/bg.jpg) no-repeat center;
  margin-bottom: 20px;
  position: relative;
}
#login-area {
  background-color: #fff;
  padding: 20px 40px;
  box-shadow: 0 0 5px #c8c1c1;
  box-sizing: border-box;
  text-align: left;
  color: #333;
  position: absolute;
  right: 20%;
  top: calc(50% - 200px);
}
#login-area h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
#login-area img {
  display: inline-block;
  padding: 10px;
  background-color: #ddd;
}
#login-area input {
  border: 0;
  padding: 10px 0 10px 10px;
}
#login-area > .username,
#login-area > .password {
  border: 1px solid #aaa;
  border-radius: 5px;
  margin: 20px 0;
}
#login-area > button {
  width: 100%;
  line-height: 42px;
  color: #fff;
  border: 0;
  border-radius: 5px;
  background-color: #f46;
  font-size: 16px;
  font-weight: 700;
}
#login-forget {
  margin: 10px 0 20px;
  text-align: right;
}
#login-forget a {
  text-decoration: none;
  color: #6c6c6c;
  font-size: 12px;
  padding-left: 10px;
}
#login-forget a:hover {
  color: #f46;
}
#login-area > span {
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
}
#login-area > span::before {
  content: "";
  border: 0.5px solid #ddd;
  width: 100px;
  display: inline-block;
}
#login-area > span::after {
  content: "";
  width: 100px;
  display: inline-block;
  border: 0.5px solid #ddd;
}
#login-area > div:last-child > img {
  background-color: #fff;
  margin: 5px 5px;
}
</style>>