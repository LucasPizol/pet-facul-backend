import { addCustomerFactory } from '@/factories/customer/add-customer'
import { loadCustomerFactory } from '@/factories/customer/load-customer'
import { loadCustomerByDocumentFactory } from '@/factories/customer/load-customer-by-document'
import { routeAdapter } from '@/main/adapters/route-adapter'
import { ensureAuthenticateUser } from '@/middlewares/ensure-authenticate-user'
import { Router } from 'express'

const customerRoutes = Router()

customerRoutes.post('/', ensureAuthenticateUser, routeAdapter(addCustomerFactory()))

customerRoutes.get(
  '/:document',
  ensureAuthenticateUser,
  routeAdapter(loadCustomerByDocumentFactory())
)

customerRoutes.get('/', ensureAuthenticateUser, routeAdapter(loadCustomerFactory()))

export { customerRoutes }
