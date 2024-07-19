import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";
import PackingOfSafetyBags from "@/components/widgets/PackingOfSafetyBags";
import AdditionalServices from "@/components/widgets/AdditionalServices";
import PickupConditions from "@/components/widgets/PickupConditions";

const Page = async() => {

    return (
        <Suspense>
            <div className={'flex flex-col gap-6'}>
                <ServicesHeader title={'Аренда\n' +
                    'страховочных\n' +
                    'рельсовых пакетов'} description={'Предоставим конструкцию в аренду\n' +
                    'в расчете на необходимое колличество дней'}/>
                <div
                    className={'w-full mx-auto flex flex-col items-center justify-center max-w-7xl px-2 lg:px-8 gap-4'}>
                    <PackingOfSafetyBags/>
                    <AdditionalServices title={'Дополнительные услуги'}
                        description={'Перечень дополнительных услуг, которые необходимы для полной реализации задачи.'}
                    />
                    <PickupConditions/>
                </div>
            </div>
        </Suspense>
)
}

export default Page