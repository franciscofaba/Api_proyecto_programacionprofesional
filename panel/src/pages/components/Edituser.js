import React, { useEffect, useState } from 'react';
import { Form, Accordion, Button, Col, Row } from 'react-bootstrap';
import axiosInstance from '../jwtAxios'; // Importa la configuración de Axios

const EditUser = () => {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    const fetchData = async (url) => {
        try {
            const response = await axiosInstance.get(url);
            const jsonData = response.data;
            console.log('Datos recibidos:', jsonData);
            setData(jsonData); // Asumiendo que la respuesta JSON es un array de usuarios
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            setData([]); // En caso de error, limpia los datos previos
        }
    };
   
    useEffect(() => {
        fetchData('http://localhost:5000/api/User');
    }, []);

    const handleSelectChange = (event) => {
        const userId = event.target.value;
        const user = data.find(u => u.idUser.toString() === userId);
        setSelectedUser(user || {});
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        if (!selectedUser.idUser) {
            console.error('No se ha seleccionado ningún usuario.');
            return;
        }
        const url = `http://localhost:5000/api/user/${selectedUser.idUser}`;
        try {
            const response = await axiosInstance.patch(url);
            if (response.status === 200) {
                console.log('Usuario actualizado con éxito');
            } else {
                throw new Error('Algo salió mal al actualizar el usuario');
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <>
            <Form>
                <h3 style={{margin:'10px'}}>Modificar usuario</h3>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label style={{margin:'10px'}}>Seleccione un usuario</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
                        <option>Seleccione un usuario</option>
                        {data.map((user, index) => (
                            <option key={index} value={user.idUser}>{user.email}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>

            <Accordion style={{ padding: '10px' }}>
                <Accordion.Item defaultActiveKey="1">
                    
                    <Accordion.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formUserName">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control name="UserName" type="text" value={selectedUser.UserName || ''} placeholder="Enter user name" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" value={selectedUser.email || ''} placeholder="Enter email" onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control name="role" type="text" value={selectedUser.role || ''} placeholder="Enter role" onChange={handleChange} />
                               
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCareer">
                                    <Form.Label>Career</Form.Label>
                                    <Form.Control name="idCareer_fk" type="text" value={selectedUser.idCareer_fk || ''} placeholder="Enter career" onChange={handleChange} />
                               
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default EditUser;