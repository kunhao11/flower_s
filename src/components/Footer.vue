<template>
    <div id="footer">
        <div id="footer-bar">
            <div id="lists">
                <ul class="list">
                    <li>客户服务</li>
                    <li><a href="#">隐私条款</a></li>
                    <li><a href="#">公司简介</a></li>
                    <li><a href="#">安全条款</a></li>
                    <li><a href="#">联系方式</a></li>
                    <li><a href="#">服务声明</a></li>
                </ul>
                <ul class="list">
                    <li>购物指南</li>
                    <li><a href="#">绿植寓意</a></li>
                    <li><a href="#">花数寓意</a></li>
                    <li><a href="#">购物须知</a></li>
                    <li><a href="#">如何购买</a></li><a></a>
                </ul>
                <ul class="list">
                    <li>支付方式</li>
                    <li><a href="#">在线支付</a></li>
                    <li><a href="#">银行转账</a></li>
                    <li><a href="#">在线补款</a></li>
                </ul>
                <ul class="list">
                    <li>送花信息</li>
                    <li><a href="#">鲜花配送</a></li>
                    <li><a href="#">定时配送</a></li>
                    <li><a href="#">销售说明</a></li>
                    <li><a href="#">发票说明</a></li>
                    <li><a href="#">销售范围</a></li>
                </ul>
                <ul class="list">
                    <li>售后服务</li>
                    <li><a href="#">投诉建议</a></li>
                    <li><a href="#">订单查询</a></li>
                    <li><a href="#">取消订单</a></li>
                    <li><a href="#">修改订单</a></li>
                </ul>
                <div id="phone">
                    <span>花店服务热线</span>
                    <img src="images/footer/hdc-webtel.png"><br>
                    <img src="images/footer/language.png">
                </div>
            </div>
            <div id="footer-copy">
                <p>全国订花热线：400-615-0166 | 技术服务：028-85578108 © 版权所有: 四川爱尚美网络科技有限公司 蜀ICP备17005948号</p>
            </div>
        </div>
    </div>
</template>>
<style scoped>
#footer{
    padding: 30px 0;
    border-top: 2px solid #f46;
    background-color: #fdf2ec;
}
#footer-bar{
    min-width: 1190px;
}
#lists{
    width: 1190px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
#lists>.list>li{
    font-size: 12px;
    margin-bottom: 15px;
}
#lists>.list>li>a{
    text-decoration: none;
    color: #494e52;
}
#lists>.list>li>a:hover{
    color: #f46;
}
#lists>.list>li:first-child{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
}
#phone>span{
    font-size: 15px;
    color: #333;
    font-weight: 700;
    display: block;
    margin-bottom: 20px;
}
#footer-copy>p{
    font-size: 12px;
    color: #333;
    padding: 10px 0;
}
</style>