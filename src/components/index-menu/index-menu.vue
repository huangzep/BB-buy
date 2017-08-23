<template>
	<div class="indexmenu">
		<div class="row_nav">
            <div class="row_nav_item" v-for="(menu, index) in menus"
            v-show="show(index)">
            	<router-link :to="{path: menu.titlehref.replace(/(\.html)|(\#)/g, '')}" tag="div" @click.native="clickMore(index)">
	                <div class="pic" v-html="menu.img.replace('images/','/static/image/')">
	                </div>
	                <div class="name">{{menu.name}}</div>
                </router-link>
            </div>
        </div>
	</div>
</template>

<script>
	import {getmenus} from 'api/index'

	export default {
		data() {
			return {
				menus: [],
				more: false
			}
		},
		created() {
			this._getmenus()
		},
		methods: {
			_getmenus() {
				getmenus().then((res) => {
					this.menus = res.result
				})
			},
			show(index) {
				if (this.more) {
					return true
				}
				return index <= 7 ? true : false
			},
			clickMore(index) {
				this.more = !this.more
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.indexmenu
		width: 100%
		.row_nav
			margin: 16px 0
			width: 100%
			&::after 
				content: ''
				display: block
				clear: both
				line-height: 0
			.row_nav_item
				width: 25%
				height: 86px
				text-align: center
				float: left
				display: flex
				flex-direction: column
				justify-content: space-around
				.pic
					height: 50px
					margin: auto
					img
						width: 50px
						height: 50px
				.name
					color: #5a5a5a
					margin-top: 3px
					font-size: 12px	
					line-height: 16px

</style>

