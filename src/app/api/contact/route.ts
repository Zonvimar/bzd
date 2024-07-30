import {sendEmail} from "@/utils/mail.utils";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request) {
    const fd = await request.formData()
    const subject = 'Вопрос от клиента'
    const email = 'info@bzdgroup.ru'
    const html =
        `<p>Клиент оставил сови контактные данные и свой вопрос </p>
            <p>Имя: ${fd.get('name')}</p>
            <p>Телефон: <a href="tel:${fd.get('phone')}">${fd.get('phone')}</a></p>
            <p>Электронная почта: <a href="mailto:${fd.get('email')}">${fd.get('email')}</a></p>
            <p>Вопрос: ${fd.get('question')}</p>
`
    try {
        const result = await sendEmail(email, subject, html)
        return Response.json({
            is_send: true
        })
    } catch (e) {
        return Response.json({is_send: false}, {status: 500})
    }
}