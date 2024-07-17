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
    Image,
    // Link
} from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitcher from "@/components/widgets/ThemeSwitcher";
import CallButton from "@/components/widgets/CallButton";
import OrderCallButton from "@/components/widgets/OrderCall";

const AppNavbar = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = searchParamsToUrlQuery(searchParams)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <Navbar isMenuOpen={isMenuOpen}
                isBlurred={false}
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
            <NavbarBrand className={'sm:block flex items-center justify-center'}>
                <Link href={'/'}>
                    <Image
                        width={80}
                        alt="NextUI hero Image"
                        src="/img.png"
                    />
                    {/*<p className="font-bold text-inherit hidden lg:flex md:flex">Безопасные железные дороги</p>*/}
                    {/*<p className="font-bold text-inherit sm:hidden ">Безопасные железные дороги</p>*/}
                </Link>
            </NavbarBrand>
            {/*<NavbarMenu className={'flex flex-col min-h-dvh pt-16 justify-between w-full overflow-y-auto'}>*/}
            {/*    <div className={'flex flex-col gap-2'}>*/}
            {/*        <p className={'text-lg'}>Заявки</p>*/}
            {/*        <Divider/>*/}
            {/*        <div className={'flex flex-col gap-1 pl-2'}>*/}
            {/*            <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}*/}
            {/*                            isActive={!params.status && pathname === '/'}>*/}
            {/*                <Link href={'/'}*/}
            {/*                      className={`p-2 transition-background items-center ${!params.status && pathname === '/' && 'bg-content2'} flex rounded-md justify-between hover:bg-content2`}>*/}
            {/*                    <p>Все заявки</p>*/}
            {/*                </Link>*/}
            {/*            </NavbarMenuItem>*/}
            {/*            <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)} isActive={params.status === 'true'}>*/}
            {/*                <Link href={'?status=ACTIVE'}*/}
            {/*                      className={`p-2 transition-background items-center ${params.status === 'true' && 'bg-content2'} flex rounded-md justify-between hover:bg-content2`}>*/}
            {/*                    Активные заявки*/}
            {/*                    <div className={`w-3 h-3 aspect-square bg-green-500 rounded-full`}/>*/}
            {/*                </Link>*/}
            {/*            </NavbarMenuItem>*/}
            {/*            <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)} isActive={params.status === 'false'}>*/}
            {/*                <Link href={'?status=FINISHED'}*/}
            {/*                      className={`p-2 transition-background items-center flex ${params.status === 'false' && 'bg-content2'} rounded-md justify-between hover:bg-content2`}>*/}
            {/*                    Завершенные заявки*/}
            {/*                    <div className={`w-3 h-3 aspect-square bg-gray-500 rounded-full`}/>*/}
            {/*                </Link>*/}
            {/*            </NavbarMenuItem>*/}
            {/*        </div>*/}
            {/*        {user.role === 'ADMIN' &&*/}
            {/*            <>*/}
            {/*                <p className={'text-lg'}>Администрирование</p>*/}
            {/*                <Divider/>*/}
            {/*                <div className={'flex flex-col gap-1 pl-2'}>*/}
            {/*                    <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>*/}
            {/*                        <Link href={'/administration/users'}*/}
            {/*                              className={`p-2 transition-background items-center ${pathname.includes('/users') && 'bg-content3'} flex rounded-md justify-between hover:bg-content2`}>*/}
            {/*                            <p>Пользователи</p>*/}
            {/*                            <UsersRound/>*/}
            {/*                        </Link>*/}
            {/*                    </NavbarMenuItem>*/}
            {/*                    <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>*/}
            {/*                        <Link href={'/administration/companies'}*/}
            {/*                              className={`p-2 transition-background items-center ${pathname.includes('/companies') && 'bg-content3'} flex rounded-md justify-between hover:bg-content2`}>*/}
            {/*                            <p>Компании</p>*/}
            {/*                            <Building2/>*/}
            {/*                        </Link>*/}
            {/*                    </NavbarMenuItem>*/}
            {/*                    <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>*/}
            {/*                        <Link href={'/administration/projects'}*/}
            {/*                              className={`p-2 transition-background items-center ${pathname.includes('/projects') && 'bg-content3'} flex rounded-md justify-between hover:bg-content2`}>*/}
            {/*                            <p>Проекты</p>*/}
            {/*                            <FolderKanban/>*/}
            {/*                        </Link>*/}
            {/*                    </NavbarMenuItem>*/}
            {/*                    <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>*/}
            {/*                        <Link href={'/administration/statuses'}*/}
            {/*                              className={`p-2 transition-background items-center ${pathname.includes('/statuses') && 'bg-content3'} flex rounded-md justify-between hover:bg-content2`}>*/}
            {/*                            <p>Статусы</p>*/}
            {/*                            <BarChartHorizontal/>*/}
            {/*                        </Link>*/}
            {/*                    </NavbarMenuItem>*/}
            {/*                </div>*/}
            {/*            </>*/}
            {/*        }*/}
            {/*        {user.role === 'MANAGER' &&*/}
            {/*            <>*/}
            {/*                <p className={'text-lg'}>Администрирование</p>*/}
            {/*                <Divider/>*/}
            {/*                <div className={'flex flex-col gap-1 pl-2'}>*/}
            {/*                    <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>*/}
            {/*                        <Link href={'/administration/users'}*/}
            {/*                              className={`p-2 transition-background items-center ${pathname.includes('/users') && 'bg-content3'} flex rounded-md justify-between hover:bg-content2`}>*/}
            {/*                            <p>Сотрудники</p>*/}
            {/*                            <UsersRound/>*/}
            {/*                        </Link>*/}
            {/*                    </NavbarMenuItem>*/}
            {/*                </div>*/}
            {/*            </>*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <div className={'flex flex-col gap-2 pb-2'}>*/}
            {/*        <NavbarMenuItem>*/}
            {/*            {!user.is_email_verified ?*/}
            {/*                <div className={'flex justify-between mr-2'}>*/}
            {/*                    <VerifyEmailWidget user={user}/>*/}
            {/*                    <ThemeSwitcher/>*/}
            {/*                    /!*<NotificationWidget oldNotifications={notifications}/>*!/*/}
            {/*                </div>*/}
            {/*                :*/}
            {/*                <div className={'flex justify-end mr-2'}>*/}
            {/*                    <ThemeSwitcher/>*/}
            {/*                    /!*<NotificationWidget oldNotifications={notifications}/>*!/*/}
            {/*                </div>*/}
            {/*            }*/}
            {/*        </NavbarMenuItem>*/}
            {/*        <NavbarMenuItem>*/}
            {/*            <UserMenu user={user}/>*/}
            {/*        </NavbarMenuItem>*/}
            {/*    </div>*/}
            {/*</NavbarMenu>*/}
            {/*<NavbarContent justify="end" className={'sm:hidden flex py-2'}>*/}
            {/*    <NavbarItem>*/}
            {/*    </NavbarItem>*/}
            {/*</NavbarContent>*/}
            <NavbarContent justify="center" className={'hidden sm:flex'}>
                <NavbarItem isActive={pathname.includes('/services')}>
                    <Link href={'/services/turnkey/'}
                          className={`transition-background items-center flex rounded-md justify-between`}>
                        Услуги
                    </Link>
                </NavbarItem>
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
