import { Router } from 'express'

import { postDashboardByEmail } from '../controller/Page.Controller.js';
import { validateToken } from '../controller/settings/keys.js'
const router = Router()
// Funciones de vista (asegúrate de definirlas o actualizar con tus funciones actuales)

router.post('/Dashboard/login',validateToken, postDashboardByEmail);
  

  




  
export default router

