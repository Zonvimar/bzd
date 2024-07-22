'use client'
import {
    Button,
    Checkbox,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, Select, SelectItem,
    useDisclosure
} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import Link from "next/link";
import {MailIcon} from "@nextui-org/shared-icons";
import {LockIcon} from "lucide-react";
import TextField from "@/components/shared/inputs/TextField";
import React, {useState} from "react";


const TestModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [service, setService] = useState<string | undefined>()


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
        <>
            <Button onPress={onOpen} color="primary">Заказать услугу</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                className={'max-w-[85dvh]'}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Оформление услуги</ModalHeader>
                            <ModalBody>
                                <Select
                                    autoFocus
                                    label="Услуга"
                                    placeholder="Выберите услугу"
                                    defaultSelectedKeys={undefined}
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
                                {/*<TextField label={'Необходимое количество пакетов'} name={'count'} variant={'faded'} required isRequired/>*/}
                                <Input label={'Необходимое количество пакетов'} name={'count'} variant={'bordered'} isRequired/>
                                {service === 'rent' && <Input label={'Срок аренды'} name={'rent'} variant={'bordered'} isRequired/>}
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
                                {/*<TextField label={'Место установки'} variant={'faded'} required isRequired/>*/}
                                <Input label={'Место установки'} variant={'bordered'} required isRequired/>
                                {/*<TextField label={'Ваше имя'} variant={'faded'} isRequired required/>*/}
                                <Input label={'Ваше имя'} variant={'bordered'} isRequired required/>
                                {/*<TextField label={'Номер телефона'} variant={'faded'} isRequired required/>*/}
                                <Input label={'Номер телефона'} variant={'bordered'} isRequired required/>
                                {/*<TextField label={'Электронная почта'} variant={'faded'} isRequired required/>*/}

                                {/*<Input*/}
                                {/*    autoFocus*/}
                                {/*    endContent={*/}
                                {/*        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />*/}
                                {/*    }*/}
                                {/*    label="Email"*/}
                                {/*    placeholder="Enter your email"*/}
                                {/*    variant="bordered"*/}
                                {/*/>*/}
                                {/*<Input*/}
                                {/*    endContent={*/}
                                {/*        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />*/}
                                {/*    }*/}
                                {/*    label="Password"*/}
                                {/*    placeholder="Enter your password"*/}
                                {/*    type="password"*/}
                                {/*    variant="bordered"*/}
                                {/*/>*/}
                                {/*<div className="flex py-2 px-1 justify-between">*/}
                                {/*    <Checkbox*/}
                                {/*        classNames={{*/}
                                {/*            label: "text-small",*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        Remember me*/}
                                {/*    </Checkbox>*/}
                                {/*    <Link color="primary" href="#" size="sm">*/}
                                {/*        Forgot password?*/}
                                {/*    </Link>*/}
                                {/*</div>*/}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Отмена
                                </Button>
                                <Button className={'w-full px-8'} color={'primary'} onPress={onClose}>Отправить заявку</Button>
                                {/*<Button color="primary" onPress={onClose}>*/}
                                {/*    Заказать услугу*/}
                                {/*</Button>*/}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default TestModal;