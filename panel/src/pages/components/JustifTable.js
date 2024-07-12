import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Card, Table } from 'react-bootstrap';
import axiosInstance from '../jwtAxios'; // Importa la configuración de Axios

const JustifTable = () => {
    const [key, setKey] = useState('Users'); // Inicia con el tab 'Users' activo
    const [data, setData] = useState(null); // Variable de estado para almacenar los datos recibidos

    useEffect(() => {
        // Llama a la API cuando el componente se monte
        axiosInstance.get('http://localhost:5000/api/pdf/All')
            .then(response => {
                const formattedData = response.data.map(item => ({
                    ...item,
                    archivoPDF: URL.createObjectURL(new Blob([item.archivoPDF], { type: 'application/pdf' }))
                }));
                setData(formattedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez

    return (
        <>
            
            <Card.Text>
                Haz click para visualizar y descargar los PDF con las justificaciones.
            </Card.Text>
            <Card>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => {
                        setKey(k); // Cambia el tab activo
                    }}
                    className="mb-3"
                >
                    <Tab eventKey="Users" title="Ver Justificaciones">
                        <Card.Body>
                            <Card.Title>Tabla de Justificaciones en la Base de Datos</Card.Title>
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
                                                {Object.entries(item).map(([key, value], index) => (
                                                    <td key={index}>
                                                        {key === 'archivoPDF' ? (
                                                            <a href={value} download={`documento_${item.id}.pdf`}>Descargar</a>
                                                        ) : (
                                                            value
                                                        )}
                                                    </td>
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

export default JustifTable;