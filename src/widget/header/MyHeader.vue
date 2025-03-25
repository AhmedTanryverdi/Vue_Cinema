<template>
	<header class="header">
		<h1 class="title"># movienow</h1>
	</header>
</template>

<style lang="scss" scoped>
@import "@/shared/scss/styles.scss";

.header {
	width: 1920px;
	height: 100px;
	background-color: $header-bg-color;
	padding-top: 36px;
	padding-bottom: 16px;

	.title {
		height: 48px;
		@include flex-center;
		@include font(700, 48px, 48px, 21%);
        text-align: center;
        text-transform: uppercase;
        color: $header-txt-color;
	}
}
</style>
