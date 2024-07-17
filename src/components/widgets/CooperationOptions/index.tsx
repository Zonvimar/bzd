'use client'
import React from 'react'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Button} from "@nextui-org/react";

const CooperationOptions = () => {

    return (
        <div className={'w-full h-full flex flex-col text-start gap-8'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>Варианты сотрудничества</h2>
                <p className={''}>
                    Универсальный комплект услуг для эффективного применения страховочных рельсовых пакетов.
                </p>
            </div>

            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 px-2'}>
                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    {/*<CardHeader className="pt-4 px-2 flex-col items-start">*/}
                    {/*    /!*<div>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</CardHeader>*/}
                    <CardBody className="overflow-hidden max-h-[382px] py-2 px-2 flex flex-col justify-between gap-4">
                        <p className={'font-bold text-xl'}>Работа "Под ключ"</p>
                        <p>Аренда, эксплуатация, установка, а так же разработка и согласование документации включены в стоимость.</p>
                        <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    {/*<CardHeader className="py-2 px-2 flex-col items-start">*/}
                    {/*    /!*<div>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</CardHeader>*/}
                    <CardBody className="overflow-hidden max-h-[382px] py-2 px-2 flex flex-col justify-between gap-4">
                        <p className={'font-bold text-xl'}>Купить</p>
                        <p>Рельсы и доставка оплачиваются отдельно.</p>
                        <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    {/*<CardHeader className="py-2 px-2 flex-col items-start">*/}
                    {/*    /!*<div>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</CardHeader>*/}
                    <CardBody className="overflow-hidden max-h-[382px] py-2 px-2 flex flex-col justify-between gap-4">
                        <p className={'font-bold text-xl'}>Взять в аренду</p>
                        <p>Срок аренды до 30 календарных дней.</p>
                        <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                    </CardBody>
                </Card>
                <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    {/*<CardHeader className="py-2 px-2 flex-col items-start">*/}
                    {/*    /!*<div>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</CardHeader>*/}
                    <CardBody className="overflow-hidden max-h-[382px] py-2 px-2 flex flex-col justify-between gap-4">
                        <p className={'font-bold text-xl'}>Заказать установку</p>
                        <p>Эксплуатация ваших страховочных пакетов или купленных/арендованных у нас.</p>
                        <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default CooperationOptions;