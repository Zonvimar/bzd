import {Button, Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";
import {Mail, Phone} from "lucide-react";
import React from "react";


const Footer = () => {

    return (
        <div className={'w-full bg-content1 mt-4'}>
            <div
                className={'w-full mx-auto px-8 h-full flex flex-col lg:flex-row justify-between py-1 items-center gap-4 max-w-7xl'}>
                <Image
                    width={'150'}
                    height={'150'}
                    alt="NextUI hero Image"
                    src="/img_1.png"
                />
                {/*<p>+7 (926) 563-11-07</p>*/}
                <div className={'flex flex-col gap-1.5 items-start justify-center'}>
                    <p className={'font-bold text-xl w-full text-center'}>Контакты</p>
                    <Chip color={'primary'} size={'lg'}>
                        <a href="tel:+74951390095" className={'w-fit flex gap-2 items-center'}>
                            <Phone/>+7 (495) 139-00-95
                        </a>
                    </Chip>
                    <Chip color={'primary'} size={'lg'}>
                        <a href="tel:+79265631107" className={'w-fit flex gap-2 items-center'}>
                            <Phone/>+7 (926) 563-11-07
                        </a>
                    </Chip>
                    <Chip color={'primary'} size={'lg'}>
                        <a href="mailto:rzd.bzd@gmail.com" className={'w-fit flex gap-2 items-center'}>
                            <Mail/>rzd.bzd@gmail.com
                        </a>
                    </Chip>
                </div>
                <div className={'flex flex-col gap-1.5 justify-between'}>
                    <Button color={'primary'} variant={'solid'} size={'lg'} className={'px-8 w-fit'}>Рассчитать
                        стоимость</Button>
                    <Button color={'primary'} variant={'ghost'} size={'lg'} className={'px-8 w-fit'}>Выполненные работы</Button>
                </div>
            </div>
        </div>

    )
}

export default Footer
