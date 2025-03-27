<template>
	<div class="loading">
		<img src="../../assets/Loader.png" alt="loader-icon" />
	</div>
</template>

<script>
export default {
	name: "MyLoading",
};
</script>

<style lang="scss" scoped>
.loading {
	width: 1400px;
	display: flex;
	justify-content: center;
	margin-top: 150px;

    img{
        width: 136px;
        height: 136px;
        animation: loading 0.8s linear alternate infinite;
    }
}

@keyframes loading {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
	}
}
</style>
