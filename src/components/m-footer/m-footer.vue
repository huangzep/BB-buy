<template>
	<div class="m-footer">
        <div class="foot_top">
            <a class="ft_a" href="login.aspx">登录</a> 
            <a class="ft_a" href="reg.aspx">注册</a> 
            <a class="ft_a" href="#" style="width: 40%; border: 0;">
                <img src="http://www.zuyushop.com/wap/images/top.jpg" width="14" height="14">返回顶部
            </a>
        </div>
        <div class="foot_bottom">
            <p class="fb_p1">
                <a href="http://m.manmanbuy.com/app.html?type=footword&amp;value=wap" style="color: Red;">手机APP下载</a> <a href="http://m.manmanbuy.com">
                    慢慢买手机版</a> -- 掌上比价平台</p>
            <p class="fb_p2">
                m.manmanbuy.com  
				<img src="http://c.cnzz.com/wapstat.php?siteid=1256699064&amp;r=http%3a%2f%2fm.manmanbuy.com%2fcuxiao.aspx&amp;rnd=267798954" width="0" height="0">
            </p>
        </div>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.m-footer
		padding-top: 10px
		.foot_top
			display: flex
			justify-content: center
			.ft_a
				flex: 1
				box-sizing: border-box
				font-size: 14px
				line-height: 36px
			    border: 1px solid #c4c4c4
			    text-align: center
		.foot_bottom
			padding: 10px 0
			display: flex
			justify-content: center
			flex-direction: column
			.fb_p1
				text-align: center
				line-height: 16px
				font-size: 12px
				padding-left: 60px
			.fb_p2
				text-align: center
				line-height: 10px
				font-size: 10px
				color: #c4c4c4

</style>