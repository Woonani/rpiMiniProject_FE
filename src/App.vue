<template>
	<v-app>
		<v-main class="mainBackground">
			<router-view></router-view>
			참참참
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	// data: () => ({}),
}
</script>

<style>
.mainBackground {
	background: url('assets/images/main3.png');
	background-size: 70%;
	background-color: black;
}
</style>
