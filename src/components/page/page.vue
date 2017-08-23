<template>
	<div class="page">
		<div class="prev">上一页</div>
		<div class="choose">
			<select>
				<option v-for="i in pageArr" :checked="pageid === i">{{i}}</option>
			</select>
		</div>
		<div class="next">下一页</div>
	</div>
</template>

<script>

	export default {
		props: {
			pageid: {
				type: Number,
				default: 1
			},
			pageNum: {
				type: Number,
				default: 10
			}
		},
		data() {
			return {
				pageArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.page
		display: flex
		justify-content: space-around
		.prev
			box-sizing: border-box
			background-color: #d4d4d4
			box-shadow: 0 0 1px #666
			border-radius: 5px
			line-height: 32px
			width: 82px
			text-align: center
		.choose
			border: 1px solid #bababa
			height: 32px
			width: 130px
			select
				width: 100%
				height: 100%
				text-align: center
				font-size: 16px
		.next
			box-sizing: border-box
			background-color: #d4d4d4
			box-shadow: 0 0 1px #666
			border-radius: 5px
			line-height: 32px
			width: 82px
			text-align: center
</style>

