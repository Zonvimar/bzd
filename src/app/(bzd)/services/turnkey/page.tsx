import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";
import PackingOfSafetyBags from "@/components/widgets/PackingOfSafetyBags";
import AdditionalServices from "@/components/widgets/AdditionalServices";
import PickupConditions from "@/components/widgets/PickupConditions";

const Page = async() => {

    return (
        <Suspense>
            <div className={'flex flex-col gap-6'}>
                <ServicesHeader title={'Установка\n' +
                    'страховочных\n' +
                    'рельсовых пакетов\n' +
                    '«Под ключ»'} description={'Производим, предоставляем в аренду и устанавливаем\n' +
                    'рельсовые страховочные пакеты с 2017 года.'}/>
                <div
                    className={'w-full mx-auto flex flex-col items-center justify-center max-w-7xl px-2 lg:px-8 gap-4'}>
                    <AdditionalServices title={'Прайс-лист на полный комплекс работ'}
                                        description={'Полный комплекс работ по установке страховочных пакетов - ' +
                                            'это выполнение всех необходимых мероприятий для получения акта-допуска' +
                                            ' от РЖД на выполнение прокола под железной дорогой.'}
                    />
                    <PickupConditions/>
                </div>
            </div>
        </Suspense>
)
}

export default Page