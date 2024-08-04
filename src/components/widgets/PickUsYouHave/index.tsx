import {Divider} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/card";
import {Forklift, Handshake, Truck, Users, UsersRound, Wrench} from "lucide-react";
import React from "react";


const PickUsYouHave = () => {
    return (
        <div className={'flex flex-col text-start gap-8 h-full'}>
            <div className={'flex flex-col gap-2'}>
                <h2 className={'text-3xl font-bold'}>
                    Выбирая нас вы получите
                </h2>
            </div>
            <div className={'w-full grid grid-cols-1 lg:grid-cols-3 items-stretch justify-between gap-4'}>

                <Card className={'w-full hover:transition-all hover:shadow-2xl duration-100 hover:scale-105 delay-100'}>
                    {/*<CardBody className="py-2 px-2 flex flex-col lg:flex-row gap-4">*/}
                    <CardBody>
                        <div className={'flex flex-col justify-start gap-4 items-center text-center'}>
                            <div className={'text-primary w-12 h-12'}>
                                <UsersRound className={'w-12 h-12'} strokeWidth={1.25}/>
                            </div>
                            <p className={'font-bold'}>
                                КВАЛИФИКАЦИЯ
                            </p>
                            <p>
                                Специалисты нашей компании имеют многолетний богаты опыт работы в структуре ОАО «РЖД».
                                Кадровая политика – основное направление в повышении квалификации
                                и производству работ в области строительства и ремонта железнодорожной инфраструктуры.
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={'w-full hover:transition-all hover:shadow-2xl duration-100 hover:scale-105 delay-100'}>
                    <CardBody>
                        <div className={'flex flex-col justify-start gap-4 items-center text-center'}>
                            <div className={'text-primary w-12 h-12'}>
                                <Wrench className={'w-12 h-12'} strokeWidth={1.25}/>
                                {/*<Forklift >*/}
                            </div>
                            <p className={'font-bold'}>
                                ТЕХНОЛОГИЧНОСТЬ
                            </p>
                            <p>
                                В своей работе по ремонту и реконструкции железнодорожных путей используем передовые
                                технологии с использованием современных машин, механизмов и средств малой механизации
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={'w-full hover:transition-all hover:shadow-2xl duration-100 hover:scale-105 delay-100'}>
                    <CardBody>
                        <div className={'flex flex-col justify-start pt-2 gap-4 items-center text-center'}>
                            <div className={'text-primary w-12 h-12'}>
                                <Handshake className={'w-12 h-12'} strokeWidth={1.25}/>
                                {/*<Truck />*/}
                            </div>
                            <p className={'font-bold'}>
                                КЛИЕНТООРИЕНТИРОВАННОСТЬ
                            </p>
                            <p>
                                Мы гарантируем ответственный и надежный подход к поставленным задачам, их своевременное
                                выполнение соблюдая нормативы по охране труда и требования по обеспечению безопасности
                                движения поездов.
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default PickUsYouHave;