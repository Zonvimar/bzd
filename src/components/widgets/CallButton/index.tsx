import {Button} from "@nextui-org/react";
import {Phone} from "lucide-react";


const CallButton = () => {
    return (
        <Button
            variant="bordered" isIconOnly
        >
            <Phone strokeWidth={1.25} width={20}/>
        </Button>
    )
}

export default CallButton;