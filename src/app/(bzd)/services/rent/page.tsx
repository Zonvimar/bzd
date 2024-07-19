import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";

const Page = async() => {

    return (
        <Suspense>
            <ServicesHeader title={'Аренда\n' +
                'страховочных\n' +
                'рельсовых пакетов'} description={'Предоставим конструкцию в аренду\n' +
                'в расчете на необходимое колличество дней'}/>
        </Suspense>
    )
}

export default Page