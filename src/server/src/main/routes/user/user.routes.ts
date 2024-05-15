import { authenticateUserFactory } from '@/factories/user/authenticate-user'
import { registerUserFactory } from '@/factories/user/register-user'
import { routeAdapter } from '@/main/adapters/route-adapter'
import { IHttpRequest } from '@/main/protocols/http'
import { ensureAuthenticateUser } from '@/middlewares/ensure-authenticate-user'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.post('/register', routeAdapter(registerUserFactory()))
userRoutes.post('/login', routeAdapter(authenticateUserFactory()))
userRoutes.get('/', ensureAuthenticateUser, (req: IHttpRequest, res) => {
  return res.status(200).send(req.user)
})

export { userRoutes }
