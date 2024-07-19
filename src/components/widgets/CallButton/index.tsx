import {Button} from "@nextui-org/react";
import {Phone} from "lucide-react";
import React from "react";
import Link from "next/link";


const CallButton = () => {
    return (
        <Link href={"tel:+79265631107"}>
            <Button variant="bordered" isIconOnly>
                <Phone strokeWidth={1.25} width={20}/>
            </Button>
        </Link>

        // {/*<Button*/}
        // {/*    variant="bordered" isIconOnly*/}
        // {/*    href={"tel:+79265631107"}*/}
        // {/*>*/}
        // {/*    <Phone strokeWidth={1.25} width={20}/>*/}
        // {/*    /!*<a href="tel:+79265631107" className={'w-fit flex gap-2 items-center'}>*!/*/}
        // {/*    /!*    <Phone/>+7 (926) 563-11-07*!/*/}
        // {/*    /!*</a>*!/*/}
        // {/*</Button>*/}
    )
}

export default CallButton;