import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Seguridad básica
app.use(helmet());

// CORS: permitir solo origen configurado (si no, bloquear por defecto)
const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:3000";
app.use(
  cors({
    origin: allowedOrigin,
  })
);

// Rate limiter para evitar abuso
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);

app.use(express.json());

// Health
app.get("/api/health", (req, res) => res.json({ ok: true }));

// Endpoint de contacto
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // If SMTP configured, try send email, otherwise just log and return success
  const smtpHost = process.env.SMTP_HOST;

  if (smtpHost) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
      });

      const mailOptions = {
        from: process.env.FROM_EMAIL || email,
        to: process.env.TO_EMAIL || process.env.FROM_EMAIL,
        subject: `Contacto desde portfolio: ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${
          phone || "-"
        }\n\nMensaje:\n${message}`,
      };

      await transporter.sendMail(mailOptions);
      return res.json({ ok: true });
    } catch (err) {
      console.error("Mail error:", err);
      return res.status(500).json({ error: "Error sending mail" });
    }
  }

  // Sin SMTP configurado: log y responder éxito para desarrollo
  console.log("Contact received (no SMTP configured):", {
    name,
    email,
    phone,
    message,
  });
  return res.json({
    ok: true,
    note: "No SMTP configured; message logged on server.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
