'use client'
import {cn} from '@nextui-org/react'
import React, {FC} from 'react'
import {Input, InputProps} from "@nextui-org/input";

type TextFieldProps = {

} & InputProps & { readonly label?: string }

const TextField: FC<TextFieldProps> = ({
                                           ...props
                                       }) => {
    const [touched, setTouched] = React.useState(false)

    return (
        <Input
            {...props}
            InputProps={{
                autocomplete: 'off'
            }}
            autoComplete="off"
            onBlur={() => setTouched(true)}
            size={'sm'}
            // color={(props.isRequired && touched && !props.value && !props.defaultValue) ? 'danger' : 'default'}
            pattern={props.inputMode === 'numeric' ? '^\\d+(\\.\\d+)*$' : undefined}
            className={cn('rounded-none', props.className)}
        />
    )
}

export default TextField