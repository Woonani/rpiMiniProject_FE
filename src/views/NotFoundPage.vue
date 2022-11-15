<template>
	<v-container fluid class="subBackground">
		<v-row>
			<v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto">
				<img
					class="logoimg"
					src="../assets/images/pageNotFound.png"
					alt="logoimage"
				/>
				<br />
				<v-card>
					<v-card-title>페이지가 없습니다</v-card-title>
					<v-card-text>
						<v-btn text color="primary" class="pl-0" @click="goSignIn"
							>돌아가기</v-btn
						>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import Validate from '@/mixins/Validate.vue'

export default {
	name: 'NotFound',
	mixins: [Validate],
	data() {
		return {
			email: '',
			password: '',
			loading: false,
			errorMessage: '',
		}
	},
	methods: {
		goSignIn() {
			this.$router.push('/signin')
		},
	},
}
</script>

<style>
.logoimg {
	align-items: center;
	display: flex;
	justify-content: center;
	width: 70%;
	height: 100%;
	padding: 15px 20px;
	margin: 5px auto;
}

.err {
	color: red;
}
.subBackground {
	background: url('../assets/images/pageNotFound.png');
	background-size: 70%;
	background-color: black;
}
</style>
