<template>
    <div id="registers">
        <div id="register">
            <div id="register-login">已有帐号<router-link to="/login">登录>></router-link></div>
            <div id="register-input">
                <div id="register-left">
                    <p>用户名</p>
                    <p>密码</p>
                    <p>确认密码</p>
                    <p>手机号</p>
                </div>
                <div id="register-center">
                    <input type="text" placeholder="请输入6-10位数字字母的用户名" maxlength="10" v-model="username" @blur="checkedun">
                    <input type="password" placeholder="请输入8-12位数字字母密码" maxlength="12" v-model="upwd" @blur="checkedup">
                    <input type="password" placeholder="请再次输入密码" v-model="reupwd" @blur="checkedre">
                    <input type="text" placeholder="请输入合法的手机号" v-model="phone" @blur="checkedph">
                </div>
                <div id="register-right">
                    <p>
                        <img :src="checkedUserName">
                        <span>{{message}}</span>
                    </p>
                    <p>
                        <img :src="checkedUpwd">
                    </p>
                    <p>
                        <img :src="checkedReupwd">
                    </p>
                    <p>
                        <img :src="checkedPhone">
                    </p>
                </div>
                <div id="register-button">
                    <button @click="register">立即注册</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            upwd:'',
            reupwd:'',
            phone:'',
            message:'',
            checkedUserName:'',
            checkedUpwd:'',
            checkedReupwd:'',
            checkedPhone:''
        }
    },
    methods:{
        checkedun(){
            let reg=/^[a-zA-Z0-9]{6,10}$/;
            let result1=reg.test(this.username);
            this.axios.post('/register1',{
                username:this.username
            }).then(res=>{
                console.log(res.data);
                if(res.data.code==400){
                    this.message=res.data.message;
                    this.checkedUserName='images/register/no.png';
                }else{
                    this.checkedUserName = result1 ? 'images/register/yes.png' : 'images/register/no.png';
                    this.message='';
                }
            })
        },
        checkedup(){
            let reg=/^[a-zA-Z0-9]{8,12}$/;
            let result2=reg.test(this.upwd);
            this.checkedUpwd = result2 ? 'images/register/yes.png' : 'images/register/no.png'
            if(this.upwd==this.reupwd){
                this.checkedReupwd='images/register/yes.png'
            }else{
                this.checkedReupwd='images/register/no.png'
            }
        },
        checkedre(){
            if(this.upwd==this.reupwd){
                this.checkedReupwd='images/register/yes.png'
            }else{
                this.checkedReupwd='images/register/no.png'
            }
        },
        checkedph(){
            let reg=/^1[345678]\d{9}$/;
            let result3=reg.test(this.phone);
            this.checkedPhone = result3 ? 'images/register/yes.png' : 'images/register/no.png'
        },
        register(){
            if(this.checkedUserName=='images/register/yes.png' && this.checkedUpwd=='images/register/yes.png' && this.checkedReupwd=='images/register/yes.png' && this.checkedPhone=='images/register/yes.png'){
                this.axios.post('/register2',{
                    username:this.username,
                    upwd:this.upwd,
                    phone:this.phone
                }).then(res=>{
                    window.alert('注册成功');
                    this.$router.push('/login');
                })
            }else{
                window.alert('信息有误，请检查后重新提交')
            }
        },
    }
}
</script>>
<style scoped>
    #registers{
        padding: 80px 0 50px;
    }
    #registers a{
        text-decoration: none;
    }
    #register{
        width: 50%;
        margin: 0 auto;
        box-shadow: 0 0 5px #ddd;
        border: 1px solid #d8d7d7;
        padding-bottom: 30px;
    }
    #register-login{
        height: 30px;
        line-height: 30px;
        text-align: right;
        background-color: #f1f1f1;
        margin-bottom: 50px;
        font-size: 12px;
        padding-right: 20px;
    }
    #register-login a{
        padding-left: 15px;
        color: #f46;
        font-size: 12px;
    }
    #register-input{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    #register-left{
        flex: 3;
        text-align: right;
        margin-right: 20px;
    }
    #register-left>p,#register-right>p{
        height: 42px;
        font-size: 16px;
        font-weight: 700;
        line-height: 42px;
        margin-bottom: 20px;
    }
    #register-center{
        flex: 4;
        text-align: center;
        line-height: 42px;
        box-sizing: border-box;
    }
    #register-center input{
        width: 100%;
        padding: 11px 8px 11px 11px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 2px;
    }
    #register-right{
        flex: 5;
        text-align: left;
    }
    #register-right>p{
        padding-left: 30px;
    }
    #register-input>#register-button{
        flex: 0 0 100%;
    }
    #register-button>button{
        width: 260px;
        height: 42px;
        border: 0;
        background-color: #f46;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: 42px;
        margin-top: 20px;
        margin-left: -90px;
    }
</style>>