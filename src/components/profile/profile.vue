<template>
	<div class="profile">
		<div class="top">
			<div class="back"></div>
			<div class="txt">省钱控-最新优惠</div>
			<div class="down">
				<a class="appdown-a" href="http://m.manmanbuy.com/app.html?type=headword&amp;value=wap" title="手机app下载">
	                <img src="/static/image/header_app.png" height="34" alt="手机app下载">
	            </a>
			</div>
		</div>
		<shop :products="products"></shop>
		<page :pageid="pageid" :pageNum="pageNum"></page>
	</div>
</template>

<script>
	import Shop from 'components/shop/shop'
	import {getMoneyCtrl} from 'api/index'
	import Page from 'components/page/page'

	export default {
		data() {
			return {
				products: [],
				pageid: 2,
				pageNum: 1
			}
		},
		created() {
			this._getMoneyCtrl()
		},
		methods: {
			_getMoneyCtrl() {
				getMoneyCtrl(this.pageid).then((res) => {
					this.products = res.result
					this.pageNum = res.pagesize
					console.log(this.pageNum)
				})
			}
		},
		components: {
			Shop,
			Page
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.profile
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
		margin: auto
		background-color: #fff
		overflow: auto
		.top
			height: 44px
			display: flex
			justify-content: space-between
			background-color: #ff841d
			margin-bottom: 2px
			.back
				width: 50px
				padding-left: 10px
				line-height: 44px
				text-align: center
				&::after
					content: "<";
					color: #ffffff;
					font-size: 17px;
					display: block
			.txt
				line-height: 44px
				font-size: 20px;
				font-weight: bold
				text-align: center;
				margin-left: -10px
			.down
				padding: 6px 6px 0 0
</style>

