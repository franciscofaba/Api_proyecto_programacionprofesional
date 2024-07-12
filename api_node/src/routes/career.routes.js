import { Router } from 'express'
import {getCareer,getCareerById} from '../controller/career.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/career',validateToken, getCareer)

router.get('/career/:idCareer',validateToken, getCareerById)





export default router