import brevo from "@getbrevo/brevo";
import { config } from "dotenv";

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
sendSmtpEmail.htmlContent = `
  <html>
    <body>
      <h1>Hello world from Brenvo and NodeJs</h1>
      <p>This is a test email</p>
      <button>Click me</button>
      <a href="https://www.google.com/">Go to Google</a>
    </body>
  </html>
`;

sendSmtpEmail.sender = {
  name: "menikmati",
  email: "no-reply@jimmygarcia.com",
};

const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
console.log(result);
