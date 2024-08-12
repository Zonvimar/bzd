import React, {Suspense} from 'react'
import {Card, CardBody} from "@nextui-org/card";
import {Button, Image} from "@nextui-org/react";

const Page = async() => {

    return (
        <Suspense>
            <div className={'w-full max-w-7xl px-4 mx-auto mt-10 h-full flex flex-col text-start gap-8'}>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={'text-3xl font-bold'}>Выполненные работы</h2>
                    <p className={''}>
                        Несколько наших выполненных проектов по установке страховочных пакетов для железных дорог.
                    </p>
                </div>

                <div className={'grid grid-cols-1 gap-6 '}>
                    <Card className={"w-full hover:transition-all hover:shadow-2xl"}>
                        <CardBody className="overflow-hidden p-0 flex flex-col lg:flex-row justify-start gap-4">
                            <img className={'h-[250px] w-[450px] rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none object-cover'} alt=" "
                                 src="/project1.jpg"
                            />
                            <div className={'flex flex-col justify-center gap-4 px-2 pb-2'}>
                                <p className={'font-bold text-xl'}>
                                    Монтаж, обслуживание и демонтаж рельсовых страховочных пакетов L = 50 м.
                                    на I  и II главных путях Курского направления МЖД, L = 75 м. на соединительных
                                    ветках малого кольца МЖД - №15, №16, попадающих в зону влияния строительства объекта
                                </p>
                                <p>
                                    «Восточный участок Третьего пересадочного контура (ТПК) ст. «Каширская» -
                                    ст. «Карачарово». 11 этап: «Подготовительные работы для организации строительства
                                    щитовой проходки перегонных тоннелей на участке линии от строительной площадки №8
                                    до ст. «Текстильщики». Точка пересечения №2.
                                </p>
                            </div>

                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:transition-all hover:shadow-2xl"}>
                        <CardBody className="overflow-hidden p-0 flex flex-col-reverse lg:flex-row justify-start gap-4">

                            <div className={'flex flex-col justify-center gap-4 px-2 pb-2'}>
                                <p className={'font-bold text-xl'}>
                                    Монтаж, обслуживание и демонтаж рельсовых страховочных пакетов в точке 1.1 L = 25 м.
                                    на I, II, III и IV главных путях Казанского направления МЖД по объекту:
                                </p>
                                <p>
                                    «Северо-Восточный участок Третьего пересадочного контура (ТПК) ст. «Нижняя Масловка»
                                    - ст. «Авиамоторная». Этап 1.1.1. Этап 1.1.2. Корректировка. Этап 1.1.2.1
                                    «Пересадка на действующую станцию «Электрозаводская».
                                    Арбатско-Покровской линии Московского метрополитена».
                                </p>
                            </div>
                            <img
                                className={'h-[250px] w-[450px] rounded-t-xl lg:rounded-r-xl lg:rounded-l-none object-cover'}
                                alt=" "
                                src="/project2.jpg"
                            />
                        </CardBody>
                    </Card>

                    <Card className={"w-full hover:transition-all hover:shadow-2xl"}>
                        <CardBody className="overflow-hidden p-0 flex flex-col lg:flex-row justify-start gap-4">
                            <img className={'h-[250px] w-[450px] rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none object-cover'} alt=" "
                                 src="/project4.jpg"
                            />
                            <div className={'flex flex-col justify-center gap-4 px-2 pb-2'}>
                            <p className={'font-bold text-xl'}>
                                Монтаж, обслуживание и демонтаж рельсовых страховочных пакетов L = 25 м.
                                на I, II и III главных путях Казанского направления МЖД по объекту:
                            </p>
                                <p>
                                    «Кожуховская линия ст. «Авиамоторная»-  ст. «Некрасовка».
                                    Этап: «Подготовка территории». 1 этап: «Подготовка территории для строительства
                                    станции «Авиамоторная» при строительстве канализации на участках пересечения
                                    с железнодорожными линиями ОАО "РЖД" ГК31-ВК-32
                                </p>
                                {/*<Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>*/}
                            </div>
                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:transition-all hover:shadow-2xl"}>
                        <CardBody className="overflow-hidden p-0 flex flex-col-reverse lg:flex-row justify-start gap-4">
                            {/*</div>*/}

                            <div className={'flex flex-col justify-center gap-4 px-2 pb-2'}>
                                <p className={'text-xl font-bold'}>
                                    Монтаж, обслуживание и демонтаж рельсовых страховочных пакетов L = 12,5 м.
                                    для работ по выполнению горизонтально направленного бурения (ГНБ)
                                    на пути пересечений I, II, III и IV главных путей и стрелочного съезда 11-13 СП МЦК
                                    на объекте:
                                </p>
                                <p>
                                    Монтаж, обслуживание и демонтаж рельсовых страховочных пакетов L = 50 м.
                                    на I и II главных путях Курского направления МЖД, L = 75 м. на соединительных
                                    ветках малого кольца МЖД - №15, №16, попадающих в зону влияния строительства объекта
                                </p>
                            </div>
                            <img
                                className={'h-[250px] w-[450px] rounded-t-xl lg:rounded-r-xl lg:rounded-l-none object-fill'}
                                src="/project3.jpg" alt={' '}
                            />
                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:transition-all hover:shadow-2xl"}>
                        <CardBody className="overflow-hidden p-0 flex flex-col lg:flex-row justify-start gap-4">
                            <img className={'h-[250px] w-[450px] rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none object-none'} alt=" "
                                 src="/project5.png"
                            />
                            <div className={'flex flex-col justify-center gap-4 px-2 pb-2'}>
                            <p className={'font-bold text-xl'}>
                                Монтаж, обслуживание и демонтаж рельсовых страховочных пакетов в количестве 7шт.
                                на 10км ПК7+3 м.  L = 12,5 на I и II главных путях, 11а, 1, 2, 15в,
                                15е станционных путях Курского направления МЖД на объекте:
                            </p>
                                <p>
                                    «Строительство многоуровневых транспортных развязок,
                                    в том числе с Курским направлением железной дороги, переустройство инженерных сетей
                                    и коммуникаций с необходимой для их функционирования улично-дорожной сетью на
                                    участке от Третьего транспортного кольца до ул.
                                    Люблинской с необходимой для их функционирования улично-дорожной сетью».
                                    Этап 2. По адресу: г.Москва, ЮВАО, р-н Печатники».
                                </p>
                                {/*<Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>*/}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Suspense>
    )
}

export default Page