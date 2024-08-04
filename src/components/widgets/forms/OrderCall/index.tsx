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


const OrderServiceModal = ({defaultValue}: {defaultValue?: 'turnKey' | 'rent' | 'buy' | 'install'}) => {
    const [open, setOpen] = useState(false)


    async function handleSubmit(fd: FormData) {
        const res = await fetch('/api/order_call', {
            method: 'POST',
            body: fd,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setOpen(false)
            })
            .catch(error => {
                console.log(error)
                setOpen(false)
            });
    };


    return (
        <>
            <Button color={'primary'} onClick={() => setOpen(true)} variant={'ghost'} className={'min-h-10'}>
                Заказать звонок
            </Button>
            <Modal
                isOpen={open}
                onOpenChange={setOpen}
                placement="top-center"
                className={'max-h-[85dvh]'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Заказать звонок</ModalHeader>
                            <ModalBody>
                                <form action={handleSubmit}
                                      onClick={(e) => e.stopPropagation()}
                                      className={'flex flex-col gap-4'}
                                >
                                    <Input label={'Ваше имя'} name={'name'} variant={'bordered'} required isRequired/>
                                    <Input label={'Номер телефона'} name={'phone'} variant={'bordered'} required isRequired/>
                                    {/*<Input label={'Электронная почта'} variant={'faded'} isRequired/>*/}
                                    {/*<Textarea label={'Ваш вопрос'} variant={'faded'} isRequired/>*/}
                                    {/*<Button className={'w-full px-8'} color={'primary'}*/}
                                    {/*        type={'submit'}>Заказать</Button>*/}
                                    <div className={'flex gap-2'}>
                                        <Button color="danger" variant="flat" className={'px-4'} onPress={onClose}>
                                            Отмена
                                        </Button>
                                        <Button className={'w-full px-8'} color={'primary'} type={'submit'}>Заказать</Button>
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
