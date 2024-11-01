import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ApiGatewayManagementApi } from 'aws-sdk';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import connectDB from '../config/database';

const ConnectionSchema = new mongoose.Schema({
  connectionId: { type: String, required: true, unique: true },
  connectedAt: { type: Date, default: Date.now },
});

const Connection = mongoose.model('Connection', ConnectionSchema);

// Crear cliente de API Gateway para enviar mensajes a través de WebSocket
const apiGateway = new ApiGatewayManagementApi({
    endpoint: "https://gt2ls5ue6i.execute-api.us-east-1.amazonaws.com/dev", // Cambiar a https
  });  

/**
 * Handler para enviar tokens de acceso a todos los usuarios conectados.
 * Este handler se activa con el evento WebSocket `refresh`.
 */
export const refreshHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Conectar a MongoDB
    await connectDB();

    // Obtener todos los connectionIds activos
    const connections = await Connection.find({});
    console.log('Active connections:', connections.length);

    // Generar un nuevo token de acceso
    const accessToken = jwt.sign({ message: 'New Access Token' }, process.env.JWT_SECRET || 'mi_secreto', {
      expiresIn: '15m',
    });

    // Enviar el token a cada conexión activa
    const sendPromises = connections.map(async (connection) => {
      try {
        await apiGateway
          .postToConnection({
            ConnectionId: connection.connectionId,
            Data: JSON.stringify({ accessToken }),
          })
          .promise();
        console.log(`Token sent to connection ${connection.connectionId}`);
      } catch (err) {
        console.error(`Error sending message to ${connection.connectionId}:`, err);
      }
    });

    await Promise.all(sendPromises);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Tokens sent successfully',
        connections: connections.length,
      }),
    };
  } catch (error) {
    console.error('Error sending tokens:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to send tokens',
      }),
    };
  }
};
