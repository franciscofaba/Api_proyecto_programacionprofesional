import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 5000;
export const DB_USER = process.env.DB_USER || 'vgioujucjn';
export const DB_HOST = process.env.DB_HOST || 'eppapigproyectcrm-server.mysql.database.azure.com';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_PASSWORD = process.env.DB_PASSWORD || 'OEelf$e9GeNPuTBA';
export const DB_DATABASE = process.env.DB_DATABASE || 'peppapigproyectcrm-database';
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'My API Key';
export const ASSISTANT_ID = process.env.ASSISTANT_ID;
export const HOST = process.env.HOST;
