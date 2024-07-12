import { Router } from 'express'
import {getAttendance, CreateAttendanceByProfessor, UpdateAttendanceByStudent, getAttendanceByDate, getallAttendanceprofessor, getallAttendanceStudent,getAttendanceCountByDate,postAttendanceCount,getFaceCount} from '../controller/attendance.controller.js'
import { validateToken } from '../controller/settings/keys.js'
const router = Router()

router.get('/attendance',validateToken, getAttendance)

router.get('/attendanceByDate/:idCourseFromCareer_fk/:date',validateToken, getAttendanceByDate)

router.post('/attendance/professor/:idUser',validateToken, CreateAttendanceByProfessor)

router.patch('/attendance/student',validateToken, UpdateAttendanceByStudent)

router.get('/attendance/professor/all/:idUser',validateToken, getallAttendanceprofessor)

router.get('/attendance/student/all/:idUser',validateToken, getallAttendanceStudent)

router.get('/attendance/count/:idCourseFromCareer_fk/:date',validateToken, getAttendanceCountByDate)

router.post('/attendance/facecount',validateToken, postAttendanceCount)

router.get('/attendance/Countface/:date/:idCourseFromCareer_fk',validateToken, getFaceCount)
export default router