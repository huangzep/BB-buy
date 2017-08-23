<template>
	<div class="disproduct">
		<div class="content">
			<h3 class="title">
				{{product.productName}}
			</h3>
			<h4 class="price">
				售价：{{product.productPrice}}元
			</h4>
			<div class="info">
				{{product.productFrom + ' ' + product.productTime + ' ' + product.productTips}}
			</div>
			<div class="subcontent">
				<div class="intro">
					{{product.productInfo}}
				</div>
				<div class="img" v-html="product.productImg"></div>
			</div>
			<div class="gobuy">
				前往购买
			</div>
		</div>
		<div class="comment" v-html="product.productComment"></div>
	</div>
</template>

<script>
	import {getDiscountProduct} from 'api/index'
	import {mapGetters} from 'vuex'

	export default {
		data() {
			return {
				product: {}
			}
		},
		computed: {
			...mapGetters([
				'preproduct'
			])
		},
		created() {
			setTimeout(() => {
				this._getDiscountProduct()
			}, 1000)
		},
		methods: {
			_getDiscountProduct() {
				getDiscountProduct(this.preproduct.productId).then((res) => {
					console.log(res)
					this.product = res.result[0]
				})
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.disproduct
		background-color: #fff
		overflow: auto
		.content
			height: auto
			padding-left: 10px
			.title
				color: #5a5a5a
				font-size: 18px
				font-weight: 800
				margin: 10px auto 5px auto
				line-height: normal
			.price
				color: #ff6c00
				font-size: 15px
			.info
				margin: 12px auto
				color: #999999
				font-size: 12px
			.subcontent
				display: flex
				justify-content: space-around
				width: 100%
				.intro
					font-size: 16px
					line-height: 24px
					color: #606060
					flex: 2
					padding: 10px
				.img
					flex: 1
					margin: 10px
					img
						width: 100%
			.gobuy
				background: #FF9000
				height: 30px
				line-height: 30px
				font-size: 14px;
				text-align: center
				color: #ffffff;
				margin: 6px 14px
		.comment
			padding-top: 10px
			border-top: 1px solid #ccc
			.tit
				font-size: 16px
				padding: 6px 8px
				color: #000
			.reply
				padding: 6px 8px
				.form
					border: 2px solid #ECEAE8
					border-radius: 2px
					position: relative
					background-color: #fff
					margin: 0px auto
					width: 98%
					textarea
						line-height: 22px
						color: #666;
						height: 68px
						width: 98%
						margin: 0 auto
						display: block
					.ctrl
						input
							background: #ff841d;
							position: absolute
							color: #fff
							height: 39px
							width: 100px
							bottom: 0
							right: 0
</style>

