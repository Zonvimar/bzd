import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Divider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import React from "react";
import {Check, X} from "lucide-react";


const AdditionalServices = ({title, description}: {title: string, description: string}) => {
    return (
        <div className={'w-full h-full flex flex-col text-start gap-8'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>{title}</h2>
                <p className={''}>
                    {description}
                </p>
            </div>
            <div className={'grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-4'}>
                <Card className={"w-full"}>
                    <CardHeader className="py-2 px-2 flex-col items-start">
                        <p className={'font-bold'}>Страховочный пакет 12,5 метров</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="py-2 px-2 flex flex-col gap-4">
                        <div className={'flex justify-between gap-4 items-center pt-2'}>
                            <p>
                                Разработка и согласование документации
                                в ОАО «РЖД»
                            </p>
                            <div className={'text-primary w-10'}>
                                <Check className={'w-10'}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className={'flex justify-between gap-4 items-center'}>
                            <p>
                                Монтаж/демонтаж страховочных пакетов
                                (бригада из 6-10 человек)
                            </p>
                            <div className={'text-primary w-10'}>
                                <Check className={'w-10'}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className={'flex justify-between gap-4 items-center pb-2'}>
                            <p>
                                Алюминотермитная сварка рельс
                            </p>
                            <div className={'text-primary w-10'}>
                                <X className={'w-10'}/>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"w-full"}>
                    <CardHeader className="py-2 px-2 flex-col items-start">
                        <p className={'font-bold'}>Страховочный пакет 25 метров</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="py-2 px-2 flex flex-col gap-4">
                        <div className={'flex justify-between gap-4 items-center pt-2'}>
                            <p>
                                Разработка и согласование документации
                                в ОАО «РЖД»
                            </p>
                            <div className={'text-primary w-10'}>
                                <Check className={'w-10'}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className={'flex justify-between gap-4 items-center'}>
                            <p>
                                Монтаж/демонтаж страховочных пакетов
                                (бригада из 6-10 человек)
                            </p>
                            <div className={'text-primary w-10'}>
                                <Check className={'w-10'}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className={'flex justify-between gap-4 items-center pb-2'}>
                            <p>
                                Алюминотермитная сварка рельс
                            </p>
                            <div className={'text-primary w-10'}>
                                <Check className={'w-10'}/>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default AdditionalServices;