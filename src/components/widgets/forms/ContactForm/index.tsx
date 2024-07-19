import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import React from "react";


const ContactForm = () => {
    return (
        <form className={'flex flex-col gap-4'}>
            <Input label={'Ваше имя'} variant={'faded'} isRequired/>
            <Input label={'Номер телефона'} variant={'faded'} isRequired/>
            <Input label={'Электронная почта'} variant={'faded'} isRequired/>
            <Textarea label={'Ваш вопрос'} variant={'faded'} isRequired/>
            <Button className={'w-fit px-8'} color={'primary'} type={'submit'}>Отправить</Button>
        </form>
    )
}

export default ContactForm