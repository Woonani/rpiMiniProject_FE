<template>
	<div class="photoBox">
		박스박스박스박스박스박스박스박스박스박스박스박스박스박스박스
		<!-- <div v-for="photo in computedPhotos" :key="photo.index"> -->
		<!-- <div :class="student.genderImg">
              <div class="nameBox">
                <span text style="font-size: 1.5em">{{ student.stuName }}</span>
                <span>{{ student.attendTime }}</span>
                <v-btn v-if="student.attendTime == '출석전'" text class="hove" @click="displayDate(student)"
                  >출석하기</v-btn
                >
                <v-btn v-else text class="hove2" @click="crossCheckDelete(student)">출석 취소하기</v-btn>
              </div> 
            </div>-->
		<!-- </div> -->
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data: () => ({
		photos: [],
		userid: '',
		//전체사진가져오기
	}),
	mounted() {
		this.getPhotos()
	},
	methods: {
		async getPhotos() {
			const userid = this.$store.getters.User.id

			await axios

				.get(
					process.env.VUE_APP_API + `/profile/read/${userid}`,
					// { lessonDate: this.today },
				)
				.then(async response => {
					console.log(response.data.keys)
					// this.students = response.data.data

					// let arr2 = []

					// const now = new Date()
					// let years = now.getFullYear()
					// let months = now.getMonth() + 1
					// let dates = now.getDate()
					// this.today = `${years}/${months}/${dates}`
					// // console.log('오늘 날짜 :', this.today)
					// for (let i = 0; i < this.students.length; i++) {
					//     if (this.students[i].lessonDate.split('/')[2] == this.today.split('/')[2]) {
					//     arr2.push(this.students[i])
					//     }
					// }
					// console.log('arr2=checkTimes 중복제거 후 오늘 날자 학생들만 filter:', arr2)

					// this.checkTimes = arr2
				})
				.catch(error => {
					console.log('학생 정보 조회 error : ', error)
				})
		},
	},

	//     computed: {
	//     //데이타에 students를 필터해서 student라는 배열을 새로 만들어줌 [checkTimes배열중 this.time번째랑 같으면]
	//     computedPhotos() {
	//       // // console.log('클릭한 인덱스', this.vmodelTime)
	//       // // console.log('this.checkTime에 값 잘 들어왔는지?', this.checkTimes)
	//       return this.checkTimes.filter(student => {
	//         student.genderImg = student.Student.stuGender === '남' ? 'maleImgDiv' : 'femaleImgDiv'
	//         // // return student.lessonDate.split('/')[3].split(':')[0] == this.vmodelTime + 14
	//       })
	//     }
	//   },
}
</script>

<style>
.checkBox {
	display: flex;
	justify-content: flex-start;
	align-content: flex-start;
	width: 100%;
	height: 65%;
	display: grid;
	grid-template-columns: 20% 20% 20% 20% 20%;
	grid-template-rows: 50% 50%;
	overflow: auto;
	font-family: 'Noto Serif', serif;
	background-color: aliceblue;
}
</style>
