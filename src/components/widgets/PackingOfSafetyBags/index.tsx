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
import PackingInfo from "@/components/widgets/PackingInfo";

const PackingOfSafetyBags = () => {

    const classNames = React.useMemo(
        () => ({
            wrapper: ["max-h-[382px]", "max-w-3xl", "border-none"],
            table: ['max-w-3xl', 'w-full'],
            th: ["bg-primary",
                "text-white",
            ],
            tr: [
                "hover:bg-primary/40",
                "group-data-[first=true]:first:before:rounded-none",
                "group-data-[first=true]:last:before:rounded-none",
                "group-data-[middle=true]:before:rounded-none",
                "group-data-[middle=true]:before:rounded-none",
                "group-data-[last=true]:first:before:rounded-none",
                "group-data-[last=true]:last:before:rounded-none",
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
        <div className={'w-full h-full flex flex-col text-start gap-8'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>Комплектация страховочных пакетов</h2>
                <p className={''}>
                    Страховочные пакеты обеспечивают защиту железнодорожного пути в случае разрушения земляного полотна.
                </p>
            </div>

            <div className={'w-full h-full flex flex-col lg:flex-row items-start justify-between gap-4'}>
                <Card className={"w-full"}>
                    <CardHeader className="py-2 px-2 flex-col items-start">
                        <p className={'font-bold'}>Страховочный пакет 12,5 метров</p>
                        <p>Общий вес комплекта = 9,5 тонн</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody className=" max-h-[382px] py-2 px-2 flex flex-col gap-4">
                        <div className={'z-0 flex flex-col relative justify-between gap-4 overflow-auto' +
                            'w-full max-h-[382px] max-w-3xl border-none'}>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   isStriped removeWrapper
                                   color={'primary'}

                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={'w-fit'}>Наименование</TableColumn>
                                    <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Рельсы, длина 12,5м</TableCell>
                                        <TableCell>12</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Полушпала</TableCell>
                                        <TableCell>46</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Хомут</TableCell>
                                        <TableCell>184</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Болт клеменный в сборе М22×75</TableCell>
                                        <TableCell>276</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>Болт М24×180</TableCell>
                                        <TableCell>368</TableCell>
                                    </TableRow>
                                    <TableRow key="6">
                                        <TableCell>Болт М24×80</TableCell>
                                        <TableCell>552</TableCell>
                                    </TableRow>
                                    <TableRow key="7">
                                        <TableCell>Гайка М24</TableCell>
                                        <TableCell>920</TableCell>
                                    </TableRow>
                                    <TableRow key="8">
                                        <TableCell>Шайба 24</TableCell>
                                        <TableCell>1840</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                    </CardBody>
                </Card>
                <Card className={"w-full"}>
                    <CardHeader className="py-2 px-2 flex-col items-start">
                            <p className={'font-bold'}>Страховочный пакет 25 метров</p>
                            <p>Общий вес комплекта = 19 тонн</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody className=" max-h-[382px] py-2 px-2 flex flex-col gap-4">
                        <div className={'z-0 flex flex-col relative justify-between gap-4 overflow-auto' +
                            'w-full max-h-[382px] max-w-3xl border-none'}>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   removeWrapper
                                   isStriped
                                   color={'primary'}

                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={'w-fit'}>Наименование</TableColumn>
                                    <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Рельсы, длина 12,5м</TableCell>
                                        <TableCell>24</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Полушпала</TableCell>
                                        <TableCell>92</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Хомут</TableCell>
                                        <TableCell>368</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Болт клеменный в сборе М22×75</TableCell>
                                        <TableCell>552</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>Болт М24×180</TableCell>
                                        <TableCell>736</TableCell>
                                    </TableRow>
                                    <TableRow key="6">
                                        <TableCell>Болт М24×80</TableCell>
                                        <TableCell>1104</TableCell>
                                    </TableRow>
                                    <TableRow key="7">
                                        <TableCell>Гайка М24</TableCell>
                                        <TableCell>1840</TableCell>
                                    </TableRow>
                                    <TableRow key="8">
                                        <TableCell>Шайба 24</TableCell>
                                        <TableCell>3680</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <PackingInfo/>
        </div>
    )
}

export default PackingOfSafetyBags;