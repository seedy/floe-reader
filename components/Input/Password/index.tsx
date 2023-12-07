"use client"

import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Input from "components/Input";
import { ComponentProps, useState } from "react"
import styles from "components/Input/Password/Password.module.css"
import IconButton from "components/IconButton";

interface InputPasswordProps extends ComponentProps<typeof Input> { }
const InputPassword = (props: InputPasswordProps) => {
    const [show, setShow] = useState(false);

    const onToggleShow = () => {
        setShow(prev => !prev)
    }

    return (
        <Input autoComplete="current-password" type={show ? "text" : "password"} {...props}>
            <IconButton onClick={onToggleShow} className={styles.icon} variant="small">
                {show ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </IconButton>
        </Input>
    )
}

export default InputPassword