import AppNavbar from '@/components/widgets/AppNavbar'
import React, {Suspense} from 'react'
import Footer from "@/components/widgets/Footer";

const AppLayout = async({children}: { children: React.ReactNode }) => {

    return (
        <div className={'bg-content'}>
            <Suspense>
                <AppNavbar/>
            </Suspense>
            <div className={`overflow-y-hidden bg-content1`}>
                <main className={'bg-content2 overflow-auto flex-1 flex flex-col gap-2'}>
                    {children}
                    <Suspense>
                        <Footer/>
                    </Suspense>
                </main>
            </div>
        </div>
    )
}

export default AppLayout