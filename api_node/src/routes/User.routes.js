import { Router } from 'express'

import {getUser,getUserById,createUser,updateUser,deleteUserById} from '../controller/User.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/User',validateToken, getUser)

router.get('/User/:idUser',validateToken, getUserById)

router.post('/User', createUser)

router.patch('/User/:idUser',validateToken, updateUser)

router.delete('/User/:idUser',validateToken, deleteUserById)

export default router