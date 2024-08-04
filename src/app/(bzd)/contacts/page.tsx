import React, {Suspense} from 'react'
import {Card, CardBody} from "@nextui-org/card";
import {Button, Image} from "@nextui-org/react";
import {Mail, MapPin, Phone} from "lucide-react";
import {Input} from "@nextui-org/input";
import ContactForm from "@/components/widgets/forms/ContactForm";

const Page = async() => {
    
    return (
        <Suspense>
            <div className={'w-full max-w-7xl px-8 mx-auto mt-10 h-full flex flex-col text-start gap-8'}>
                <div className={'flex flex-col gap-2'}>
                    <h2 className={'text-3xl font-bold'}>Наши контакты</h2>
                    <p className={''}>
                        Имеются вопросы? Свяжитесь с нами любым удобным для вас.
                    </p>
                </div>
                <div className={'grid grid-cols-1 lg:grid-cols-3 gap-6 '}>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 justify-between gap-4">
                            <div className={'flex flex-col gap-4'}>
                                <p className={'font-bold text-xl'}>Телефон</p>
                                <a href="tel:+74951390095" className={'w-fit flex gap-2 items-center'}>
                                    <Phone className={'text-primary'}/>+7 (495) 139-00-95
                                </a>
                                <a href="tel:+79015531520" className={'w-fit flex gap-2 items-center'}>
                                    <Phone className={'text-primary'}/>+7 (901) 553-15-20
                                </a>
                            </div>

                        </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                    <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 justify-between gap-4">
                        <div className={'flex flex-col gap-4'}>
                                <p className={'font-bold text-xl'}>Электронная почта</p>
                            <div className={'h-full w-full flex flex-col gap-2 justify-start pt-2'}>
                                <a href="mailto:info@bzdgroup.ru" className={'w-fit flex gap-2 items-center'}>
                                    <Mail className={'text-primary'}/>info@bzdgroup.ru
                                </a>
                            </div>
                        </div>

                    </CardBody>
                    </Card>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 justify-between gap-4">
                            <div className={'flex flex-col gap-4'}>
                                <p className={'font-bold text-xl'}>Адрес</p>
                                <p className={'flex gap-2 items-center'}>
                                    <MapPin className={'text-primary w-6'}/>
                                    Москва, ул. Мосфильмовская, д. 17Б, эт 2 пом I ком 5
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className={'grid grid-cols-1 gap-6'}>
                    <Card className={"w-full hover:shadow-2xl transition-shadow"}>
                        <CardBody className="overflow-hidden py-2 px-2 grid grid-cols-1 justify-between gap-4">
                            <div className={'flex flex-col gap-4'}>
                                <p className={'font-bold text-xl'}>Контактная форма</p>
                                <ContactForm/>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Suspense>
    )
}

export default Page