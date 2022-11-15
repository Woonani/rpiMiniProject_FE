<template>
	<!-- <div id="Home">
		<span class="A">왜 아무것두 안보이디?</span>
	</div> -->
	<v-container id="Home" fluid class="authContainer">
		<!-- <v-container id="Home" fluid class="fill-height white"> -->
		<!-- <v-row> -->
		<!-- <v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto"> -->
		<v-card outlined class="inputStyle">
			<v-card-title>메 뉴</v-card-title>

			<v-card-text>
				오지민오지민오지민오지민오지민오지민오지민오지민오지민오민오지민오지민오지민오지민오지민오지민오지민오지민오지민오지민
			</v-card-text>
			<v-divider></v-divider>
			<v-divider></v-divider>
			<v-card-text>
				<v-btn text color="primary" class="linkText" @click="goCode"
					>코드입력</v-btn
				>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-text>
				<v-btn text color="primary" class="linkText" @click="goPhoto"
					>사진보기</v-btn
				>
			</v-card-text>
			<v-card-text>
				<v-btn text color="primary" class="linkText" @click="goRanking"
					>랭킹보기</v-btn
				>
			</v-card-text>
			<v-card-text>
				<v-btn text color="primary" class="linkText" @click="logout"
					>로그아웃</v-btn
				>
			</v-card-text>
		</v-card>
		<!-- </v-col> -->
		<!-- </v-row> -->
	</v-container>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Home',

	methods: {
		goCode() {
			this.$router.push('/codeinput')
		},
		goRanking() {
			this.$router.push('/ranking')
		},
		goPhoto() {
			this.$router.push('/photoalbum')
		},
		async logout() {
			await axios
				.get(process.env.VUE_APP_API + '/logout')
				.then(async response => {
					console.log('로그아웃 - response : ', response)
					console.log('로그아웃 - response.statusText : ', response.statusText)
					if (response.statusText == 'OK') {
						this.$router.push('/')
					}
				})
				.catch(error => {
					console.log('login - error : ', error)

					// 에러문구 표시
					this.$refs.signInForm.setErrors({
						이메일: ['이메일을 확인해주세요.'],
						비밀번호: ['비밀번호를 확인해주세요.'],
					})
					this.errorMessage = '로그인 실패하였습니다.'

					this.loading = false
				})
		},
	},
}
</script>

<style>
.linkText {
	color: red;
	font-size: 20px;
}
.inputStyle {
	box-sizing: border-box;
	border: 3px solid rgb(227, 10, 10);
	border-radius: 5px;
	display: block;
	font-size: 16px;
	padding: 15px 20px;
	margin: 5px auto;
	width: 400px;
	height: 400px;
}
.authContainer {
	display: flex;
	align-items: center;
	height: 100%;
}

span.errorText {
	display: block;
	color: #f00;
	font-size: 12px;
	text-align: right;
	width: 100%;
}
</style>
