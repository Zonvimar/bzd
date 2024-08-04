'use client'
import {Button, Select, SelectItem} from "@nextui-org/react";
import {Phone} from "lucide-react";
import React, {useState} from "react";
import ModalComponent from "@/components/shared/ModalComponent";
import {Pencil1Icon} from "@radix-ui/react-icons";
import {Input, Textarea} from "@nextui-org/input";
import TextField from "@/components/shared/inputs/TextField";


const OrderService = ({defaultValue}: {defaultValue?: 'turnKey' | 'rent' | 'buy' | 'install'}) => {
    const [open, setOpen] = useState(false)
    const [service, setService] = useState<string | undefined>(defaultValue)


    const handleSubmit = (fd: FormData) => {
        console.log(JSON.stringify(fd))
        setOpen(false)
    }
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
            <form action={handleSubmit} onClick={(e) => e.stopPropagation()} className={'flex flex-col gap-4'}>
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
                <TextField label={'Необходимое количество пакетов'} name={'count'} variant={'faded'} required isRequired/>
                {/*<Input label={'Необходимое количество пакетов'} name={'count'} variant={'faded'} isRequired/>*/}
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
                <TextField label={'Место установки'} variant={'faded'} required isRequired/>
                {/*<Input label={'Место установки'} variant={'faded'} required isRequired/>*/}
                <TextField label={'Ваше имя'} variant={'faded'} isRequired required/>
                {/*<Input label={'Ваше имя'} variant={'faded'} isRequired required/>*/}
                <TextField label={'Номер телефона'} variant={'faded'} isRequired required/>
                {/*<Input label={'Номер телефона'} variant={'faded'} isRequired required/>*/}
                <TextField label={'Электронная почта'} variant={'faded'} isRequired required/>
                {/*<Input label={'Электронная почта'} variant={'faded'} isRequired required/>*/}
                <Button className={'w-full px-8'} color={'primary'} type={'submit'}>Отправить заявку</Button>
            </form>
        </ModalComponent>
    )
}

export default OrderService;