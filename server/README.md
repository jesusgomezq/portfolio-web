# Backend - Portfolio

Backend seguro construido con Express.js para manejo de formularios de contacto con protección CORS, rate limiting y soporte opcional para SMTP.

## Instalación

```bash
cd server
npm install
```

## Configuración

Copia `.env.example` a `.env` y configura las variables según tu entorno:

```bash
cp .env.example .env
```

### Variables de entorno

```env
PORT=4000
ALLOWED_ORIGIN=http://localhost:3001

# Opcional: para envío real de correos (SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_email@example.com
SMTP_PASS=tu_contraseña
FROM_EMAIL=tu_email@example.com
TO_EMAIL=destino@example.com
```

**Nota:** Si SMTP no está configurado, los mensajes se loguean en consola (útil para desarrollo).

## Desarrollo

```bash
npm run dev
```

El servidor se ejecuta en `http://localhost:4000` y observa cambios automáticamente (nodemon).

## Producción

```bash
npm start
```

## Endpoints

### POST `/api/contact`

Recibe y procesa mensajes de contacto.

**Request:**

```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+541234567890",
  "message": "Me interesa tu trabajo..."
}
```

**Response (success):**

```json
{
  "ok": true,
  "note": "No SMTP configured; message logged on server." // Si SMTP no está configurado
}
```

**Response (error):**

```json
{
  "error": "Missing required fields"
}
```

## Seguridad

- **Helmet:** protección de headers HTTP
- **CORS:** limitado al origen configurado (previene ataques CSRF)
- **Rate Limiting:** máx 10 solicitudes por minuto por IP
- **Validación:** campos requeridos verificados en el servidor

## Integración con Frontend

El frontend en `../src/components/Contact/ContactRight.jsx` puede usar este backend si se configura:

```bash
VITE_USE_BACKEND=true npm run dev
```

Si `VITE_USE_BACKEND` no está configurado, el frontend usa FormSubmit.co como fallback.

## Proxy en Vite

El `vite.config.js` en la raíz incluye un proxy que redirige `/api/*` → `http://localhost:4000` durante desarrollo.
