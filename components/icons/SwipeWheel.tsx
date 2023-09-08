import { ComponentProps } from "react"

interface SwipeWheelIconProps extends ComponentProps<"svg"> { }

const SwipeWheel = (props: SwipeWheelIconProps) => (
    <svg {...props} width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Fleur (HEAD) - SVG" clip-path="url(#clip0_120_317)">
            <path id="Vector" d="M-0.0991764 6.24788C-0.0991764 6.1421 -0.0991764 6.03631 -0.0661278 5.87974C0.101875 5.6298 0.211901 5.40688 0.375574 5.23507C2.43763 3.07057 4.96225 1.6489 7.76906 0.704678C8.53275 0.447769 9.3325 0.29804 10.1157 0.0991211C10.8781 0.0991211 11.6405 0.0991211 12.4631 0.134043C14.2083 0.638596 15.2894 1.77384 15.9604 3.33513C16.1709 3.82476 16.2977 4.35033 16.4628 4.85945C16.4628 5.62186 16.4628 6.38426 16.4262 7.20916C16.3479 7.49373 16.3237 7.72083 16.2616 7.93706C15.7918 9.57246 14.9555 10.9316 13.3466 11.6721C12.9494 11.8549 12.516 11.9589 12.0992 12.0991C11.7 12.0991 11.3009 12.0991 10.8379 12.0613C9.78128 11.8254 8.76977 11.6932 7.79984 11.4158C5.69229 10.8129 3.77833 9.78108 2.02277 8.48522C1.19609 7.87501 0.396908 7.19322 -0.0991764 6.24788Z" fill="#C04C0B" />
        </g>
        <defs>
            <clipPath id="clip0_120_317">
                <rect width="12" height="16.562" fill="white" transform="matrix(0 1 -1 0 16.562 0)" />
            </clipPath>
        </defs>
    </svg>

)

export default SwipeWheel