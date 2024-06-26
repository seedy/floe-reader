"use client";

import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import Input from "components/Input";
import { ComponentProps, useState } from "react";

interface InputPasswordProps extends ComponentProps<typeof Input> {}
const InputPassword = (props: InputPasswordProps) => {
	const [show, setShow] = useState(false);

	const onToggleShow = () => {
		setShow((prev) => !prev);
	};

	return (
		<Input
			autoComplete="current-password"
			type={show ? "text" : "password"}
			{...props}
		>
			<IconButton
				onClick={onToggleShow}
				className="absolute right-4"
				size="small"
			>
				{show ? <EyeOpenIcon /> : <EyeClosedIcon />}
			</IconButton>
		</Input>
	);
};

export default InputPassword;
