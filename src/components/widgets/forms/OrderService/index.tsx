'use client'
import {Button, Select, SelectItem} from "@nextui-org/react";
import {Phone} from "lucide-react";
import React, {useState} from "react";
import ModalComponent from "@/components/shared/ModalComponent";
import {Pencil1Icon} from "@radix-ui/react-icons";
import {Input, Textarea} from "@nextui-org/input";


const OrderService = ({defaultValue}: {defaultValue?: 'turnKey' | 'rent' | 'buy' | 'install'}) => {
    const [open, setOpen] = useState(false)
    const [service, setService] = useState<string>(defaultValue)

    const services = [
        {key: "turnKey", label: "Под ключ"},
        {key: "rent", label: "Аренда"},
        {key: "buy", label: "Покупка"},
        {key: "install", label: "Установка"},
    ];
    const lengths = [
        {key: "12,5", label: "12,5 метров"},
        {key: "25", label: "25 метров"},
    ];

    const waysGetting = [
        {key: "delivery", label: "Доставка"},
        {key: "pickup", label: "Самовывоз"},
    ]

    return (
        <ModalComponent
            modalSize={'sm'}
            label={'Оформление услуги'}
            nonButtonTrigger={
                <Button color={'primary'} onClick={() => setOpen(true)} variant={'solid'} size={'lg'} className={'px-8 w-auto lg:w-fit'}>
                    Заказать услугу
                </Button>
            }
            buttonVariant={'solid'}
            modalHeader={"Оформление услуги"}
            setOpen={setOpen}
            open={open}
        >
            <form className={'flex flex-col gap-4'}>
                <Select
                    label="Услуга"
                    placeholder="Выберите услугу"
                    defaultSelectedKeys={defaultValue ? [defaultValue] : undefined}
                    name={'service'}
                    onChange={(e) => setService(e.target.value)}
                    isRequired
                >
                    {services.map((service) => (
                        <SelectItem key={service.key}>
                            {service.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Длина страховочного пакета"
                    placeholder="Выберите длину"
                    name={'length'}
                    defaultSelectedKeys={['12,5']}
                    isRequired
                >
                    {lengths.map((length) => (
                        <SelectItem key={length.key}>
                            {length.label}
                        </SelectItem>
                    ))}
                </Select>
                <Input label={'Необходимое количество пакетов'} name={'count'} variant={'faded'} isRequired/>
                {service === 'rent' && <Input label={'Срок аренды'} name={'rent'} variant={'faded'} isRequired/>}
                {service === 'rent' || service === 'buy' &&
                    <Select
                    label="Способ получения"
                    placeholder="Выберите способ"
                    name={'wayGetting'}
                    defaultSelectedKeys={['delivery']}
                    isRequired
                    >
                        {waysGetting.map((way) => (
                            <SelectItem key={way.key}>
                                {way.label}
                            </SelectItem>
                        ))}
                    </Select>
                }
                <Input label={'Место установки'} variant={'faded'} isRequired/>
                <Input label={'Ваше имя'} variant={'faded'} isRequired/>
                <Input label={'Номер телефона'} variant={'faded'} isRequired/>
                <Input label={'Электронная почта'} variant={'faded'} isRequired/>
                <Button className={'w-full px-8'} color={'primary'} type={'submit'}>Отправить заявку</Button>
            </form>
        </ModalComponent>
        // <Button
        //     variant="bordered" isIconOnly
        //     href={"tel:+79265631107"}
        // >
        //     <Phone strokeWidth={1.25} width={20}/>
        //     {/*<a href="tel:+79265631107" className={'w-fit flex gap-2 items-center'}>*/}
        //     {/*    <Phone/>+7 (926) 563-11-07*/}
        //     {/*</a>*/}
        // </Button>
    )
}

export default OrderService;