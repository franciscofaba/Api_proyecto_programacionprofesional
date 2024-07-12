import React, { useEffect, useState } from "react";

import Cookies from 'js-cookie';
import { Container, Card } from 'react-bootstrap';
import TableDisplay from "./components/tableDisplay";
import Pagina from "../prueba";
import axiosInstance from '../jwtAxios';
function AttendanceStudent() {
    const [attendance, setAttendance] = useState([]);
    const [idUser, setIdUser] = useState(null);
    const [idCareer_fk, setIdCareer_fk] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        const userId = Cookies.get('userId');
        console.log(userId);  // Verificar valor
        
        if (userId) {
            setIdUser(userId);
        }
    }, []);

    useEffect(() => {
        if (idUser) {
            const fetchAttendance = async () => {
                try {
                    const response = await axiosInstance.get(`http://localhost:5000/api/attendance/student/all/${idUser}`);
                    console.log(response);
                    setAttendance(response.data);
                } catch (error) {
                    console.error("Error al llamar a la API:", error);
                }
            };
            fetchAttendance();
        }
    }, [idUser]);

    return (
        <>
            <Pagina>

                    
                        <Card bg="white" style={{padding:'10px', marginTop:'10px'}}>
                           
                                <TableDisplay attendance={attendance} />
                          
                        </Card>

            </Pagina>
        </>
    );
}

export default AttendanceStudent;
