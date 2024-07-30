import nodemailer from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
    host: 'mail.nic.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'zakaz@bzdgroup.ru',
        pass: 'R9T2q4a4N7B89MbFb6j8'
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
        from: 'zakaz@bzdgroup.ru',
        to: email,
        subject: subject,
        // text: text,
        html: html
    })
}


