import React, {Suspense} from 'react'
import {Button, Divider, Image} from "@nextui-org/react";
import CooperationOptionsVersion2 from "@/components/widgets/CooperationOptionsVersion2";
import {Check} from "lucide-react";
import {Card, CardBody} from "@nextui-org/card";
import BaseCarouselImages from "@/components/widgets/BaseCarousel";
import PickUsYouHave from "@/components/widgets/PickUsYouHave";

const Page = async() => {

    return (
        <Suspense>
            <div
                className={'bg-[url("/o-nas-banner.jpg")] text-center sm:text-left flex items-center justify-center bg-cover bg-center bg-no-repeat h-[600px] backdrop-blur-lg'}>
                <div
                    className={'w-full bg-black/60 h-full'}>
                    {/*<div>*/}
                    <div className={'w-full mx-auto items-center px-8 h-full flex flex-col justify-center gap-4 max-w-7xl'}>
                        <h1 className={'text-white text-3xl lg:text-5xl font-bold flex gap-2 items-center'}>
                            <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                            ООО "БЖД"
                            <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                        </h1>
                        <p className={'text-white text-xl font-light text-center'}>
                            Цель нашей компании - предложение широкого ассортимента
                            товаров и услуг<br/> на постоянно высоком качестве обслуживания.
                        </p>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
            <div className={'max-w-7xl mx-auto px-2 lg:px-8 pt-10 gap-8 flex flex-col'}>
                <div
                    className={'grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 mx-auto'}>
                    <div className={'flex gap-4'}>
                        <Divider orientation={'vertical'} className={'w-1 bg-primary lg:flex hidden'}/>
                        <p className={''}>
                            Мы предлагаем заказчикам готовое решение, которое подразумевает постановку
                            задач любой сложности в полосе отвода РЖД
                            <br/><br/>
                            {/*<p>*/}
                            «БЖД» работает напрямую со своими заказчиками.
                            Наша компания аккредитована ОАО «РЖД», она соответствует высоким требованиям к защите
                            объектов транспортной инфраструктуры и транспортных средств, что гарантирует надлежащее
                            качество выполненных ею работ. Уверенны, привлекательная стоимость, а также гарантия
                            качества нашего продукта и услуг помогут Вам оптимизировать затраты на строительных объектах
                            Вашей компанией.
                            {/*</p>*/}
                            <br/><br/>
                            Нашей компанией на Московской железной дороге установлено более 1000 комплектов,
                            на Октябрьской железной дороге и в других регионах более 500 комплектов
                        </p>
                    </div>
                    {/*<div className={'grid grid-cols-1 gap-6 justify-between'}>*/}
                    <div className={'grid grid-cols-1 justify-center h-fit gap-3 lg:mx-auto items-start'}>
                        <p className={'font-bold'}><span className={'text-primary text-2xl'}>Более 1500 страховочных
                                пакетов</span></p>
                        <p className={'font-bold'}>Установлено по всей России</p>
                    </div>
                    {/*<div className={'flex flex-col gap-3'}>*/}
                    {/*    <p className={'font-bold'}><span className={'text-primary text-2xl'}>45+</span><br/>страховочных*/}
                    {/*        пакетов</p>*/}
                    {/*    <p>Изготовлено</p>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
                <CooperationOptionsVersion2/>
                <div className={'w-full h-full flex flex-col text-start gap-8'}>
                    <div className={'flex flex-col gap-2'}>
                        <h2 className={'text-3xl font-bold'}>Фотографии нашей базы</h2>
                        {/*<p className={''}>*/}
                        {/*    Сертифицированная продукция и высококвалифицированные специалисты, соответствующие*/}
                        {/*    стандартам и требованиям.*/}
                        {/*</p>*/}
                    </div>
                    <BaseCarouselImages/>
                    <PickUsYouHave/>
                </div>
                <div className={'w-full h-full flex flex-col text-start gap-8'}>
                    <div className={'flex flex-col gap-2'}>
                        <h2 className={'text-3xl font-bold'}>Наши преимущества</h2>
                        <p className={''}>
                            Сертифицированная продукция и высококвалифицированные специалисты, соответствующие
                            стандартам и требованиям.
                            {/*«БЖД» работает напрямую со своими заказчиками.*/}
                            {/*Наша компания аккредитована в ОАО «РЖД», она соответствует высоким требованиям*/}
                            {/*к защите объектов транспортной инфраструктуры и транспортных средств, что гарантирует*/}
                            {/*надлежащее качество выполненных ею работ.*/}
                            {/*Уверены и гарантируем, что  качество нашего продукта и услуг, оптимизируют ваши затраты*/}
                            {/*на строительных объектах Вашей компанией.*/}
                        </p>
                    </div>
                    <div className={'grid grid-cols-1 lg:grid-cols-2 w-full gap-6'}>
                        <div className={'flex gap-2 items-start w-full'}>
                            <div className={'text-primary w-8'}>
                                <Check className={'w-8'}/>
                            </div>
                            <p>Техническая база для проведения крупномасштабных проектов.</p>
                        </div>
                        <div className={'flex gap-2 items-start w-full'}>
                            <div className={'text-primary w-8'}>
                                <Check className={'w-8'}/>
                            </div>
                            <p>Штат высококвалифицированных сотрудников.</p>
                        </div>
                        <div className={'flex gap-2 items-start w-full'}>
                            <div className={'text-primary w-8'}>
                                <Check className={'w-8'}/>
                            </div>
                            <p>Все работы выполняются согласно законодательства РФ.</p>
                        </div>
                        <div className={'flex gap-2 items-start w-full'}>
                            <div className={'text-primary w-8'}>
                                <Check className={'w-8'}/>
                            </div>
                            <p> Квалифицированные консультации.</p>
                        </div>
                    </div>
                </div>
                <div className={'w-full h-full flex flex-col text-start gap-8'}>
                    <div className={'flex flex-col gap-2'}>
                        <h2 className={'text-3xl font-bold'}>Наши заказчики</h2>
                    </div>
                    <Card>
                        <CardBody className={'grid grid-cols-2 lg:grid-cols-6 items-center w-full gap-6'}>
                            <div className={'flex gap-2 items-center justify-center w-full'}>
                                <Image
                                    width={'100%'}
                                    height={'70%'}
                                    alt=" "
                                    src="/rjd.jpg"
                                    radius={'none'}
                                />
                            </div>
                            <div className={'flex gap-2 items-center justify-center w-full'}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    alt=" "
                                    src="/mosinjproject.svg"
                                    radius={'none'}
                                />
                            </div>
                            <div className={'flex gap-2 items-center justify-center w-full'}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    alt=" "
                                    src="/mck.jpg"
                                    radius={'none'}
                                />
                            </div>
                            <div className={'flex gap-2 items-center justify-center w-full'}>
                                <Image
                                    width={'80%'}
                                    height={'100%'}
                                    alt=" "
                                    src="/mip.png"
                                    radius={'none'}
                                />
                            </div>
                            <div className={'flex gap-2 items-center justify-center w-full'}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    alt=" "
                                    src="/1520.svg"
                                    radius={'none'}
                                />
                            </div>
                            <div className={'flex gap-2 items-center justify-center w-full'}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    alt=" "
                                    src="/mostotrest.svg"
                                    radius={'none'}
                                />
                            </div>
                            <div className={'hidden lg:flex'}></div>
                            <div className={'hidden lg:flex'}></div>
                            {/*<div></div> */}
                            <div className={'flex gap-2 py-4 items-center justify-center w-full'}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    alt=" "
                                    src="/aodim.png"
                                    radius={'none'}
                                />
                            </div>
                            <div className={'flex gap-2 py-4 items-center justify-center w-full'}>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    alt=" "
                                    src="/misk.png"
                                    radius={'none'}
                                />
                            </div>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </Suspense>
)
}

export default Page