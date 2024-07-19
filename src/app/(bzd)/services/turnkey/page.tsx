import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";

const Page = async() => {

    return (
        <Suspense>
            <ServicesHeader title={'Установка\n' +
                'страховочных\n' +
                'рельсовых пакетов\n' +
                '«Под ключ»'} description={'Производим, предоставляем в аренду и устанавливаем\n' +
                'рельсовые страховочные пакеты с 2017 года.'}/>
        </Suspense>
    )
}

export default Page