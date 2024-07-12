import { Router } from 'express'
import { validateToken } from '../controller/settings/keys.js'
import {postPreguntas,getRespuesta} from '../controller/PreguntasyRespuestas.controller.js'
const router = Router()

router.get('/Respuesta/:pregunta',validateToken, getRespuesta)

router.post('/Pregunta',validateToken, postPreguntas)

export default router