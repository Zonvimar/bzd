import nodemailer from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
    host: 'HOST',
    port: 'PORT',
    secure: true,
    auth: {
        user: 'EMAIL',
        pass: 'PASS'
    }
} as SMTPTransport.Options);

// type SendEmailDto = {
//     sender: Mail.Address,
//     recipient: Mail.Address,
//     subject: string,
//     text: string
// }

export const sendEmail = async (email: string, subject: string, html: string) => {
    return await transport.sendMail({
        from: 'FROM',
        to: email,
        subject: subject,
        // text: text,
        html: html
    })
}
