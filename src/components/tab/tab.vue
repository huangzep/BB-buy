<template>
	<div class="tab">
		<index-menu></index-menu>
		<shop :products="products"></shop>
	</div>
</template>

<script>
	import IndexMenu from 'components/index-menu/index-menu'
	import Shop from 'components/shop/shop'
	import {getProducts} from 'api/index'

	export default {
		data() {
			return {
				products: []
			}
		},
		created() {
			this._getProducts()
		}, 
		methods: {
			_getProducts() {
				getProducts().then((res) => {
					console.log(res)
					this.products = res.result
				})
			}
		},
		components: {
			IndexMenu,
			Shop
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.tab
		font-size: $font-size-medium
</style>

