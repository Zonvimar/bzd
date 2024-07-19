import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";

const Page = async() => {

    return (
        <Suspense>
            <ServicesHeader title={'Продажа\n' +
                'страховочных\n' +
                'рельсовых пакетов'} description={'Цена покупки от 2 198 920 рублей с НДС.\n' +
                'Рельсы приобретаются отдельно.'}/>
        </Suspense>
    )
}

export default Page