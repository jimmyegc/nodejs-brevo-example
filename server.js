import brevo from "@getbrevo/brevo";
import { config } from "dotenv";
<<<<<<< HEAD
import { templateWelcome } from "./templateWelcome.js";
=======
import { templateWelcome } from './templateWelcome.js'
>>>>>>> e4f2a875954e9567257080978b0ac2d13578d447

config();

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);
// console.log(process.env.BREVO_API_KEY);

const sendSmtpEmail = new brevo.SendSmtpEmail();

sendSmtpEmail.subject = "Hola";
<<<<<<< HEAD
sendSmtpEmail.to = [{ email: "jimmyegc@gmail.com", name: "Jimborroso" }];
sendSmtpEmail.htmlContent = templateWelcome();
=======
sendSmtpEmail.to = [{ email: "jimmyegc@gmail.com", name: "Jim" }];
sendSmtpEmail.htmlContent = templateWelcome
>>>>>>> e4f2a875954e9567257080978b0ac2d13578d447

sendSmtpEmail.sender = {
  name: "menikmati",
  email: "no-reply@jimmygarcia.com",
};

const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
console.log(result);
