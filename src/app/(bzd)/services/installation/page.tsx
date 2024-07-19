import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";

const Page = async() => {

    return (
        <Suspense>
            <ServicesHeader title={'Установка\n' +
                'страховочных\n' +
                'рельсовых пакетов'} description={'Цена установки составляет 802 130 RUB с НДС.\n' +
                '\n'}
                defaultValue={'install'}
            />
        </Suspense>
    )
}

export default Page