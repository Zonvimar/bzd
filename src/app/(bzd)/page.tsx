import React, {Suspense} from 'react'
import {Button, Image} from "@nextui-org/react";
import PackingOfSafetyBags from "@/components/widgets/PackingOfSafetyBags";
import CooperationOptions from "@/components/widgets/CooperationOptions";
import Equipment from "@/components/widgets/Equipment";
import Link from "next/link";
import OrderServiceModal from "@/components/widgets/forms/OrderServiceModal";

const Page = async() => {

    return (
        <Suspense>
            <div className={'flex flex-col gap-6'}>
                <div
                    className={'bg-[url("/banner.jpg")] text-center sm:text-left flex items-center justify-center bg-cover bg-center bg-no-repeat h-[600px] backdrop-blur-lg'}>

                    <div
                        className={'w-full bg-black/70 h-full'}>
                        <div className={'bg-primary relative overflow-x-hidden'}>
                            <div className={'text-white text-xl font-bold bg-primary flex items-center justify-between animate-marquee lg:animate-marquee2 whitespace-nowrap'}>
                                {/*<p className={''}>*/}
                                {/*    Страховочный пакет от 1 199 000 руб**/}
                                {/*</p>*/}
                                <p className={'animate-pulse'}>
                                    Страховочный пакет 1 199 000 руб*
                                </p>
                                <p className={'animate-pulse hidden lg:flex'}>
                                    Страховочный пакет 1 199 000 руб*
                                </p>                        {/*<div>*/}
                            </div>
                        </div>
                        <div className={'w-full mx-auto px-8 h-full flex flex-col justify-center gap-4 max-w-7xl'}>
                            <h1 className={'text-white text-3xl lg:text-5xl font-bold'}>
                                Рельсовые<br/>страховочные пакеты<br/> для железных дорог
                            </h1>
                            <p className={'text-white text-xl font-light'}>
                                С 2019 года наша компания производит, устанавливает<br/> и предоставляет в аренду
                                рельсовые страховочные пакеты
                            </p>
                            <p className={'text-white text-xl font-light flex gap-2 items-center justify-center lg:justify-start'}>
                                <hr className={'w-8 h-[4px] bg-primary rounded border-0'}/>
                                Работаем по всей России
                                <hr className={'w-8 h-[4px] lg:hidden bg-primary rounded border-0'}/>
                            </p>
                            jj
                            {/*<OrderService/>*/}
                            <OrderServiceModal/>
                        </div>
                        {/*</div>*/}
                    </div>
                </div>
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
                            src="/people-zd.jpg"
                        />
                        {/*</div>*/}

                        {/*<p className={''}>*/}
                        {/*    ФОТКИ*/}
                        {/*</p>*/}
                        <div className={'flex flex-col justify-between h-full gap-3'}>
                            {/*<div className={'flex flex-col gap-4'}>*/}
                            {/*<div className={'flex flex-col gap-4'}>*/}
                                <h2 className={'text-3xl font-bold'}>
                                    О нас
                                </h2>
                                <p className={''}>
                                    ООО "Безопасные железные дороги" с 2019 года занимается установкой
                                    рельсовых страховочных пакетов. Благодаря комплексному подходу,
                                    мы контролируем все этапы выполнения работ,
                                    что позволяет заказчику получить точный и быстрый результат,
                                    полностью соответствующий нормам «РЖД».
                                </p>
                                <p>
                                    Доверьте нам установку рельсовых страховочных пакетов:
                                    мы разработаем и согласуем проект производства работ (ППР),
                                    доставим конструкцию на место проведения работ, произведем монтаж
                                    в соответствии с нормами и правилами ОАО "РЖД".
                                    Наша материальная база позволяет выполнять даже самые крупные заказы,
                                    так как в наличии имеется более 50 комплектов страховочных пакетов.
                                </p>
                            {/*</div>*/}
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
                    <PackingOfSafetyBags/>
                    <CooperationOptions/>
                    <Equipment/>
                </div>
            </div>
        </Suspense>

    )
}

export default Page