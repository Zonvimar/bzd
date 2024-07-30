import {sendEmail} from "@/utils/mail.utils";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    const fd = await request.formData()
    const subject = 'Заказ обратного звонка'
    const email = 'info@bzdgroup.ru'
    const html =
        `<p>Клиент запросил обратный звонок</p>
            <p>Имя клиента: ${fd.get('name')}</p>
            <p>Телефон клиента: <a href="tel:${fd.get('phone')}">${fd.get('phone')}</a></p>`
    try {
        const result = await sendEmail(email, subject, html)
        return Response.json({
            is_send: true
        })
    } catch (e) {
        return Response.json({is_send: false}, {status: 500})
    }
}