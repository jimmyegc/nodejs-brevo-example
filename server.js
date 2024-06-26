import brevo from "@getbrevo/brevo";
import { config } from "dotenv";
import { templateWelcome } from "./templateWelcome.js";

config();

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);
// console.log(process.env.BREVO_API_KEY);

const sendSmtpEmail = new brevo.SendSmtpEmail();

sendSmtpEmail.subject = "Hola";
sendSmtpEmail.to = [{ email: "jimmyegc@gmail.com", name: "Jimborroso" }];
sendSmtpEmail.htmlContent = templateWelcome();

sendSmtpEmail.sender = {
  name: "menikmati",
  email: "no-reply@jimmygarcia.com",
};

const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
console.log(result);
