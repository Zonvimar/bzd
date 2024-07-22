import React from "react";
import OrderServiceModal from "@/components/widgets/forms/OrderServiceModal";


const ServicesHeader = ({title, description, defaultValue}: {title: string, description: string, defaultValue: 'turnKey' | 'rent' | 'buy' | 'install'}) => {

    return (
        <div className={'flex flex-col gap-6'}>
            <div className={'bg-[url("/banner.jpg")] text-center sm:text-left flex items-center justify-center bg-cover bg-center bg-no-repeat h-[600px] backdrop-blur-lg'}>
                <div className={'w-full bg-black/70 h-full'}>
                    <div className={'w-full mx-auto px-8 h-full flex flex-col justify-center gap-4 max-w-7xl'}>
                        <h1 className={'text-white text-3xl lg:text-5xl font-bold'}>
                            {title}
                        </h1>
                        <p className={'text-white text-xl font-light'}>
                            {description}
                        </p>
                        <OrderServiceModal defaultValue={defaultValue}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHeader;