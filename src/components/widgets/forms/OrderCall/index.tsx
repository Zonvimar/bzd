'use client'
import {Button} from "@nextui-org/react";
import {Phone} from "lucide-react";
import React, {useState} from "react";
import ModalComponent from "@/components/shared/ModalComponent";
import {Pencil1Icon} from "@radix-ui/react-icons";
import {Input, Textarea} from "@nextui-org/input";


const OrderCallButton = () => {
    const [open, setOpen] = useState(false)

    return (
        <ModalComponent
            // isIcon
            modalSize={'sm'}
            // icon={<Phone strokeWidth={1.25} width={20}/>}
            label={'Заказать звонок'}
            buttonVariant={'ghost'}
            modalHeader={"Заказать звонок"}
            setOpen={setOpen}
            open={open}
        >
            <form className={'flex flex-col gap-4'}>
                <Input label={'Ваше имя'} variant={'faded'} isRequired/>
                <Input label={'Номер телефона'} variant={'faded'} isRequired/>
                {/*<Input label={'Электронная почта'} variant={'faded'} isRequired/>*/}
                {/*<Textarea label={'Ваш вопрос'} variant={'faded'} isRequired/>*/}
                <Button className={'w-full px-8'} color={'primary'} type={'submit'}>Заказать</Button>
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

export default OrderCallButton;