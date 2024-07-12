import { Router } from 'express'
import {getCourse,getCourseByCareer} from '../controller/CourseFromCareer.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/CourseFromCareer',validateToken, getCourse)

router.get('/CourseFromCareer/:idCareer',validateToken, getCourseByCareer)





export default router