import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";
import PackingOfSafetyBags from "@/components/widgets/PackingOfSafetyBags";
import AdditionalServices from "@/components/widgets/AdditionalServices";
import PickupConditions from "@/components/widgets/PickupConditions";

const Page = async() => {

    return (
        <Suspense>
            <div className={'flex flex-col gap-6'}>
                <ServicesHeader
                    title={'Геодезический мониторинг'}
                    description={'Проводим геодезический и автоматизированный (с применением собственного оборудования) мониторинг\n' +
                        'за состоянием объектов железнодорожной\n' +
                        'инфраструктуры.'}
                    withModal={false}
                    // defaultValue={'monitoring'}
                />
                <div
                    className={'w-full mx-auto flex flex-col items-center justify-center max-w-7xl px-2 lg:px-8 gap-4'}>
                    {/*<PackingOfSafetyBags/>*/}
                    {/*<AdditionalServices title={'Дополнительные услуги'}*/}
                    {/*                    description={'Перечень дополнительных услуг, которые необходимы для полной реализации задачи.'}*/}
                    {/*/>*/}
                    {/*<PickupConditions defaultValue={'rent'}/>*/}
                </div>
            </div>
        </Suspense>
    )
}

export default Page