import { Router } from 'express'
import {getCourseInProgress,getCourseInProgressbyState,UpdateinterState} from '../controller/CourseInProgress.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/CourseInProgress',validateToken, getCourseInProgress)
router.get('/CourseInProgress/:idUser',validateToken, getCourseInProgressbyState)
router.patch('/CourseInProgress/state/',validateToken, UpdateinterState)



export default router

