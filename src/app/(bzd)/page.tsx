import React from 'react'
import {Button, Image} from "@nextui-org/react";
import PackingOfSafetyBags from "@/components/widgets/PackingOfSafetyBags";
import CooperationOptions from "@/components/widgets/CooperationOptions";

const Page = async({searchParams}) => {

    return (
        <div className={'flex flex-col gap-6'}>
            <div
                className={'bg-[url("/banner.jpg")] text-center sm:text-left flex items-center justify-center bg-cover bg-center bg-no-repeat h-[600px] backdrop-blur-lg'}>
                <div
                    className={'w-full bg-black/60 h-full'}>
                    {/*<div>*/}
                    <div className={'w-full mx-auto px-8 h-full flex flex-col justify-center gap-4 max-w-7xl'}>
                        <h1 className={'text-white text-3xl lg:text-5xl font-bold'}>Страховочные<br/>
                            рельсовые пакеты<br/>
                            на железной дороге
                        </h1>
                        <p className={'text-white text-xl font-light'}>
                            Производим, предоставляем в аренду и устанавливаем <br/>
                            рельсовые страховочные пакеты с 2017 года.
                        </p>
                        <p className={'text-white text-xl font-light flex gap-2 items-center'}><hr className={'w-8 h-0.5 bg-primary rounded border-0'}/>Работаем по всей России</p>
                        <Button color={'primary'} variant={'solid'} size={'lg'} className={'px-8 w-fit'}>Заказать услугу</Button>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
            <div
                className={'w-full mx-auto flex flex-col items-center justify-center max-w-7xl px-2 lg:px-8 gap-4'}>
                <div
                    className={'w-full h-full flex flex-col lg:flex-row items-center justify-between gap-4'}>
                    {/*<div>*/}
                    {/*<div className={'items-center justify-center flex'}>*/}
                        <Image
                            width={'100%'}
                            height={'70%'}
                            alt="NextUI hero Image"
                            src="/o-nas.jpg"
                            objectFit={'cover'}
                        />
                    {/*</div>*/}

                    {/*<p className={''}>*/}
                    {/*    ФОТКИ*/}
                    {/*</p>*/}
                    <div className={'flex flex-col gap-4'}>
                        {/*<div className={'flex flex-col gap-4'}>*/}
                            <h2 className={'text-3xl font-bold'}>
                                О нас
                            </h2>
                            <p className={''}>
                                Компания «ЖелДорСпецПроект» с 2017 года выполняет работы по установке<br/>
                                рельсовых страховочных пакетов «под ключ». Комплексный подход обеспечивает<br/>
                                нам возможность контроля над всеми процессами, а заказчику – точное и быстрое<br/>
                                выполнение задачи в полном соответствии с нормами «РЖД».
                            </p>
                            <p>
                                Поручите установку рельсовых страховочных пакетов нам: мы разработаем и<br/>
                                согласуем ППР, доставим конструкцию на место проведения работ, произведем<br/>
                                монтаж согласно всем нормам и правилам ОАО "РЖД". Нашей материальной базы<br/>
                                достаточно для выполнения самых крупных заказов: в наличии более 40<br/>
                                комплектов страховочных пакетов.
                            </p>
                            <p>
                                Стоимость установки страховочного рельсового пакета зависит от даты<br/>
                                проведения работ, местонахождения объекта: если он расположен рядом с тем,<br/>
                                что мы взяли в работу, вы можете рассчитывать на скидку до 40% от базового<br/>
                                тарифа.
                            </p>
                        {/*</div>*/}

                        <Button color={'primary'} variant={'ghost'} size={'lg'} className={'px-8 w-fit'}>Выполненные
                            работы</Button>
                    </div>
                    {/*</div>*/}
                </div>
                {/*////*/}
                <PackingOfSafetyBags/>
                <CooperationOptions/>
                <div className={'h-96'}>

                </div>
            </div>
        </div>
    )
}

export default Page