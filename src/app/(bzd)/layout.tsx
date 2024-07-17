import AppNavbar from '@/components/widgets/AppNavbar'
import React from 'react'

const AppLayout = async({children}: { children: React.ReactNode }) => {

    return (
        <div className={'bg-content'}>
            <AppNavbar/>
            <div className={`overflow-y-hidden bg-content1`}>
                <main className={'bg-content3 overflow-auto flex-1 flex flex-col gap-2'}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppLayout