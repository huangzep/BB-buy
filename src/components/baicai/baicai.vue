<template>
	<div class="lbaicai">
	    <h1 class="h">白菜价-淘宝内部券</h1>
        <div class="nav">
            <ul>
            	<li v-for="item in titles" :data-id="item.titleId"
            	@click="change(item.titleId)">
            		{{item.title}}
            	</li>
            </ul>             
        </div>
        <div class="containner">
			<ul>
				<li v-for="(item,index) in items"
				v-show="index>2">
					<div class="left" v-html="item.productImg">
						
					</div>
					<div class="right">
						<div class="top">
							<div class="name" v-html="item.productName"></div>
                            <div class="price" v-html="item.productPrice"></div>
						</div>
						<div class="bottom">
							<div class="youhui" v-html="item.productCoupon"></div>
                        <div class="xiadan" v-html="item.productHref"></div>
						</div>
					</div>
				</li>
			</ul>
        </div>
        <div class="page_loading"></div>
    </div>
</template>

<script>
	import {getBaicaiTitle, getBaicaiProduct} from 'api/index'

	export default {
		data() {
			return {
				titles: [],
				items: []
			}
		},
		created() {
			this._init()
		},
		methods: {
			_init() {
				getBaicaiTitle().then((res) => {
					this.titles = res.result
				})
				getBaicaiProduct().then((res) => {
					this.items = res.result
					console.log(this.items)
				})

			},
			change(id) {
				getBaicaiProduct(id).then((res) => {
					this.items = res.result
				})
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.lbaicai
		background-color: #fff
		overflow: auto
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
		margin: auto
		.h
			background: #e4393c;
			color: #FFFFFF
			line-height: 44px
			text-align: center
		.nav
			height: 30px;
			ul
				display: flex;
				flex-wrap: wrap
				height: 36px
				overflow: hidden
				li
					text-align: center
					line-height: 30px;
					color: #999
					width: 20%
		.containner
			li
				display: flex
				justify-content: flex-start
				width: 100%
				padding: 20px
				color: #999
				.left
					width: 30%
					img
						width: 100%
				.right
					width:70%
					padding:5px 0
					.top
						padding:2px 0
						.name
							padding:8px 0
						.price
							padding:8px 0
					.bottom
						display:flex
						justify-content:space-between
						padding-right:50px
												

</style>

