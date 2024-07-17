'use client'
import React from 'react'
import {
    Accordion, AccordionItem,
    Button, Divider,
    Image,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tabs
} from "@nextui-org/react";
import {Card, CardBody, CardHeader} from "@nextui-org/card";

const PackingOfSafetyBags = () => {

    const classNames = React.useMemo(
        () => ({
            wrapper: ["max-h-[382px]", "max-w-3xl"],
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
                // 'border',
                // 'border-divider',
                'group-data-[first=true]:first:before:rounded-none',
                'group-data-[first=true]:last:before:rounded-none',
                'group-data-[middle=true]:before:rounded-none',
                'group-data-[middle=true]:before:rounded-none',
                'group-data-[last=true]:first:before:rounded-none',
                'group-data-[last=true]:last:before:rounded-none',
                // // changing the rows border radius
                // // first
                // // "data-[first=true]:first:before:rounded-none",
                // // "data-[first=true]:last:before:rounded-none",
                // "group-data-[first=true]:first:before:rounded-none",
                // "group-data-[first=true]:last:before:rounded-none",
                // // middle
                // "group-data-[middle=true]:before:rounded-none",
                // "group-data-[middle=true]:before:rounded-none",
                // // last
                // "group-data-[last=true]:first:before:rounded-none",
                // "group-data-[last=true]:last:before:rounded-none",
            ],
        }),
        [],
    );

    return (
        <div className={'w-full h-full flex flex-col text-start gap-8'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>Комплектация страховочных пакетов</h2>
                <p className={''}>
                    Страховочные пакеты выступают в качестве защиты пути в случае разрушения земляного полотна
                    железной дороги.
                </p>
            </div>

            <div className={'w-full h-full flex flex-col lg:flex-row items-start justify-between gap-4'}>
                <Card className={"w-full"}>
                    <CardHeader className="py-2 px-2 flex-col items-start">
                        <p className={'font-bold'}>Страховочный пакет 12,5 метров</p>
                        <p>Общий вес комплекта = 13 353,80 кг</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-y-scroll max-h-[382px] py-2 px-2 flex flex-col gap-4">
                        {/*<Accordion selectionMode="multiple" variant={'splitted'} isCompact defaultExpandedKeys={['1', "2"]}>*/}
                        <div>
                            <p className={'font-bold pb-2'}>Рельс P50</p>
                            <Table aria-label="Example static collection table" radius={'none'}
                                   classNames={classNames}
                                   selectionMode="single"
                                   color={'primary'}
                                   removeWrapper
                            >
                                <TableHeader>
                                    >
                                    <TableColumn>Состав</TableColumn>
                                    <TableColumn>Количество(шт)</TableColumn>
                                    <TableColumn>Вес(кг)</TableColumn>
                                    <TableColumn>Вес за штуку(кг)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Рельс P50</TableCell>
                                        <TableCell>12</TableCell>
                                        <TableCell>7650</TableCell>
                                        <TableCell>637,5</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Полушпала</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   removeWrapper
                                   color={'primary'}

                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn>Состав</TableColumn>
                                    <TableColumn>Количество(шт)</TableColumn>
                                    <TableColumn>Вес(кг)</TableColumn>
                                    <TableColumn>Вес за штуку(кг)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Полушпала</TableCell>
                                        <TableCell>46</TableCell>
                                        <TableCell>3634</TableCell>
                                        <TableCell>79</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Подкладка</TableCell>
                                        <TableCell>46</TableCell>
                                        <TableCell>423,66</TableCell>
                                        <TableCell>9,21</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Гайка М22</TableCell>
                                        <TableCell>184</TableCell>
                                        <TableCell>21,16</TableCell>
                                        <TableCell>0,115</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Болт М24×80</TableCell>
                                        <TableCell>184</TableCell>
                                        <TableCell>68,08</TableCell>
                                        <TableCell>0,115</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>Шайба</TableCell>
                                        <TableCell>368</TableCell>
                                        <TableCell>11,04</TableCell>
                                        <TableCell>0,03</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Хомут</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   color={'primary'}
                                   removeWrapper
                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn>Состав</TableColumn>
                                    <TableColumn>Количество(шт)</TableColumn>
                                    <TableColumn>Вес(кг)</TableColumn>
                                    <TableColumn>Вес за штуку(кг)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Хомут</TableCell>
                                        <TableCell>184</TableCell>
                                        <TableCell>1090,2</TableCell>
                                        <TableCell>5,925</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Болт клеммный в сборе М22×75</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   color={'primary'}
                                   removeWrapper
                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn>Состав</TableColumn>
                                    <TableColumn>Количество(шт)</TableColumn>
                                    <TableColumn>Вес(кг)</TableColumn>
                                    <TableColumn>Вес за штуку(кг)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Болт клеммный</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>29,9</TableCell>
                                        <TableCell>0,325</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Клемма</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>56,58</TableCell>
                                        <TableCell>0,615</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Гровер</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>11,04</TableCell>
                                        <TableCell>0,12</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Болт М24×80</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>10,58</TableCell>
                                        <TableCell>0,115</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Болт М24×160</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   color={'primary'}
                                   removeWrapper
                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn>Состав</TableColumn>
                                    <TableColumn>Количество(шт)</TableColumn>
                                    <TableColumn>Вес(кг)</TableColumn>
                                    <TableColumn>Вес за штуку(кг)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Болт М24×160</TableCell>
                                        <TableCell>368</TableCell>
                                        <TableCell>241,04</TableCell>
                                        <TableCell>0,655</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Гайка М22</TableCell>
                                        <TableCell>368</TableCell>
                                        <TableCell>42,32</TableCell>
                                        <TableCell>0,115</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Гровер</TableCell>
                                        <TableCell>368</TableCell>
                                        <TableCell>44,16</TableCell>
                                        <TableCell>0,12</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Шайба</TableCell>
                                        <TableCell>368</TableCell>
                                        <TableCell>11,04</TableCell>
                                        <TableCell>0,03</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Отбойник</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   color={'primary'}
                                   removeWrapper
                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn>Состав</TableColumn>
                                    <TableColumn>Количество(шт)</TableColumn>
                                    <TableColumn>Вес(кг)</TableColumn>
                                    <TableColumn>Вес за штуку(кг)</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Отбойник</TableCell>
                                        <TableCell>8</TableCell>
                                        <TableCell>9</TableCell>
                                        <TableCell>1,125</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"w-full"}>
                    <CardHeader className="py-2 px-2 flex-col items-start">
                        {/*<div>*/}
                            <p className={'font-bold'}>Страховочный пакет 25 метров</p>
                            <p>Общий вес комплекта = 26 698,61 кг</p>
                        {/*</div>*/}
                    </CardHeader>
                    <Divider/>
                    <CardBody className="overflow-y-scroll max-h-[382px] py-2 px-2 flex flex-col gap-4">
                        {/*<Accordion selectionMode="multiple" variant={'splitted'} isCompact defaultExpandedKeys={['1', "2"]}>*/}
                            <div>
                                <p className={'font-bold pb-2'}>Рельс P50</p>
                                <Table aria-label="Example static collection table" radius={'none'}
                                       classNames={classNames}
                                       selectionMode="single"
                                       color={'primary'}
                                       removeWrapper
                                       // removeWrapper
                                >
                                    <TableHeader>
                                        <TableColumn className={'w-fit'}>Состав</TableColumn>
                                        <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                        <TableColumn className={'w-fit'}>Вес,кг</TableColumn>
                                        <TableColumn className={'w-fit'}>Вес за шт,кг</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow key="1">
                                            <TableCell>Рельс P50</TableCell>
                                            <TableCell>24</TableCell>
                                            <TableCell>15300</TableCell>
                                            <TableCell>637,5</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        <div>
                            <p className={'font-bold pb-2'}>Полушпала</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   removeWrapper
                                   color={'primary'}
                                   lined
                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={'w-fit'}>Состав</TableColumn>
                                    <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                    <TableColumn className={'w-fit'}>Вес,кг</TableColumn>
                                    <TableColumn className={'w-fit'}>Вес за шт,кг</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Полушпала</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>7268 </TableCell>
                                        <TableCell>79</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Подкладка</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>847,32</TableCell>
                                        <TableCell>9,21</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Гайка М22</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>42,326</TableCell>
                                        <TableCell>0,115</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Болт М24×80</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>136,16</TableCell>
                                        <TableCell>0,115</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>Шайба</TableCell>
                                        <TableCell>92</TableCell>
                                        <TableCell>22,08</TableCell>
                                        <TableCell>0,03</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Хомут</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   color={'primary'}
                                   removeWrapper
                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={'w-fit'}>Состав</TableColumn>
                                    <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                    <TableColumn className={'w-fit'}>Вес,кг</TableColumn>
                                    <TableColumn className={'w-fit'}>Вес за шт,кг</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Хомут</TableCell>
                                        <TableCell>368</TableCell>
                                        <TableCell>2180,4</TableCell>
                                        <TableCell>5,925</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Болт клеммный в сборе М22×75</p>
                            <Table
                            aria-label="Example static collection table"
                            classNames={classNames}
                            selectionMode="single"
                            color={'primary'}
                            removeWrapper
                        >
                            <TableHeader className={'bg-primary'}>
                                <TableColumn className={'w-fit'}>Состав</TableColumn>
                                <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                <TableColumn className={'w-fit'}>Вес,кг</TableColumn>
                                <TableColumn className={'w-fit'}>Вес за шт,кг</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell>Болт клеммный</TableCell>
                                    <TableCell>184</TableCell>
                                    <TableCell>59,8</TableCell>
                                    <TableCell>0,325</TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell>Клемма</TableCell>
                                    <TableCell>184</TableCell>
                                    <TableCell>113,16</TableCell>
                                    <TableCell>0,615</TableCell>
                                </TableRow>
                                <TableRow key="3">
                                    <TableCell>Гровер</TableCell>
                                    <TableCell>184</TableCell>
                                    <TableCell>22,08</TableCell>
                                    <TableCell>0,12</TableCell>
                                </TableRow>
                                <TableRow key="4">
                                    <TableCell>Болт М24×80</TableCell>
                                    <TableCell>184</TableCell>
                                    <TableCell>21,16</TableCell>
                                    <TableCell>0,115</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Болт М24×160</p>
                            <Table
                            aria-label="Example static collection table"
                            classNames={classNames}
                            selectionMode="single"
                            color={'primary'}
                            removeWrapper
                        >
                            <TableHeader className={'bg-primary'}>
                                <TableColumn className={'w-fit'}>Состав</TableColumn>
                                <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                <TableColumn className={'w-fit'}>Вес,кг</TableColumn>
                                <TableColumn className={'w-fit'}>Вес за шт,кг</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell>Болт М24×160</TableCell>
                                    <TableCell>736</TableCell>
                                    <TableCell>482,08</TableCell>
                                    <TableCell>0,655</TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell>Гайка М22</TableCell>
                                    <TableCell>736</TableCell>
                                    <TableCell>84,64</TableCell>
                                    <TableCell>0,115</TableCell>
                                </TableRow>
                                <TableRow key="3">
                                    <TableCell>Гровер</TableCell>
                                    <TableCell>736</TableCell>
                                    <TableCell>88,32</TableCell>
                                    <TableCell>0,12</TableCell>
                                </TableRow>
                                <TableRow key="4">
                                    <TableCell>Шайба</TableCell>
                                    <TableCell>736</TableCell>
                                    <TableCell>22,08</TableCell>
                                    <TableCell>0,03</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </div>
                        <div>
                            <p className={'font-bold pb-2'}>Отбойник</p>
                            <Table aria-label="Example static collection table"
                                   classNames={classNames}
                                   selectionMode="single"
                                   color={'primary'}
                                   removeWrapper
                            >
                                <TableHeader className={'bg-primary'}>
                                    <TableColumn className={'w-fit'}>Состав</TableColumn>
                                    <TableColumn className={'w-fit'}>Количество,шт</TableColumn>
                                    <TableColumn className={'w-fit'}>Вес,кг</TableColumn>
                                    <TableColumn className={'w-fit'}>Вес за шт,кг</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Отбойник</TableCell>
                                        <TableCell>8</TableCell>
                                        <TableCell>9</TableCell>
                                        <TableCell>1,125</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    {/*</div>*/}
                </CardBody>
            </Card>
                {/*<div>*/}
                {/*    <p className={'font-bold'}>Страховочный пакет 12,5 метров</p>*/}
                {/*    <p>Общий вес комплекта = 13 353,80 кг</p>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <p className={'font-bold'}>Страховочный пакет 25 метров</p>*/}
                {/*    <p>Общий вес комплекта = 26 698,61 кг</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default PackingOfSafetyBags;