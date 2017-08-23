<template>
	<div class="shop">
		<div class="recommend">
	        <span class="txt">超值折扣推荐</span>
	        <i class="more"></i>
	    </div>
		<ul class="ul">
            	<router-link tag="li" class="list_nav" v-for="product in products" to="/detail" @click.native="setPreproduct(product)">
	                <div class="pic" v-html="product.productImgSm ? product.productImgSm : product.productImg">

	                </div>
	                <div class="info">
	                    <div class="title">
	                        {{product.productName}}
	                        <span>{{product.productPinkage ? product.productPinkage : product.productPrice}}</span>
	                    </div>
	                    <div class="other">
	                        <span class="from">{{product.productFrom ? product.productFrom : product.brandName + product.productQuote}}</span>
	                        <span class="talk">
	                            <i class="icon-comment"></i>
	                            {{product.productComCount ? product.productComCount : product.productCom}}
	                        </span>
	                    </div>
	                </div>
                </router-link>
	    </ul>
        <router-link  class="more-bar" tag="div" to="/moneyctrl">
        	更多优惠信息 »
        </router-link >
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'

	export default {
		props: {
			products: {
				type: Array,
				default: []
			}
		},
		mounted() {
			console.log(this.products)
		},
		methods: {
			...mapMutations({
				setPreproduct: 'SET_PREPRODUCT'
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.shop
		.wrapper
			height: 600px
		.recommend
			padding-left: 10px
			background: #ff9000
			.txt
				font-size: 18px
				line-height: 35px
				color: #fff
				font-weight: 700
		.ul
			.list_nav
				display: flex
				padding: 14px 8px
				justify-content: center
				.pic
					width: 100px
					height: 100px
					img
						width: 100px
						height: 100px
				.info
					display: flex
					flex-direction: column
					justify-content: space-around
					padding-left: 10px
					.title
						color: #333333
						    word-break: break-all;
						    font-size: 15px;
						    line-height: 19px;
						    min-height: 57px;
						    text-align: left;
						    font-weight: normal
					.other
						margin-top: 8px;
						    color: #a1a1a1
						    font-size: 14px
						    display: flex
						    justify-content: space-between
		.more-bar
			    display: block;
			    line-height: 30px;
			    background: #F4F4F4;
			    text-decoration: none;
			    font-size: 13px;
			    line-height: 30px;
			    background-image: linear-gradient(#ffffff, #f4f4f4);
			    -moz-background-clip: padding;
			    margin: 10px;
			    border: 1px solid #dddddd;
			    border-radius: 4px;	
			    color: #5a5a5a;
			    text-align: center
</style>