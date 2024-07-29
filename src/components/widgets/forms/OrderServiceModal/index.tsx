'use client'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import React, {useState} from "react";
import {Select, SelectItem} from "@nextui-org/react";


const OrderServiceModal = ({defaultValue}: {defaultValue?: 'turnKey' | 'rent' | 'buy' | 'install'}) => {
    const [open, setOpen] = useState(false)
    const [service, setService] = useState<string | undefined>(defaultValue)

    const handleSubmit = (formData: FormData) => {
        // for (const [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }
        setOpen(false)
        // onOpenChange(false)
    }

    const services = [
        {key: "turnKey", label: "Под ключ"},
        {key: "rent", label: "Аренда"},
        // {key: "buy", label: "Покупка"},
        // {key: "install", label: "Установка"},
    ];
    const lengths = [
        {key: "12,5", label: "12,5 метров"},
        {key: "25", label: "25 метров"},
    ];
    //
    // const waysGetting = [
    //     {key: "delivery", label: "Доставка"},
    //     {key: "pickup", label: "Самовывоз"},
    // ]

    return (
        <>
            <Button onClick={() => setOpen(!open)} color="primary" size={'lg'} className={'px-8 w-auto lg:w-fit'}>Заказать услугу</Button>
            <Modal
                isOpen={open}
                onOpenChange={setOpen}
                placement="top-center"
                className={'max-h-[85dvh]'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Оформление услуги</ModalHeader>
                            <ModalBody>
                                <form action={handleSubmit}
                                      onClick={(e) => e.stopPropagation()}
                                      className={'flex flex-col gap-4'}
                                >
                                    <Select
                                        autoFocus
                                        label="Услуга"
                                        placeholder="Выберите услугу"
                                        defaultSelectedKeys={defaultValue ? [defaultValue] : undefined}
                                        name={'service'}
                                        onChange={(e) => setService(e.target.value)}
                                        isRequired
                                        variant={'faded'}
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
                                        variant={'faded'}
                                    >
                                        {lengths.map((length) => (
                                            <SelectItem key={length.key}>
                                                {length.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    {/*<TextField label={'Необходимое количество пакетов'} name={'count'} variant={'faded'} required isRequired/>*/}
                                    {/*{service === 'rent' || service === 'buy' &&*/}
                                    {/*    <Select*/}
                                    {/*        label="Способ получения"*/}
                                    {/*        placeholder="Выберите способ"*/}
                                    {/*        name={'wayGetting'}*/}
                                    {/*        defaultSelectedKeys={['delivery']}*/}
                                    {/*        isRequired*/}
                                    {/*        variant={'faded'}*/}
                                    {/*    >*/}
                                    {/*        {waysGetting.map((way) => (*/}
                                    {/*            <SelectItem key={way.key}>*/}
                                    {/*                {way.label}*/}
                                    {/*            </SelectItem>*/}
                                    {/*        ))}*/}
                                    {/*    </Select>*/}
                                    {/*}*/}
                                    <Input label={'Необходимое количество пакетов'} name={'count'} variant={'bordered'} required isRequired/>
                                    {service === 'rent' && <Input label={'Срок аренды'} name={'rent'} variant={'bordered'} required isRequired/>}
                                    {/*<TextField label={'Место установки'} variant={'faded'} required isRequired/>*/}
                                    <Input label={'Место установки'} name={'place'} variant={'bordered'} required isRequired/>
                                    {/*<TextField label={'Ваше имя'} variant={'faded'} isRequired required/>*/}
                                    <Input label={'Ваше имя'} variant={'bordered'} name={'name'} isRequired required/>
                                    {/*<TextField label={'Номер телефона'} variant={'faded'} isRequired required/>*/}
                                    <Input label={'Номер телефона'} variant={'bordered'} name={'phone'} isRequired required/>
                                    {/*<TextField label={'Электронная почта'} variant={'faded'} isRequired required/>*/}
                                    <div className={'flex gap-2'}>
                                        <Button color="danger" variant="flat" className={'px-4'} onPress={onClose}>
                                            Отмена
                                        </Button>
                                        <Button className={'w-full px-8'} color={'primary'} type={'submit'}>Отправить заявку</Button>
                                    </div>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default OrderServiceModal;