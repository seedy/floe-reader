import Avatar from "components/Avatar";
import Flex from "components/Flex";
import { useKeenSlider } from "keen-slider/react";
import image from "public/CBC_QR_CODE.png";
import { useState } from "react";


const AvatarGroup = () => {
    const [lastProgress, setLastProgress] = useState(0);
    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
        },
        detailsChanged: (s) => {
            const progress = s.track.details.progress
            const delta = lastProgress - progress;
            setLastProgress(progress);

        }
    });

    const activeId = instanceRef.current?.track.details.rel

    return (
        <Flex ref={ref} className="keen-slider">
            <Avatar src={image} className="keen-slider__slide" alt="toto" />
            <Avatar src={image} className="keen-slider__slide" alt="toto" />
            <Avatar src={image} className="keen-slider__slide" alt="toto" />
        </Flex>
    )
}

export default AvatarGroup