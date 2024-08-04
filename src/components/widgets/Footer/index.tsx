import {Button, Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";
import {Mail, Phone} from "lucide-react";
import React from "react";
import Link from "next/link";
import OrderServiceModal from "@/components/widgets/forms/OrderServiceModal";


const Footer = () => {

    return (
        <div className={'w-full bg-content1 mt-10 pt-4'}>
            <div
                className={'w-full mx-auto px-8 h-full flex flex-col lg:flex-row justify-between py-1 items-center gap-4 max-w-7xl'}>
                <div>
                    <Image
                        width={'150'}
                        height={'150'}
                        alt="NextUI hero Image"
                        src="/img_1.png"
                    />
                </div>

                {/*<p>+7 (926) 563-11-07</p>*/}
                <div className={'flex flex-col gap-1.5 items-center justify-center'}>
                    <p className={'font-bold text-xl w-full text-center'}>Контакты</p>
                    <Chip color={'primary'} size={'lg'}>
                        <a href="tel:+74951390095" className={'flex gap-2 items-center'}>
                            <Phone/>+7 (495) 139-00-95
                        </a>
                    </Chip>
                    <Chip color={'primary'} size={'lg'}>
                        <a href="tel:+79015531520" className={'flex gap-2 items-center'}>
                            <Phone/>+7 (901) 553-15-20
                        </a>
                    </Chip>
                    <Chip color={'primary'} size={'lg'}>
                        <a href="mailto:info@bzdgroup.ru" className={'flex gap-2 items-center'}>
                            <Mail/>info@bzdgroup.ru
                        </a>
                    </Chip>
                </div>
                <div className={'flex flex-col gap-1.5 justify-between'}>
                    <OrderServiceModal/>
                    {/*<Button color={'primary'} variant={'solid'} size={'lg'} className={'px-8 w-fit'}>Рассчитать*/}
                    {/*    стоимость</Button>*/}
                    <Link href={'/projects/'} className={'text-primary'}>
                        <Button color={'primary'} variant={'ghost'} size={'lg'} className={'px-2 w-fit'}>Выполненные работы</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Footer
