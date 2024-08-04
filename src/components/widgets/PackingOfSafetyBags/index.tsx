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
                        <div>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   isStriped removeWrapper
                                   color={'primary'}

                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={'w-fit'}>Состав</TableColumn>
                                    <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Полушпала</TableCell>
                                        <TableCell>46</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Болт М22×70 в сборе</TableCell>
                                        <TableCell>92</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Болт М24×80 в сборе</TableCell>
                                        <TableCell>184</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Хомут</TableCell>
                                        <TableCell>184</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>Подвесаные болты</TableCell>
                                        <TableCell>368</TableCell>
                                    </TableRow>
                                    <TableRow key="6">
                                        <TableCell>Отбойный брус</TableCell>
                                        <TableCell>368</TableCell>
                                    </TableRow>
                                    <TableRow key="7">
                                        <TableCell>Клеменные болты в сборе</TableCell>
                                        <TableCell>92</TableCell>
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
                        <div>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   removeWrapper
                                   color={'primary'}

                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={'w-fit'}>Состав</TableColumn>
                                    <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Полушпала</TableCell>
                                        <TableCell>92</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Болт М22×70 в сборе</TableCell>
                                        <TableCell>184</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Болт М24×80 в сборе</TableCell>
                                        <TableCell>368</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Хомут</TableCell>
                                        <TableCell>368</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>Подвесаные болты</TableCell>
                                        <TableCell>736</TableCell>
                                    </TableRow>
                                    <TableRow key="6">
                                        <TableCell>Отбойный брус</TableCell>
                                        <TableCell>736</TableCell>
                                    </TableRow>
                                    <TableRow key="7">
                                        <TableCell>Клеменные болты в сборе</TableCell>
                                        <TableCell>184</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default PackingOfSafetyBags;