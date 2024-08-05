'use client'
import React from 'react'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Button, Image} from "@nextui-org/react";

const PackingInfo = () => {

    return (
        <div className={'w-full h-full flex flex-col text-start gap-8'}>
            <div className={'grid grid-cols-1 gap-6'}>
                <Card className={"w-full hover:shadow-2xl hover:transition-all"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                        <Image
                            alt="NextUI logo"
                            src="/packingInfo/img.png"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center'}>
                            <p className={'font-bold text-xl'}>Полушпала ПШ состоит из:</p>
                            <p>
                                Балка Б5 - 1шт., блок ребер жесткости - 6шт.,
                                подкладка КД-65 - 1шт., болт м24х80 с плоской шайбой м24 и гайкой м24 - 4шт.,
                                болт м22х70 с двумя плоскими шайбами м22 и гайкой м22) - прикрепляется между шпальными
                                ящиками к рельсу существующего пути при помощи клеммных болтов.
                                На полушпалы укладываются и прикрепляются пакетные рельсы
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl hover:transition-all"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2  justify-between gap-4">
                        <Image
                            alt="NextUI logo"
                            src="/packingInfo/img_1.png"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center lg:order-first order-last'}>
                            <p className={'font-bold text-xl'}>Хомут Х</p>
                            <p>
                                Под рельсы типа Р-65 либо рельсы типа Р-50 - служит для закрепления
                                пакетных рельс к полушпалам.
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl hover:transition-all"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2  justify-between gap-4">
                        <Image
                            alt="NextUI logo"
                            src="/packingInfo/img_5.png"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center'}>
                            <p className={'font-bold text-xl'}>Болт м24х180</p>
                            <p>
                                В комплекте с двухвитковой шайбой м25, упорной пластиной и квадратной гайкой 60х60х30 м24
                                – служит для закрепления пакетных рельс к полушпалам
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl hover:transition-all"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2  justify-between gap-4">
                        <Image
                            alt="NextUI logo"
                            src="/packingInfo/img_6.png"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center lg:order-first order-last'}>
                            <p className={'font-bold text-xl'}>Клеммный болт</p>
                            <p>
                                В комплекте с двухвитковой шайбой м25, спецболтом м22 и гайкой м22 служит
                                для прикрепления полушпал ПШ к существующему(путевому) рельсу.
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl hover:transition-all"}>
                    <CardBody className="overflow-hidden grid grid-cols-1 lg:grid-cols-2  justify-between gap-4">
                        <Image
                            alt="NextUI logo"
                            src="/packingInfo/img_8.png"
                            width={'100%'}
                            height={'100%'}
                        />
                        <div className={'flex flex-col gap-4 justify-center'}>
                            <p className={'font-bold text-xl'}>Отбойный брус</p>
                            <p>
                                Устанавливается под хомуты на концы рельс страховочного рельсового пакета и служит для
                                защиты от ударов и зацепления незакрепленных частей подвижного состава
                                и посторонних предметов
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default PackingInfo;