import { Router } from 'express'
import { validateToken } from '../controller/settings/keys.js'
import {pong} from '../controller/index.controller.js'

const router = Router()

router.get('/ping', pong );


export default router