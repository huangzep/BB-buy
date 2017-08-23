<template>
	<div class="category">
        <div class="briefin">
            <ul>
            	<li class="item" v-for="(item, index) in titles">
            		<h2 @click="_getCategorys(item['titleId'])">
            			{{item.title}}
            		</h2>
            		<ul class="sub-items" v-show="item.titleId === titleId">
            			<router-link tag="li" to="/product" @click.native="setCategoryId(item.titleId)" class="sub-item" v-for="cat in categorys"
            			>{{cat.category}}</router-link>
            		</ul>
            	</li>
            </ul>
        </div>
	</div>
</template>

<script>
	import {getCategorys, getTitles} from 'api/index'
	import {mapMutations} from 'vuex'

	export default {
		data() {
			return {
				categorys: [],
				titles: [],
				titleId: -1
			}
		},
		created() {
			this._getTitles()
		},
		methods: {
			_getCategorys(id) {
				if (this.titleId == id) {
					this.titleId = -1
					return 
				}
				getCategorys(id).then((res) => {
					this.categorys = res.result
					this.titleId = res.result[0].titleId
				})
			},
			_getTitles() {
				getTitles().then((res) => {
					this.titles = res.result
				})
			},
			...mapMutations({
				setCategoryId: 'SET_CATEGORYID'
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.category
		background: #fff
		.briefin
			background: #ebebeb
			.item
				h2 
					height: 40px;
					    background: url(http://www.zuyushop.com/wap/images/arrow1.gif) right center no-repeat;
					    line-height: 40px;
					    color: #000;
					    font-size: 16px;
					    display: block;
					    padding-left: 16px;
					    border-bottom: 1px solid #ccc;
					    font-weight: bold;
				.sub-items
					display: flex
					flex-wrap: wrap
					background: #f9f9f9
					width: 100%
					.sub-item
						width: 33.33%
						line-height: 40px
						text-align: center
						color: #333
						box-sizing: border-box
						border-right: 1px solid #ccc
						border-bottom: 1px solid #ccc
</style>

