import React, {Suspense} from 'react'
import {Card, CardBody} from "@nextui-org/card";
import {Button, Image} from "@nextui-org/react";

const Page = async() => {

    return (
        <Suspense>
            <div className={'w-full max-w-7xl px-8 mx-auto mt-10 h-full flex flex-col text-start gap-8'}>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={'text-3xl font-bold'}>Выполненные работы</h2>
                    <p className={''}>
                        Примеры выполненных работы по установке страховочных пакетов и перечень компаний, которые с нами сотрудничают.
                    </p>
                </div>

                <div className={'grid grid-cols-1 gap-6 '}>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                            <Image
                                alt="NextUI logo"
                                src="/oborudovaniye-i-tekhnika.jpg"
                                width={'100%'}
                                height={'100%'}
                            />
                            <div className={'flex flex-col justify-between'}>
                                <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых пакета
                                    за <span className={'font-bold text-xl'}>X</span> дней.
                                </p>
                                <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                            </div>

                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                            <Image
                                alt="NextUI logo"
                                src="/oborudovaniye-i-tekhnika.jpg"
                                width={'100%'}
                                height={'100%'}
                            />
                            <div className={'flex flex-col justify-between'}>
                                <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых пакета
                                    за <span className={'font-bold text-xl'}>X</span> дней.
                                </p>
                                <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                            </div>

                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                            <Image
                                alt="NextUI logo"
                                src="/oborudovaniye-i-tekhnika.jpg"
                                width={'100%'}
                                height={'100%'}
                            />
                            <div className={'flex flex-col justify-between'}>
                                <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых пакета
                                    за <span className={'font-bold text-xl'}>X</span> дней.
                                </p>
                                <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                            <Image
                                alt="NextUI logo"
                                src="/oborudovaniye-i-tekhnika.jpg"
                                width={'100%'}
                                height={'100%'}
                            />
                            <div className={'flex flex-col justify-between'}>
                                <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых пакета
                                    за <span className={'font-bold text-xl'}>X</span> дней.
                                </p>
                                <Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Suspense>
    )
}

export default Page