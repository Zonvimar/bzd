'use client'
import React from 'react'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Button, Image} from "@nextui-org/react";

const Equipment = () => {

    return (
        <div className={'w-full h-full flex flex-col text-start gap-8'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>Наша материально-техническая база
                </h2>
                <p className={''}>
                    Специальное оборудование для погрузки, доставки и установки страховочных пакетов.
                </p>
            </div>
            <div className={'grid grid-cols-1 gap-6'}>
                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                        <Image
                            alt=" "
                            src="/kamaz.jpg"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center'}>
                            <p className={'font-bold text-xl'}>Оборудование и техника</p>
                            <p>Только аккредитованные в ОАО «РЖД» работники имеют право выполнять работы на железной
                                дороге,
                                а так же компания должна иметь сертификат СРО на проведение данного вида работ.
                                Выполняет данный этап бригада из 6-10 человек.</p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                1 автокран для установки пакета 12,5 метров и 2 для 25 метровых пакетов.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                2-3 портальных крана для перемещения рельсов по жд пути.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Путевой гайковерт.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Рельсорезный станок.
                            </p>
                        </div>
                    </CardBody>
                </Card>


                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2  justify-between gap-4">
                        <Image
                            alt=" "
                            src="/alyuminotermitnaya-svarka.jpg"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center lg:order-first order-last'}>
                            <p className={'font-bold text-xl'}>Алюминотермитная сварка</p>
                            <p>Для установки страховочных пакетов длиной 25 метров используют рельсы 12,5 метров,
                                чтобы следовать требованиям проекта и получить
                                прочную конструкцию длиной 25 метров, рельсы сваривают на месте производства работ.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Газопламенный резак.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Кислородный регулятор.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Гратосниматель.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Гидравлический насос.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Шлифовальная машина.
                            </p>
                        </div>
                    </CardBody>
                </Card>



                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2  justify-between gap-4">
                        <Image
                            alt=" "
                            src="/pogruzka-dostavka-vygruzka.jpg"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center'}>
                            <p className={'font-bold text-xl'}>Погрузка, доставка, выгрузка</p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                2 стропальщика, которые обязательны при погрузке крупногабаритных грузов.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Автокран с верхней загрузкой.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Фура с верхней загрузкой.
                            </p>
                            <p className={'flex gap-2 items-center'}>
                                <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                                Манипулятор для перемещения от фуры до места проведения работ.
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Equipment;