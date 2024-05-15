import { useLoginModel } from "./model"
import { LoginView } from "./view"

export const LoginPage = () => {
    return <LoginView {...useLoginModel()}/>
}