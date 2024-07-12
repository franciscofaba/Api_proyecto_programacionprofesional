import { Router } from 'express'
import {sendJustificacionEmail} from '../controller/EnviarEmail.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/enviarEmail/:idUser',validateToken, sendJustificacionEmail)

export default router