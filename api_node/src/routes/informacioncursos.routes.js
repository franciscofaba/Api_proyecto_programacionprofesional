import { Router } from 'express'
import {getInformacioncursos,getInformacioncursosbyid,getinformaciongradobyid} from '../controller/informacioncursos.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/informacioncursos',validateToken, getInformacioncursos)

router.get('/informacioncursos/:idUser_fk',validateToken, getInformacioncursosbyid)

router.get('/informaciongrados/:idCarrer_fk',validateToken, getinformaciongradobyid)



export default router