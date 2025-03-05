import axios from "axios"

const clientLogin = axios.create ({
    baseURL: "https://67c5af6f351c081993fb02a8.mockapi.io/banimode"
})

export async function login(userName , password) {
    const {data} = await clientLogin({
        method: "POST",
        url:"/login",
        data:{userName , password}
    })

    return data
}