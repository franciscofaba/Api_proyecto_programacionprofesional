import { Router } from 'express';
import multer from 'multer';
import { uploadPDF, downloadPDF, getDocumentsWithUserInfo  } from '../controller/pdf.controller.js';
import { validateToken } from '../controller/settings/keys.js'
const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/pdf/upload',validateToken, upload.single('archivoPDF'), uploadPDF);

router.get('/pdf/download/:id',validateToken, downloadPDF);
router.get('/pdf/All',validateToken, getDocumentsWithUserInfo);

export default router;