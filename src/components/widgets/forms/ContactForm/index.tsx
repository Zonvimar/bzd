'use client'
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import React, {useRef} from "react";


const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null)


    async function handleSubmit(fd: FormData) {
        const res = await fetch('/api/contact', {
            method: 'POST',
            body: fd,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // setOpen(false)
            })
            .catch(error => {
                console.log(error)
                // setOpen(false)
            });
        formRef?.current?.reset()
    };


    return (
        <form ref={formRef} action={handleSubmit} onClick={(e) => e.stopPropagation()} className={'flex flex-col gap-4'}>
            <Input label={'Ваше имя'} name={'name'} variant={'faded'} required isRequired/>
            <Input label={'Номер телефона'} name={'phone'} variant={'faded'} required isRequired/>
            <Input label={'Электронная почта'} name={'email'} variant={'faded'} required isRequired/>
            <Textarea label={'Ваш вопрос'} name={'question'} variant={'faded'} required isRequired/>
            <Button className={'w-fit px-8'} color={'primary'} type={'submit'}>Отправить</Button>
        </form>
    )
}

export default ContactForm