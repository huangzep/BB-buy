<template>
	<div class="product-detail">
        <div class="nav">
        	<div>
        		{{preproduct.productName}}
        	</div>
        </div>
        <div class="detail-head">
        	<div class="pic" v-html="product.productImg"></div>
        	<div class="tit">{{product.productName}}</div>
        	<div class="inf"></div>
        </div>
        <div class="evaluate">
        	<div class="top">优选网友评价</div>
        	<ul class="pjList">
	        	<li class="pj" v-for="item in evaluations">
	        		<div class="name">
	        			<span>{{item.comName}}</span>
	        			<span>{{item.comTime}}</span>
	        		</div>
	        		<div class="xing">
	        			<span>星星数：{{item.comId}}</span>
	        			<span>{{item.comFrom}}</span>
	        		</div>
	        		<p>
	        			{{item.comContent}}
	        		</p>
	        	</li>
	        </ul>
        </div>
	</div>
</template>

<script>
	import {getProduct, getProductCom} from 'api/index'
	import {mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				product: {},
				evaluations: []
			}
		},
		computed: {
			...mapGetters([
				'preproduct'
			])
		},
		created() {
			setTimeout(() => {
				this._getProduct()
				this._getProductCom()
			}, 1000)
		},
		methods: {
			_getProduct() {
				getProduct(this.preproduct.productId).then((res) => {
					this.product = res.result[0]
				})
			}, 
			_getProductCom() {
				getProductCom(this.preproduct.productId).then((res) => {
					this.evaluations = res.result
				})
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.product-detail
		background: #fff
		overflow: auto
		.nav
			height: 36px
			background-color: #ebebeb
			background: -webkit-gradient(linear, 0, 0, 0 100%, from(#ffffff), to(#ebebeb))
			line-height: 36px
			padding-left: 8px;
			font-size: 14px
		.detail-head
			.pic
				height: 160px
				text-align: center
				padding: 10px
				img
					max-width: 160px
					max-height: 160px
			.tit
				font-size: 16px
				text-align: left
				color: #000
		.evaluate
			border-top: 4px solid #7a7a7a
			margin-top: 5px;
			.top
				line-height: 34px
				background: #dbdbdb
				text-align: center;
				border-top: 1px solid #fff;
			.pjList
				.name
					display: flex
					justify-content: space-between
					color: #999
					font-size: 14px
					padding: 2px 10px
				.xing
					display: flex
					justify-content: space-between
					color: #999
					font-size: 14px
					padding: 2px 10px
				p
					line-height: 22px
					font-size: 14px
					padding-top: 5px;
					color: #000
</style>

