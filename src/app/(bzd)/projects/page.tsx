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
                        Несколько наших выполненных проектов по установке страховочных пакетов для железных дорог.
                    </p>
                </div>

                <div className={'grid grid-cols-1 gap-6 '}>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 flex flex-col lg:flex-row justify-start gap-4">
                            <img className={'h-[250px] rounded-xl object-cover'} alt="NextUI logo"
                                 src="/project-1.jpg"
                                 width={450}
                                 height={200}
                            />
                            <div className={'flex flex-col justify-center gap-4'}>
                                <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых пакета
                                    <br/>за <span className={'font-bold text-xl'}>X</span> дней.
                                </p>
                                {/*<Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>*/}
                            </div>

                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 flex flex-col lg:flex-row justify-start gap-4">
                            <img className={'h-[250px] rounded-xl object-cover'} alt="NextUI logo"
                                 src="/project-2.jpg"
                                 width={450}
                                 height={200}
                            />
                            <div className={'flex flex-col justify-center gap-4'}>
                                <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых
                                    пакета
                                    <br/>за <span className={'font-bold text-xl'}>X</span> дней.
                                </p>
                                {/*<Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>*/}
                            </div>

                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 flex flex-col lg:flex-row justify-start gap-4">
                            <img className={'h-[250px] rounded-xl object-cover'} alt="NextUI logo"
                                 src="/project-3.jpg"
                                 width={450}
                                 height={200}
                            />
                            <div className={'flex flex-col justify-center gap-4'}>
                                <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых
                                    пакета
                                    <br/>за <span className={'font-bold text-xl'}>X</span> дней.
                                </p>
                                {/*<Button className={'w-fit px-8'} variant={'ghost'} color={'primary'}>Подробнее</Button>*/}
                            </div>
                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 flex flex-col lg:flex-row justify-start gap-4">
                            <img className={'h-[250px] rounded-xl object-cover'} alt="NextUI logo"
                                 src="/project-4.jpg"
                                 width={450}
                                 height={200}
                            />
                            <div className={'flex flex-col justify-center gap-4'}>
                            <p className={'font-bold text-xl'}>Страховочный пакет ООО</p>
                                <p>
                                    Устанновили <span className={'font-bold text-xl'}>X</span> страховчных рельсовых
                                    пакета
                                    <br/>за <span className={'font-bold text-xl'}>X</span> дней.
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