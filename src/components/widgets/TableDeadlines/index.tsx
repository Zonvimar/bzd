'use client'
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import React from "react";


const TableDeadlines = () => {
    return (
        <div className={'w-full'}>
            <div className={'flex flex-col gap-2 pb-6'}>
                <h2 className={'text-3xl font-bold'}>
                    Длительность установки страховочных пакетов
                </h2>
                <p className={''}>
                    Срок выполнения 35 дней*
                </p>
            </div>
            <table className="w-full text-primary-foreground">
                <thead className={'py-2'}>
                <tr>
                    <td className=" w-[20px] fw-medium bg-primary px-2 py-3">Задача</td>
                    <td className="border-r border-black/20 w-[20px] fw-medium text-center bg-primary px-6 py-3"
                        colSpan={70}>Сроки выполнения работ
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border-none shadow-sm bg-primary opacity-80 px-4 py-2">1. Подписание
                        договора
                    </td>
                    <td className="text-center bg-primary text-white">1</td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                </tr>
                <tr>
                    <td className="border-none bg-primary opacity-80 px-4 py-2">2. Разработка
                        ППР на страхпакет
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className="text-center bg-primary text-white" colSpan={3}>3 дня*</td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                </tr>
                <tr>
                    <td className="border-none shadow-md bg-primary opacity-80 px-4 py-2">
                        3. Инструментальная проверка коммуникаций,
                        Согласование ППР на страхпакет,
                        Договор на технадзор
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className="text-center bg-primary text-white" rowSpan={4} colSpan={10} data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Проверка наличия инженерных коммуникаций, установка временных знаков в местах их расположения в зоне производства работ. Разработка мероприятий по обеспечению сохранности инженерных и кабельных коммуникаций.">23
                        дня*
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                </tr>
                <tr>
                    <td className="border-none bg-primary opacity-60 px-6 py-2">3.1. Создание
                        комиссии по инструментальной проверке
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                </tr>
                <tr>
                    <td className="border-none bg-primary opacity-60 px-6 py-2">3.2.
                        Комиссионный осмотр места работ
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                </tr>
                <tr>
                    <td className="border-none bg-primary opacity-60 px-6 py-2">3.2.
                        подразделениях ОАО РЖД документов
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                </tr>
                <tr>
                    <td className="border-none shadow-sm bg-primary opacity-80 px-4 py-2">4. Получение
                        акта-допуска
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className="text-center bg-primary text-white" colSpan={5} data-bs-toggle="tooltip">5 дней*</td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                </tr>
                <tr>
                    <td className="border-b border-black/20 shadow-sm bg-primary opacity-80 px-4 py-2">5. Установка
                        страхпакета
                    </td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className={'border border-black/20 w-[20px]'}></td>
                    <td className="border-b border-r border-black/20 text-center bg-primary text-white" colSpan={3}>3
                        дня*
                    </td>

                </tr>
                {/*    /!*<tr>*!/*/}
                {/*    /!*    <td className="bg-primary bg-opacity-30">7. Установка страхпакета</td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td></td>*!/*/}
                {/*    /!*    <td className="border-black/20 border text-center" colSpan="3" data-bs-toggle="tooltip"*!/*/}
                {/*    /!*        data-bs-placement="bottom"*!/*/}
                {/*    /!*        data-bs-title="Производится очистка рельсошпальных ящиков от щебня. В каждый рельсошпальный ящик прикрепляется полушпалок на подошву путевого рельса. С каждой стороны путевого рельса на полушпалки укладывается пакет, состоящий из трех рельс. Каждый пакет крепится к полушпалкам хомутами. На каждый пакет прикрепляется щитки с маркировкой, улучшающий визуальную видимость страховочного пакета.">3*!/*/}
                {/*    /!*        дня**!/*/}
                {/*    /!*    </td>*!/*/}
                {/*    /!*</tr>*!/*/}
                {/*    /!*<tr>*!/*/}
                {/*    /!*    <td className="fw-medium bgbg-primary bg-opacity-20">Итого длительность установки:</td>*!/*/}
                {/*    /!*    <td className="text-center text-light bg-primary" colSpan="45">45 дней*</td>*!/*/}
                {/*    /!*</tr>*!/*/}
                </tbody>
            </table>
        </div>
    )
}

export default TableDeadlines;