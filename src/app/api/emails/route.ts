import {sendEmail} from "@/utils/mail.utils";
import {NextRequest} from "next/server";

export async function POST(request: NextRequest) {
    const fd = await request.formData()
    const subject = fd.get('service') === 'turnKey' ? 'Заказ под ключ' : 'Заказ аренды'
    // const email = 'zonvimar@yandex.ru'
    const email = 'info@bzdgroup.ru'
    const html =
        `<p>Услуга: ${fd.get('service') === 'turnKey' ? 'Страховочный рельсовый пакет под ключ' : 'Страховочный рельсовый пакет в аренду'}</p>
            <p>Длина пакетов: ${fd.get('length')} метров</p>
            <p>Количество необходимых пакетов: ${fd.get('count')}</p>
            ${fd.get('service') === 'rent' ? '<p>Срок аренды: ' + fd.get('rent') + ' дней</p>' : ''}
            <p>Место установки: ${fd.get('place')}</p>
            <p>Имя заказчика: ${fd.get('name')}</p>
            <p>Телефон заказчика: <a href="tel:${fd.get('phone')}">${fd.get('phone')}</a></p>`
    try {
        const result = await sendEmail(email, subject, html)

        return Response.json({
            accepted: result.accepted
        })
    } catch (e) {
        return Response.json({message: e}, {status: 500})
    }
}