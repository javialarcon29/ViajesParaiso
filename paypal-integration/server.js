const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

// Configura tus credenciales de PayPal (Sandbox)
const PAYPAL_CLIENT_ID = 'ASlcDyk-TCA5UuXLiD32ICnPrxMmH1XA-jUwaizc1h1lRA9TQPgBv5p9MFqfrXhus98VyiqZdUne8I5P';  // Reemplaza con tu Client ID de PayPal
const PAYPAL_CLIENT_SECRET = 'EDX-coNizZozQqsXtg2vFzMSTIKb0mfXXkrmLxIRz0lXD12XnTrQpuM2gQ5dTJlpjQ36DRhXi2TDw8sJ';  // Reemplaza con tu Secret de PayPal

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta principal para crear una orden
app.post('/create-order', async (req, res) => {
  try {
    // 1. Obtener el access token desde PayPal
    const auth = await axios({
      url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64')}`
      },
      data: 'grant_type=client_credentials'
    });

    const accessToken = auth.data.access_token;

    // 2. Crear la orden de pago
    const order = await axios({
      url: 'https://api.sandbox.paypal.com/v2/checkout/orders',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      data: {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: '1800.00'  // El monto de la transacción
          }
        }]
      }
    });

    // Devolver el ID de la orden y la URL de aprobación al frontend
    res.json({
      orderID: order.data.id,
      approvalUrl: order.data.links.find(link => link.rel === 'approve').href
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la orden');
  }
});

// Ruta para capturar el pago
app.post('/capture-order', async (req, res) => {
  const { orderID } = req.body;

  try {
    // 1. Obtener el access token
    const auth = await axios({
      url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64')}`
      },
      data: 'grant_type=client_credentials'
    });

    const accessToken = auth.data.access_token;

    // 2. Capturar el pago
    const capture = await axios({
      url: `https://api.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // Devolver los detalles de la transacción
    res.json({
      captureID: capture.data.purchase_units[0].payments.captures[0].id,
      status: capture.data.status
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al capturar el pago');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
