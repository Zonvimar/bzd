'use client'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Divider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import React from "react";


const ListOfGeodeticEquipment = () => {


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
        <Card className={"w-full"}>
            <CardHeader className="py-2 px-2 flex-col items-start">
                <p className={'font-bold text-2xl'}>Перечень геодезического оборудования</p>
            </CardHeader>
            <Divider/>
            <CardBody className=" py-2 px-2 flex flex-col gap-4">
                <div className={'z-0 flex flex-col relative justify-between gap-4 overflow-auto' +
                    'w-full border-none'}>
                    <Table aria-label="Example static collection table"
                           classNames={classNames}
                           selectionMode="single"
                           isStriped removeWrapper
                           color={'primary'}

                    >
                        <TableHeader className={'bg-primary'}>
                            <TableColumn className={'w-fit'}>Наименование</TableColumn>
                            <TableColumn className={'w-fit'}>Количество</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>Тахеометр Leica TS60 I 0.5</TableCell>
                                <TableCell>3 шт.</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Тахеометр Leica MS60</TableCell>
                                <TableCell>1 шт.</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Тахеометр Leica TM50 I 0.5</TableCell>
                                <TableCell>1 шт.</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Тахеометр Leica TS16 I 1</TableCell>
                                <TableCell>5 шт.</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Тахеометр Leica TS06plus 1</TableCell>
                                <TableCell>1 шт.</TableCell>
                            </TableRow>
                            <TableRow key="6">
                                <TableCell>Нивелир Leica LS10 0.3</TableCell>
                                <TableCell>2 шт.</TableCell>
                            </TableRow>
                            <TableRow key="7">
                                <TableCell>Нивелир Leica LS15 0.3</TableCell>
                                <TableCell>2 шт.</TableCell>
                            </TableRow>
                            <TableRow key="8">
                                <TableCell>Нивелир Trimble DiNi 0.3</TableCell>
                                <TableCell>2 шт.</TableCell>
                            </TableRow>
                            <TableRow key="9">
                                <TableCell>GNSS оборудование Leica GS10</TableCell>
                                <TableCell>1 шт.</TableCell>
                            </TableRow>
                            <TableRow key="10">
                                <TableCell>GNSS оборудование Leica GS14</TableCell>
                                <TableCell>1 шт.</TableCell>
                            </TableRow>
                            <TableRow key="11">
                                <TableCell>GNSS оборудование Leica GS18</TableCell>
                                <TableCell>1 шт.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </CardBody>
        </Card>
    )
}

export default ListOfGeodeticEquipment