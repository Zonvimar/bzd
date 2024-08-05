import React, {Suspense} from 'react'
import {Card, CardBody} from "@nextui-org/card";
import {Badge, Button, Divider, Image} from "@nextui-org/react";
import ServicesHeader from "@/components/widgets/ServicesHeader";
import {Chip} from "@nextui-org/chip";
import {Check} from "lucide-react";

const Page = async() => {

    return (
        <Suspense>
            <div
                className={'bg-[url("/vacancies.jpg")] text-center sm:text-left flex items-center justify-center bg-cover bg-center bg-no-repeat h-[600px] backdrop-blur-lg'}>
                <div
                    className={'w-full bg-black/70 h-full'}>
                    {/*<div>*/}
                    <div
                        className={'w-full mx-auto items-center px-8 h-full flex flex-col justify-center gap-4 max-w-7xl'}>
                        <h1 className={'text-white text-3xl lg:text-5xl font-bold flex gap-2 items-center'}>
                            <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                            Вакансии
                            <hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>
                        </h1>
                        <p className={'text-white text-xl font-light text-center'}>
                            КОЛЛЕКТИВ - ЭТО НАША ОСНОВНАЯ ЦЕННОСТЬ И БОГАТСТВО
                        </p>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
            <div className={'w-full max-w-7xl px-8 mx-auto mt-10 h-full flex flex-col text-start gap-8'}>
                <div className={'grid grid-cols-1 gap-6'}>
                    <div
                        className={'grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 '}>
                        <div className={'flex gap-4'}>
                            <Divider orientation={'vertical'} className={'w-1 bg-primary lg:flex hidden'}/>
                            <p className={''}>
                                Компания ООО «БЖД» является одним из лидеров на рынке по установке страховочных
                                рельсовых объектов.
                                Высококвалифицированный персонал - это залог успеха работы нашей компании.
                                Наша компания открыта как для молодых специалистов, так и для опытных профессионалов.
                                <br/><br/>
                                Если Вам интересна работа в стабильной компании, имеющей все возможности для карьерного
                                роста , свяжитесь с нами.
                            </p>
                        </div>
                        <div className={'flex justify-end mx-auto pl-0 lg:pl-28'}>
                            <div className={'grid grid-cols-1 justify-end gap-3 lg:mx-auto items-center'}>
                                <p className={'font-bold'}><span className={'font-bold text-center text-3xl'}>Ведем набор сотрудников</span>
                                </p>
                                <div
                                    className={'lg:grid lg:grid-cols-2 flex flex-wrap justify-center items-center gap-4'}>
                                    <div className={'flex justify-start items-center'}>
                                        <Chip color={'primary'} size={'lg'}>Путейцы</Chip>
                                    </div>
                                    <div className={'flex justify-end items-center'}>
                                        <Chip color={'primary'} size={'lg'}>Сигналисты</Chip>
                                    </div>
                                    <div className={'flex justify-center items-center col-span-2'}>
                                        <Chip color={'primary'} size={'lg'} className={''}>Мастера дорожники</Chip>
                                    </div>
                                    <div className={'flex justify-start items-center'}>
                                        <Chip color={'primary'} size={'lg'}>Монтеры пути</Chip>
                                    </div>
                                    <div className={'flex justify-end items-center'}>
                                        <Chip color={'primary'} size={'lg'}>Бригадиры</Chip>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'flex justify-between w-full gap-6'}>
                    <div className={'w-full flex justify-center gap-3 flex-col'}>
                        <div className={'w-full'}>
                            <div className={'flex flex-col gap-2'}>
                                <h2 className={'text-3xl font-bold'}>
                                    Требования
                                </h2>
                                <div className={'flex flex-col pt-4 gap-6 h-full'}>
                                    <div className={'flex gap-2 items-start w-full'}>
                                        <div className={'text-primary w-8'}>
                                            <Check className={'w-8'}/>
                                        </div>
                                        <p>Образование: не ниже среднего профессионального</p>
                                    </div>
                                    <div className={'flex gap-2 items-start w-full'}>
                                        <div className={'text-primary w-8'}>
                                            <Check className={'w-8'}/>
                                        </div>
                                        <p>Опыт работ на железной дороге приветствуется</p>
                                    </div>
                                    <div className={'flex gap-2 items-start w-full'}>
                                        <div className={'text-primary w-8'}>
                                            <Check className={'w-8'}/>
                                        </div>
                                        <p>Наличие водительского удостоверения кат. В приветствуется</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full pt-5'}>
                            <div className={'flex flex-col gap-2'}>
                                <h2 className={'text-3xl font-bold'}>
                                    Условия
                                </h2>
                                <div className={'grid grid-cols-1 w-full pt-4 gap-6'}>
                                    <div className={'flex gap-2 items-start w-full'}>
                                        <div className={'text-primary w-8'}>
                                            <Check className={'w-8'}/>
                                        </div>
                                        <p>Официальное трудоустройство, согласно ТК РФ.</p>
                                    </div>
                                    <div className={'flex gap-2 items-start w-full'}>
                                        <div className={'text-primary w-8'}>
                                            <Check className={'w-8'}/>
                                        </div>
                                        <p>Выплата заработной платы 2 раза в месяц</p>
                                    </div>
                                    <div className={'flex gap-2 items-start w-full'}>
                                        <div className={'text-primary w-8'}>
                                            <Check className={'w-8'}/>
                                        </div>
                                        <p>Возможны командировки</p>
                                    </div>
                                    <div className={'flex gap-2 items-start w-full'}>
                                        <div className={'text-primary w-8'}>
                                            <Check className={'w-8'}/>
                                        </div>
                                        <p>Компенсация проезда от дома до места командирования.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full pt-5'}>
                            <div className={'flex flex-col gap-2'}>
                                <h2 className={'text-3xl font-bold'}>
                                    Отдел кадров
                                </h2>
                                <div className={'grid grid-cols-1 w-full pt-2 gap-3'}>
                                    <p><span className={'font-bold'}>Телефон:</span> +7(495) 139-00-95</p>
                                    <p>Информацию о себе направляйте по адресу <a href={'mailto:info@bzdgroup.ru'} className={'text-primary underline font-bold'}>info@bzdgroup.ru</a>,<br/>
                                        с пометкой <span className={'font-bold'}>«Для отдела кадров»</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex h-[70%]'}>
                        <Image
                            src={'/vacancies-2.jpg'}
                            width={'100%'}
                            height={'75%'}
                            className={'object-cover hidden lg:block'} removeWrapper
                        />
                    </div>
                </div>

            </div>
        </Suspense>
)
}

export default Page