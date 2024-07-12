import React, { useState } from 'react';
import { Tab, Tabs, Card, Table } from 'react-bootstrap';
import axiosInstance from '../jwtAxios'; // Importa la configuración de Axios

const Tablesdisplay = () => {
    const [key, setKey] = useState(''); // Inicia con el tab vacío
    const [data, setData] = useState(null); // Variable de estado para almacenar los datos recibidos

    const fetchData = async (url) => {
        try {
            const response = await axiosInstance.get(url);
            const jsonData = response.data;
            console.log('Datos recibidos:', jsonData);
            setData(jsonData); // Actualiza la variable de estado con los datos recibidos
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            setData(null); // En caso de error, limpia los datos previos
        }
    };

    const queryTable = (parametro) => {
        if (parametro === 'Users') {
            console.log('Cargando datos para el tab Users');
            fetchData('http://localhost:5000/api/User');
        } else if (parametro === 'Login') {
            console.log('Preparando el tab Login');
            fetchData('http://localhost:5000/api/Login1');
        } else if (parametro === 'Courses') {
            console.log('Mostrando cursos disponibles en el tab Courses');
            fetchData('http://localhost:5000/api/CourseFromCareer');
        }
    };

    return (
        <>
            <Card.Title>Tablas </Card.Title>
            <Card.Text>
                Visualiza las diferentes tablas de la base de datos
            </Card.Text>
            <Card>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => {
                        setKey(k); // Cambia el tab activo
                        queryTable(k); // Ejecuta cualquier función adicional
                    }}
                    className="mb-3"
                >
                    <Tab eventKey="Users" title="Users">
                        <Card.Body>
                            <Card.Title>Tabla de usuarios en la base de datos</Card.Title>
                            {data && (
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                                <th key={index}>{key}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                {Object.values(item).map((value, index) => (
                                                    <td key={index}>{value}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="Login" title="Login">
                        <Card.Body>
                            <Card.Title>Tabla de login en la base de datos</Card.Title>
                            {data && (
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                                <th key={index}>{key}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                {Object.values(item).map((value, index) => (
                                                    <td key={index}>{value}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Card.Body>
                    </Tab>
                    <Tab eventKey="Courses" title="Courses">
                        <Card.Body>
                            <Card.Title>Tabla de cursos en la base de datos</Card.Title>
                            {data && (
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
                                                <th key={index}>{key}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                {Object.values(item).map((value, index) => (
                                                    <td key={index}>{value}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Card.Body>
                    </Tab>
                </Tabs>
            </Card>
        </>
    );
};

export default Tablesdisplay;