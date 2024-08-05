'use client'
import {usePathname, useSearchParams} from "next/navigation";
import {useState} from "react";
import {searchParamsToUrlQuery} from "next/dist/shared/lib/router/utils/querystring";
import {
    Divider,
    Navbar,
    NavbarBrand,
    NavbarContent, NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Image, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, AccordionItem, Accordion,
    // Link
} from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitcher from "@/components/widgets/ThemeSwitcher";
import CallButton from "@/components/widgets/CallButton";
import OrderCallButton from "../forms/OrderCall";
import {icons} from "lucide-react";

const AppNavbar = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = searchParamsToUrlQuery(searchParams)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const accordionClasses = {
        base: "px-0 w-fit",
        title: "font-normal text-xl px-0",
        titleWrapper: "px-0",
        subtitle: "px-0",
        heading: "px-0",
        startContent: "px-0",
        trigger: "px-0 py-0 data-[hover=true]:bg-default-100 rounded-lg h-fit flex items-center",
        indicator: "text-medium px-0",
        content: "text-small pl-4 flex flex-col gap-2 text-md",
    };

    return (
        <Navbar isMenuOpen={isMenuOpen}
                isBlurred={true}
                onMenuOpenChange={setIsMenuOpen} maxWidth={'xl'} isBordered
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",
                    ],
                }}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle className={'p-3'} aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarBrand className={'lg:justify-start items-center w-fit flex justify-center'}>
                <Link href={'/'}>
                    <Image
                        width={80}
                        alt="NextUI hero Image"
                        src="/img-rm-bg.png"
                    />
                    {/*<p className="font-bold text-inherit hidden lg:flex md:flex">Безопасные железные дороги</p>*/}
                    {/*<p className="font-bold text-inherit sm:hidden ">Безопасные железные дороги</p>*/}
                </Link>
            </NavbarBrand>
            <NavbarMenu>
                <Accordion variant="light" fullWidth={false} isCompact itemClasses={accordionClasses}
                           defaultExpandedKeys={pathname.includes('/services') ? ['1'] : []}>
                    <AccordionItem title={'Услуги'} key={'1'} hideIndicator isCompact>
                        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        isActive={pathname.includes('/services/turnkey')}>
                            <Link href={'/services/turnkey'}
                                  className={`transition-background items-center flex rounded-md justify-between `}>
                                Под ключ
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        isActive={pathname.includes('/services/rent')}>
                            <Link href={'/services/rent'}
                                  className={`transition-background items-center flex rounded-md justify-between `}>
                                Аренда
                            </Link>
                        </NavbarMenuItem>
                        {/*<NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}*/}
                        {/*                isActive={pathname.includes('/services/monitoring')}>*/}
                        {/*    <Link href={'/services/monitoring'}*/}
                        {/*          className={`transition-background items-center flex rounded-md justify-between `}>*/}
                        {/*        Мониторинг*/}
                        {/*    </Link>*/}
                        {/*</NavbarMenuItem>*/}
                        {/*<NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}*/}
                        {/*                isActive={pathname.includes('/services/installation')}>*/}
                        {/*    <Link href={'/services/installation'}*/}
                        {/*          className={`transition-background items-center flex rounded-md justify-between `}>*/}
                        {/*        Установка*/}
                        {/*    </Link>*/}
                        {/*</NavbarMenuItem>*/}
                    </AccordionItem>
                </Accordion>
                <NavbarMenuItem className={'px-2'} onClick={() => setIsMenuOpen(!isMenuOpen)} isActive={pathname.includes('/projects')}>
                    <Link href={'/projects'}
                          className={`transition-background items-center flex rounded-md justify-between `}>
                        Проекты
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className={'px-2'}  onClick={() => setIsMenuOpen(!isMenuOpen)} isActive={pathname.includes('/about-us')}>
                    <Link href={'/about-us'}
                          className={`transition-background items-center flex rounded-md justify-between `}>
                        О нас
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className={'px-2'}  onClick={() => setIsMenuOpen(!isMenuOpen)} isActive={pathname.includes('/vacancies')}>
                    <Link href={'/vacancies'}
                          className={`transition-background items-center flex rounded-md justify-between `}>
                        Вакансии
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className={'px-2'} onClick={() => setIsMenuOpen(!isMenuOpen)} isActive={pathname.includes('/contacts')}>
                    <Link href={'/contacts'}
                          className={`transition-background items-center flex rounded-md justify-between`}>
                        Контакты
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
            <NavbarContent justify="center" className={'hidden sm:flex'}>
                <Dropdown
                    placement="bottom-start"
                >
                    <NavbarItem isActive={pathname.includes('/services')}>
                        <DropdownTrigger>
                            <p className={`hover:cursor-pointer transition-background items-center flex rounded-md justify-between`}
                            >
                                Услуги
                            </p>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Услуги"
                        className="px-0"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            href={'/services/turnkey/'}
                            key="turnkey"
                            className={`${pathname.includes('/services/turnkey') ? 'bg-primary text-white' : ''}`}
                        >
                            Под ключ
                        </DropdownItem>
                        <DropdownItem
                            key="rent"
                            href={'/services/rent/'}
                            className={`${pathname.includes('/services/rent') ? 'bg-primary text-white' : ''}`}
                        >
                            Аренда
                        </DropdownItem>
                        {/*<DropdownItem*/}
                        {/*    key="monitoring"*/}
                        {/*    href={'/services/monitoring/'}*/}
                        {/*    className={`${pathname.includes('/services/monitoring') ? 'bg-primary text-white' : ''}`}*/}
                        {/*>*/}
                        {/*    Мониторинг*/}
                        {/*</DropdownItem>*/}
                        {/*<DropdownItem*/}
                        {/*    key="installation"*/}
                        {/*    href={'/services/installation/'}*/}
                        {/*    className={`${pathname.includes('/services/installation') ? 'bg-primary text-white' : ''}`}*/}
                        {/*>*/}
                        {/*    Установка*/}
                        {/*</DropdownItem>*/}
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem isActive={pathname.includes('/projects')}>
                    <Link href={'/projects'}
                          className={`transition-background items-center flex rounded-md justify-between `}>
                        Проекты
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname.includes('/about-us')}>
                    <Link href={'/about-us'}
                          className={`transition-background items-center flex rounded-md justify-between `}>
                        О нас
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname.includes('/vacancies')}>
                    <Link href={'/vacancies'}
                          className={`transition-background items-center flex rounded-md justify-between `}>
                        Вакансии
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname.includes('/contacts')}>
                    <Link href={'/contacts'}
                          className={`transition-background items-center flex rounded-md justify-between`}>
                        Контакты
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {/*<NavbarItem>*/}
                {/*    <ThemeSwitcher/>*/}
                {/*</NavbarItem>*/}
                <NavbarItem className={'hidden sm:flex'}>
                    <OrderCallButton/>
                </NavbarItem>
                <NavbarItem>
                    <CallButton/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default AppNavbar
