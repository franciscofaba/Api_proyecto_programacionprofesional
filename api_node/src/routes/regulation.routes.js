import { Router } from 'express'
import {getRegulation,getRegulationByidCourse} from '../controller/regulation.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/regulation',validateToken, getRegulation)

router.get('/regulation/:idCourse_fk',validateToken, getRegulationByidCourse)





export default router