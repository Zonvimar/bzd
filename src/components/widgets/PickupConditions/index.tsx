import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Button, Divider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import React from "react";
import {Check, Forklift, Truck, Users, X} from "lucide-react";


const PickupConditions = () => {
    return (
        <div className={'flex flex-col text-start gap-8 h-full'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>
                    Условия самовывоза
                </h2>
                <p className={''}>
                    Для самовывоза необходимо два стропальщика, один автокран и фура с верхней загрузкой.
                </p>
            </div>
            <div className={'w-full h-full grid grid-cols-1 lg:grid-cols-2 items-stretch justify-between gap-4'}>
                <Card className={"w-full"}>
                    {/*<CardHeader className="py-2 px-2 flex-col items-start">*/}
                    {/*    <p className={'font-bold'}>Страховочный пакет 12,5 метров</p>*/}
                    {/*</CardHeader>*/}
                    <Divider/>
                    <CardBody className="py-2 px-2 flex flex-col lg:flex-row gap-4">
                        <div className={'flex flex-col justify-start gap-4 items-center text-center'}>
                            <div className={'text-primary w-12 h-12'}>
                                <Users className={'w-12 h-12'} strokeWidth={1.25}/>
                            </div>
                            <p>
                                Два стропальщика<br/>
                                для погрузки/выгрузки<br/>
                                страховочных пакетов
                            </p>
                        </div>
                        <div className={'flex flex-col justify-start gap-4 items-center text-center'}>
                            <div className={'text-primary w-12 h-12'}>
                                <Forklift className={'w-12 h-12'} strokeWidth={1.25}/>
                            </div>
                            <p>
                                Один автокран<br/>
                                для погрузки/выгрузки<br/>
                                страховочных пакетов
                            </p>
                        </div>
                        <div className={'flex flex-col justify-start gap-4 items-center text-center'}>
                            <div className={'text-primary w-12 h-12'}>
                                <Truck className={'w-12 h-12'} strokeWidth={1.25}/>
                            </div>
                            <div>
                                <p>Фура с верхней загрузкой</p>
                                <p className={'font-light'}>12.5 метров — 13,4 т</p>
                                <p className={'font-light'}>25 метров — 26,7 т</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"w-full"}>
                    <CardHeader className="py-2 px-2 flex-col items-center text-center">
                    <p className={'font-bold'}>Услуга доставки, погрузки и выгрузки
                            страховочных пакетов от БЖД</p>
                    </CardHeader>
                    {/*<Divider/>*/}
                    <CardBody className="py-2 px-2 flex flex-col gap-4">
                        <div className={'flex flex-col h-full w-full justify-center gap-4 items-center'}>
                            <p>
                                12.5 метров – 125 RUB/км
                            </p>
                            <p>
                                25 метров – 250 RUB/км
                            </p>
                        </div>
                        <Button color={'primary'} variant={'ghost'} className={'min-h-10'}>Заказать с доставкой</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default PickupConditions;