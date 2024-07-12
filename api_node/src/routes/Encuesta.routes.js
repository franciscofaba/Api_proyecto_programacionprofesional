import { Router } from 'express'
import {updateEncuestaEstado} from '../controller/Encuesta.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.put('/Encuesta/:idUser_fk/:idCourseInProgress_fk',validateToken,updateEncuestaEstado )




export default router