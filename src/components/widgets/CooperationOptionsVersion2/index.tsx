'use client'
import React from 'react'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import Link from "next/link";

const CooperationOptionsVersion2 = () => {

    return (
        <div className={'w-full h-full flex flex-col text-start gap-8'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>Варианты сотрудничества</h2>
                <p className={''}>
                    Универсальный комплект услуг для эффективного применения страховочных рельсовых пакетов.
                </p>
            </div>
            <div className={'grid grid-cols-1 lg:grid-cols-2 w-full gap-6'}>
                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    <CardBody className="overflow-hidden py-2 px-2 flex flex-col justify-between gap-4">
                        <p className={'font-bold text-xl'}>Под ключ</p>
                        <p>Полный спектр работ по установке страховочных пакетов при пересечении железной дороги.</p>
                        <Link href={'/services/turnkey/'} className={'text-primary underline'}>Подробнее</Link>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    <CardBody className="overflow-hidden py-2 px-2 flex flex-col justify-between gap-4">
                        <p className={'font-bold text-xl'}>Аренда</p>
                        <p>Если у вас есть аттестованный персонал, мы готовы предоставить нашу конструкцию в аренду.</p>
                        <Link href={'/services/rent/'} className={'text-primary underline'}>Подробнее</Link>
                    </CardBody>
                </Card>
                {/*<Card className={"w-full hover:shadow-2xl transition-shadow"}>*/}
                {/*    <CardBody className="overflow-hidden py-2 px-2 flex flex-col justify-between gap-4">*/}
                {/*        <p className={'font-bold text-xl'}>Продажа</p>*/}
                {/*        <p>Изготовим и доставим необходимое количество страховочных пакетов в срок от 3-х рабочих дней.</p>*/}
                {/*        <Link href={'/services/buy/'} className={'text-primary underline'}>Подробнее</Link>*/}
                {/*    </CardBody>*/}
                {/*</Card>*/}
                {/*<Card className={"w-full hover:shadow-2xl transition-shadow"}>*/}
                {/*    <CardBody className="overflow-hidden py-2 px-2 flex flex-col justify-between gap-4">*/}
                {/*        <p className={'font-bold text-xl'}>Установка</p>*/}
                {/*        <p>Монтаж и демонтаж ваших или приобретенных у нас страховочных пакетов на железной дороге.</p>*/}
                {/*        <Link href={'/services/installation/'} className={'text-primary underline'}>Подробнее</Link>*/}
                {/*    </CardBody>*/}
                {/*</Card>*/}
            </div>
        </div>
    )
}

export default CooperationOptionsVersion2;