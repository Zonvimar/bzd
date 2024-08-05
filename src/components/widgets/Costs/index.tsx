'use client'
import React from 'react'
import {
    Divider,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";

const Costs = () => {

    const classNames = React.useMemo(
        () => ({
            // wrapper: [],
            // table: ['max-w-3xl', 'w-full'],
            th: ["bg-primary",
                "text-white",
            ],
            tr: [
                "hover:bg-primary/40",
            ],
            td: [
                'group-data-[first=true]:first:before:rounded-none',
                'group-data-[first=true]:last:before:rounded-none',
                'group-data-[middle=true]:before:rounded-none',
                'group-data-[middle=true]:before:rounded-none',
                'group-data-[last=true]:first:before:rounded-none',
                'group-data-[last=true]:last:before:rounded-none',
            ],
        }),
        [],
    );

    return (
        <div className={'w-full h-full flex flex-col text-start gap-6'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>Стоимость работ/услуг</h2>
                {/*<p className={''}>*/}
                {/*    Страховочные пакеты обеспечивают защиту железнодорожного пути в случае разрушения земляного полотна.*/}
                {/*</p>*/}
            </div>

            <div className={'w-full h-full'}>
                {/*<Card className={"w-full"}>*/}
                    {/*<CardHeader className="py-2 px-2 flex-col items-start">*/}
                    {/*    <p className={'font-bold'}>Страховочный пакет 12,5 метров</p>*/}
                    {/*    <p>Общий вес комплекта = 9,5 тонн</p>*/}
                    {/*</CardHeader>*/}
                    {/*<Divider/>*/}
                    {/*<CardBody className=" py-3 px-3 flex flex-col gap-4">*/}
                    {/*    <div>*/}
                            {/*<p className={'font-bold pb-2'}>Полушпала</p>*/}
                            <Table aria-label="Example static collection table"
                                   classNames={classNames} className={'w-full h-full'}
                                   selectionMode="single"
                                   // removeWrapper
                                   isStriped
                                   color={'primary'}

                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={''} align={'center'} maxWidth={100} minWidth={50}>Длина РСП в метрах/виды работ</TableColumn>
                                    <TableColumn className={''} align={'center'} maxWidth={100} minWidth={100}>Цена за ед.руб. с НДС</TableColumn>
                                    <TableColumn className={''} align={'start'} maxWidth={100} minWidth={100}>Примечание</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>12,5/<span className={'text-red-500 font-bold'}>*</span></TableCell>
                                        <TableCell>1 199 000</TableCell>
                                        <TableCell>Комплекс работ</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>25/<span className={'text-red-500 font-bold'}>*</span></TableCell>
                                        <TableCell>2 398 000</TableCell>
                                        <TableCell>Комплекс работ</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>37,5/<span className={'text-red-500 font-bold'}>*</span></TableCell>
                                        <TableCell>3 597 000</TableCell>
                                        <TableCell>Комплекс работ</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>50/<span className={'text-red-500 font-bold'}>*</span></TableCell>
                                        <TableCell>4 796 000</TableCell>
                                        <TableCell>Комплекс работ</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>12,5</TableCell>
                                        <TableCell>900 000</TableCell>
                                        <TableCell>Перемонтаж</TableCell>
                                    </TableRow>
                                    <TableRow key="6">
                                        <TableCell>Алюмотермитная сварка 1 стык</TableCell>
                                        <TableCell>50 000</TableCell>
                                        <TableCell>12 стыков в одном соединении</TableCell>
                                    </TableRow>
                                    <TableRow key="7">
                                        <TableCell>Аварийная бригада в сутки</TableCell>
                                        <TableCell>60 000</TableCell>
                                        <TableCell>В случае просадки или предписания РЖД</TableCell>
                                    </TableRow>
                                    <TableRow key="8">
                                        <TableCell>Обслуживание пакета 12,5м в месяц</TableCell>
                                        <TableCell>60 000</TableCell>
                                        <TableCell>С второго месяца смонтированного пакета</TableCell>
                                    </TableRow>
                                    <TableRow key="9">
                                        <TableCell>Обслуживание пакета 25м в месяц</TableCell>
                                        <TableCell>90 000</TableCell>
                                        <TableCell>С второго месяца смонтированного пакета</TableCell>
                                    </TableRow>
                                    <TableRow key="10">
                                        <TableCell>Согласование договора на ОКНА</TableCell>
                                        <TableCell>60 000</TableCell>
                                        <TableCell>Сторонним организациям для их видов работ</TableCell>
                                    </TableRow>
                                    <TableRow key="11">
                                        <TableCell>Согласнование договора на технадзор</TableCell>
                                        <TableCell>60 000</TableCell>
                                        <TableCell>Сторонним организациям для их видов работ</TableCell>
                                    </TableRow>
                                    <TableRow key="12">
                                        <TableCell>Разработка ППР</TableCell>
                                        <TableCell>200 000</TableCell>
                                        <TableCell>Сторонним организациям для их видов работ</TableCell>
                                    </TableRow>
                                    <TableRow key="13">
                                        <TableCell>Мониторинг</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>Расчет согласно проектной документации</TableCell>
                                    </TableRow>
                                    <TableRow key="14">
                                        <TableCell><span className={'text-red-500 font-bold text-xl'}>*</span>ППР/АКТ ДОПУСКА/ТЕХ. НАДЗОР/<br/>СОГЛАСОВАНИЕ "ОКОН"/МОНТАЖ/ДЕМОНТАЖ</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell width={500}>Входит в комплекс работ. Официальные платежи в ОАО «РЖД» на осуществление тех. надзора и «ОКОН» оплачиваются заказчиком</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        {/*</div>*/}
                    {/*</CardBody>*/}
                {/*</Card>*/}
            </div>
        </div>
    )
}

export default Costs;