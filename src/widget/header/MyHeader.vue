<template>
	<header class="header">
		<div class="container">
			<h1 class="title"># movienow</h1>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@import "@/shared/scss/styles.scss";

.header {
	width: 100%;
	background-color: $header-bg-color;

	.container {
		width: 1920px;
		height: 100px;
		padding-top: 36px;
		padding-bottom: 16px;
	}

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
