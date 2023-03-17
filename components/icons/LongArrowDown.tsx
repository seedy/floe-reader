import { ComponentProps } from "react"

interface LongArrowDownIconProps extends ComponentProps<"svg"> { }

const LongArrowDownIcon = (props: LongArrowDownIconProps) => (
    <svg {...props} fill="currentColor" height="48px" width="48px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 476.213 476.213" xmlSpace="preserve">
        <polygon points="287.5,384.394 253.107,418.787 253.107,0 223.107,0 223.107,418.787 188.713,384.394 167.5,405.606 
	238.107,476.213 308.713,405.606 "/>
    </svg>
)

export default LongArrowDownIcon