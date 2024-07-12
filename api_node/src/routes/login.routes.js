import { Router } from 'express'
import {getLogin,getLoginByEmail, postLoginByEmail} from '../controller/login.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/login1',validateToken, getLogin)

router.get('/login/:email',validateToken, getLoginByEmail)

router.post('/login', postLoginByEmail)




export default router