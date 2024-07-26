import React, {Suspense} from 'react'
import ServicesHeader from "@/components/widgets/ServicesHeader";
import {Button, Image} from "@nextui-org/react";
import Link from "next/link";
import PackingOfSafetyBags from "@/components/widgets/PackingOfSafetyBags";
import CooperationOptions from "@/components/widgets/CooperationOptions";
import Equipment from "@/components/widgets/Equipment";
import PickupConditions from "@/components/widgets/PickupConditions";

const Page = async() => {

    return (
        <Suspense>
            <ServicesHeader title={'Установка\n' +
                'страховочных\n' +
                'рельсовых пакетов'} description={'Цена установки составляет 802 130 RUB с НДС.\n' +
                '\n'}
                            defaultValue={'install'}
            />
            <div className={'flex flex-col gap-6 pt-6'}>
                <div
                    className={'w-full mx-auto flex flex-col items-center justify-center max-w-7xl px-2 lg:px-8 gap-4'}>
                    <div
                        className={'w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4'}>
                        {/*<div>*/}
                        {/*<div className={'items-center justify-center flex'}>*/}
                        <Image
                            width={'100%'}
                            height={'70%'}
                            alt="NextUI hero Image"
                            src="/install.jpg"
                        />
                        {/*</div>*/}

                        {/*<p className={''}>*/}
                        {/*    ФОТКИ*/}
                        {/*</p>*/}
                        <div className={'flex flex-col gap-3'}>
                            {/*<div className={'flex flex-col gap-4'}>*/}
                            <h2 className={'text-3xl font-bold'}>
                                Монтаж рельсовых страховочных пакетов
                            </h2>
                            <p className={''}>
                                Квалифицированные специалисты ООО «БЖД»,
                                аттестованные для работы на ОАО «РЖД», выполняют монтаж рельсовых страховочных пакетов,
                                предназначенных для перекрытия пролетов или участков пути при производстве переходов
                                через железнодорожные пути методом ГНБ, микротоннелирование.
                                Для проведения работ по прпкладке комуникаций под ж/д путями.
                            </p>
                            {/*<p>*/}
                            {/*    Доверьте нам установку рельсовых страховочных пакетов:*/}
                            {/*    мы разработаем и согласуем проект производства работ (ППР),*/}
                            {/*    доставим конструкцию на место проведения работ, произведем монтаж*/}
                            {/*    в соответствии с нормами и правилами ОАО "РЖД".*/}
                            {/*    Наша материальная база позволяет выполнять даже самые крупные заказы,*/}
                            {/*    так как в наличии имеется более 30 комплектов страховочных пакетов.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    Стоимость установки страховочного рельсового пакета зависит от даты*/}
                            {/*    проведения работ и местоположения объекта.*/}
                            {/*</p>*/}
                            {/*</div>*/}
                            <Link href={'/projects'} className={'text-primary'}>
                                <Button color={'primary'} variant={'ghost'} size={'lg'} className={'px-8 w-fit'}>
                                    Выполненные
                                    работы</Button>
                            </Link>
                        </div>
                        {/*</div>*/}
                    </div>
                    {/*////*/}
                    <PickupConditions defaultValue={'install'}/>

                    {/*<PackingOfSafetyBags/>*/}
                    {/*<CooperationOptions/>*/}
                    {/*<Equipment/>*/}
                </div>
            </div>

        </Suspense>
    )
}

export default Page