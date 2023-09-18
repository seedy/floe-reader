import { ComponentProps } from "react"

interface DesktopWheelIconProps extends ComponentProps<"svg"> { }

const DesktopWheelIcon = (props: DesktopWheelIconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 34" fill="currentColor">
        <g clip-path="url(#clip0_120_288)">
            <path d="M12.4959 33.3223C12.2843 33.3223 12.0727 33.3223 11.7596 33.2562C11.2597 32.9202 10.8138 32.7002 10.4702 32.3728C6.14124 28.2487 3.29789 23.1995 1.40945 17.5859C0.895629 16.0585 0.596172 14.459 0.198334 12.8926C0.198334 11.3678 0.198334 9.84296 0.268177 8.19785C1.27728 4.70734 3.54776 2.54514 6.67035 1.2031C7.64962 0.782229 8.70075 0.528565 9.719 0.198364C11.2438 0.198364 12.7686 0.198364 14.4184 0.271493C14.9875 0.428156 15.4418 0.476594 15.8742 0.600813C19.145 1.54034 21.8633 3.21298 23.3442 6.43074C23.7098 7.22513 23.9179 8.09206 24.1983 8.92564C24.1983 9.72389 24.1983 10.5222 24.1226 11.4483C23.6508 13.5614 23.3865 15.5844 22.8316 17.5243C21.6259 21.7394 19.5623 25.5673 16.9705 29.0784C15.7501 30.7318 14.3865 32.3302 12.4959 33.3223Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_120_288">
                <rect width="24" height="33.124" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export default DesktopWheelIcon