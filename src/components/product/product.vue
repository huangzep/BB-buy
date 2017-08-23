<template>
	<div class="product">
		<div class="tab-title" @click="trans" ref="tabTitle">
			<div class="tab-item active">
				<span class="tab-link">综合</span>
			</div>
			<div class="tab-item">
				<span class="tab-link">销量</span>
			</div>
			<div class="tab-item">
				<span class="tab-link">价格</span>
			</div>
			<div class="tab-item">
				<span class="tab-link">筛选</span>
			</div>
		</div>
		<shop :products="products"></shop>
	</div>
</template>

<script>
	import {getProductList} from 'api/index'
	import {mapGetters} from 'vuex'
	import Shop from 'components/shop/shop'

	export default {
		data() {
			return {
				products: []
			}
		},
		computed: {
			...mapGetters([
				'categoryId'
			])
		},
		created() {
			this._getProductList()
		},
		methods: {
			_getProductList() {
				getProductList(this.categoryId).then((res) => {
					this.products = res.result
					console.log(res)
				})
			},
			trans(e) {
				if (e.target.parentNode.classList.contains('active')) {
					return 
				}
				Array.from(this.$refs.tabTitle.children).forEach((ele) => {
					ele.classList.remove('active')
				})
				e.target.parentNode.classList.add('active')
			}
		},
		components: {
			Shop
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.tab-title
		display: flex
		height: 44px
		line-height : 44px
		font-size: $font-size-medium
		border-bottom: 1px solid #ccc
		border-top: 1px solid #ccc
		.tab-item
			flex: 1
			text-align: center
			.tab-link
				padding-bottom: 5px
				color: rgba(35, 32, 32, 0.6)
			&.active
				.tab-link
					color: $color-theme
					border-bottom: 2px solid $color-theme
</style>
