<template>
	<v-container fluid class="fill-height #C5E1A">
		<v-row>
			<v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto">
				<img
					class="logoimg"
					src="../../assets/images/cham2.png"
					alt="logoimage"
				/>
				<br />
				<v-card class="pa-10">
					<v-card-title>로그인하고 사진과 랭킹 조회하세요!</v-card-title>
					<v-card-subtitle>로그인</v-card-subtitle>
					<v-card-text>
						<ValidationObserver
							ref="signInForm"
							v-slot="{ handleSubmit, invalid, validate }"
						>
							<form @submit.prevent="handleSubmit(signIn)">
								<ValidationProvider
									v-slot="{ errors }"
									name="이메일"
									rules="required|email"
								>
									<v-text-field
										v-model="email"
										outlined
										type="email"
										label="이메일"
										placeholder="example@uvc.co.kr"
										color="#aed581"
										:error-messages="errors"
									></v-text-field>
									<!-- <span class="errorText">{{ errors[0] }}</span> -->
								</ValidationProvider>
								<ValidationProvider
									v-slot="{ errors }"
									name="비밀번호"
									rules="required"
								>
									<v-text-field
										v-model="password"
										outlined
										type="password"
										label="비밀번호"
										placeholder="비밀번호"
										color="#aed581"
										:error-messages="errors"
									></v-text-field>
								</ValidationProvider>
								<span class="err">{{ errorMessage }}</span>
								<div class="d-flex justify-space-between">
									<v-btn text color="primary" class="pl-0" router to="signup"
										>계정 만들기</v-btn
									>
									<v-btn
										depressed
										color="primary"
										class="blue"
										type="submit"
										:disabled="invalid || !validate"
										>로그인</v-btn
									>
								</div>
							</form>
						</ValidationObserver>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import axios from 'axios'

import Validate from '@/mixins/Validate.vue'

export default {
	name: 'SignIn',
	mixins: [Validate],

	data: () => ({
		email: '',
		password: '',
		loading: false,
		errorMessage: '',
	}),

	methods: {
		//로그인
		async signIn() {
			if (this.loading) {
				return (this.loading = true)
			}

			const axiosBody = {
				userid: this.email,
				password: this.password,
			}
			// console.log('/index/login - axiosBody : ', axiosBody)

			await axios
				.post(process.env.VUE_APP_URL + '/login', axiosBody)

				.then(async response => {
					console.log('로그인 - response : ', response)
					console.log('로그인 - response.statusText : ', response.statusText)
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
</style>
