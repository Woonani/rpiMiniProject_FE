// import router from ('../router')

export const GetToken = token => {
	console.log(token)
	return token
}

const { token } = localStorage
if (token) GetToken(token)
