<template>
	<div class="discount">
		<ul>
			<router-link tag="li" to="/disproduct" @click.native="setPreproduct(product)" v-for="product in products">
				<div class="img" v-html="product.productImg"></div>
				<div class="title">{{product.productName}}</div>
				<div class="info">
					{{product.productFrom + ' | ' + product.productTime}}
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import {getDiscount} from 'api/index'
	import {mapMutations} from 'vuex'

	export default {
		data() {
			return {
				products: []
			}
		},
		created() {
			this._getDiscount()
		},
		methods: {
			_getDiscount() {
				let id = (Math.random() * 20) | 0
				console.log(id)
				getDiscount(id).then((res) => {
					console.log(res)
					this.products = res.result
				})
			},
			...mapMutations({
				setPreproduct: 'SET_PREPRODUCT'
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.discount
		background-color: #fff
		overflow: auto
		ul
			display: flex
			flex-wrap: wrap
			justify-content: space-around
			li
				width: 40%
				box-sizing: border-box
				.img
					width: 100%
					height: 160px
					img
						width: 80%
						display: block
						margin: 0 auto
				.title
					color: #333333
					font-size: 14px
					text-align: left
					line-height: 18px
					height: 36px
					overflow: hidden
					font-weight: bold
				.info
					font-size: 12px
					color: #ccc
					line-height: 24px
					padding: 6px 8px
</style>

