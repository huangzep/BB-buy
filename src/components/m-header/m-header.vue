<template>
	<div class="m-header">
		<div class="header">
	        <div class="logo">
	            <a class="logo-a" href="http://m.manmanbuy.com/" title="慢慢买比价网--手机版">
	                <img src="/static/image/header_logo.png" height="25" alt="慢慢买比价网--手机版">
	            </a>
	        </div>
	        <div class="appdown">
	            <a class="appdown-a" href="http://m.manmanbuy.com/app.html?type=headword&amp;value=wap" title="手机app下载">
	                <img src="/static/image/header_app.png" height="34" alt="手机app下载">
	            </a>
	        </div>
	    </div>
	    <div class="search">
	        <div class="searchtxt">
	            <input class="txt-input" name="key" type="search" placeholder="请输入你想比价的商品">
	        </div>
	        <div class="searchbtn">
	            <input class="btn-input" type="submit" value="搜索">
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  	@import "~common/stylus/variable"
	@import "~common/stylus/mixin"

	.m-header 
		position: relative
		height: 100px
		text-align: center
		color: $color-theme
		font-size: 0
		.header	
			display: flex
			justify-content: space-between
			align-items: center
			height: 50px
			background-color: #ff841d
			.logo
				padding-left: 12px
				.logo-a 
					display: block	
			.appdown
				padding-right: 7px
				.appdown-a
					display: block
		.search 
			height: 50px
			display: flex
			justify-content: center
			align-items: center
			.searchtxt
				width: 340px
				height: 30px
				.txt-input
				    border: none
				    background: #f1f1f1
				    margin: 0px
				    padding: 0px
				    height: 30px
				    line-height: 30px
				    border-radius: 15px
				    padding-left: 10px
				    width: 100%
				    font-size: 15px
			.searchbtn 
				height: 60px
				position: relative
				.btn-input
				    width: 62px;
				    background: #ff841d;
				    color: #FFFFFF;
				    border: none;
				    height: 30px;
				    line-height: 30px;
				    border-radius: 15px;
				    position: absolute;
				    top: 15px;
				    right: 0px;
				    font-size: 15px;
</style>