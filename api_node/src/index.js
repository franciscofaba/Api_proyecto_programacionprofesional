import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mysql from 'mysql2/promise';
import indexRoutes from './routes/index.routes.js';
import UserRoutes from './routes/User.routes.js';
import loginRoutes from './routes/login.routes.js';
import CourseFromCareerRoutes from './routes/CourseFromCareer.routes.js';
import careerRoutes from './routes/career.routes.js';
import CourseInProgressRoutes from './routes/CourseInProgress.routes.js';
import attendanceRoutes from './routes/attendance.routes.js';
import regulationRoutes from './routes/regulation.routes.js';
import informacioncursos from './routes/informacioncursos.routes.js';
import pageroute from './routes/Page.routes.js';
import Encuesta from './routes/Encuesta.routes.js';
import chatRoutes from './routes/chatbot.routes.js';
import pdfroutes from './routes/pdf.routes.js';
import PreguntasyRespuestas from './routes/PreguntasyRespuestas.routes.js';
import EnviarEmail from './routes/EnviarEmail.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// Configurar la conexión a la base de datos
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};

async function connectToDatabase() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Conectado a la base de datos MySQL');
        return connection;
    } catch (error) {
        console.error('Error conectando a la base de datos:', error);
        throw error;
    }
}

app.locals.db = connectToDatabase();

// Servir archivos estáticos de la aplicación React (client)
app.use('/client', express.static(join(__dirname, '../client/build')));

// Servir archivos estáticos de la aplicación React (panel)
app.use('/panel', express.static(join(__dirname, '../panel/build')));

console.log('Serving client from:', join(__dirname, '../client/build'));
console.log('Serving panel from:', join(__dirname, '../panel/build'));

// API routes
app.use('/api', indexRoutes);
app.use('/api', UserRoutes);
app.use('/api', loginRoutes);
app.use('/api', CourseFromCareerRoutes);
app.use('/api', careerRoutes);
app.use('/api', CourseInProgressRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', regulationRoutes);
app.use('/api', informacioncursos);
app.use('/api', Encuesta);
app.use('/api', chatRoutes);
app.use('/api', pageroute);
app.use('/api', pdfroutes);
app.use('/api', PreguntasyRespuestas);
app.use('/api', EnviarEmail);

// Manejar todas las demás rutas y servir el index.html de React (client)
app.get('/client/*', (req, res) => {
    console.log('Serving client index.html');
    res.sendFile(join(__dirname, '../client/build', 'index.html'));
});

// Manejar todas las demás rutas y servir el index.html de React (panel)
app.get('/panel/*', (req, res) => {
    console.log('Serving panel index.html');
    res.sendFile(join(__dirname, '../panel/build', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;

