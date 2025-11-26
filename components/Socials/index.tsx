import {
  EnvelopeClosedIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import IconButtonLink from "components/IconButton/Link";
import SlotTrack from "components/Slot/Track";
import TooltipGroup from "components/Tooltip/Group";
import {
  EMAIL,
  INSTAGRAM,
  LINKEDIN,
  PORTFOLIO,
  TEL,
  YOUTUBE,
} from "constants/links";
import cn from "helpers/cn";

type Source =
  | "instagram"
  | "linkedin"
  | "portfolio"
  | "youtube"
  | "email"
  | "tel";

interface SocialsProps {
  className?: string;
  sources?: Partial<Record<Source, boolean>>;
}
const Socials = ({
  className,
  sources = {
    instagram: true,
    linkedin: true,
    portfolio: true,
    youtube: true,
    email: false,
    tel: false,
  },
}: SocialsProps) => {
  if (Object.keys(sources).length === 0) {
    return null;
  }
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 p-2",
        className
      )}
    >
      <TooltipGroup variant="radix">
        {sources.instagram && (
          <SlotTrack name="click socials instagram">
            <IconButtonLink
              tooltip="Voir mon Instagram"
              tooltipVariant="radix"
              href={INSTAGRAM}
              target="_blank"
              size="small"
            >
              <InstagramLogoIcon />
            </IconButtonLink>
          </SlotTrack>
        )}
        {sources.linkedin && (
          <SlotTrack name="click socials linkedin">
            <IconButtonLink
              tooltip="Voir mon LinkedIn"
              tooltipVariant="radix"
              href={LINKEDIN}
              target="_blank"
              size="small"
            >
              <LinkedInLogoIcon />
            </IconButtonLink>
          </SlotTrack>
        )}
        {sources.portfolio && (
          <SlotTrack name="click socials portfolio">
            <IconButtonLink
              tooltip="Voir mon portfolio"
              tooltipVariant="radix"
              href={PORTFOLIO}
              target="_blank"
              size="small"
            >
              <GlobeIcon />
            </IconButtonLink>
          </SlotTrack>
        )}
        {sources.youtube && (
          <SlotTrack name="click socials youtube">
            <IconButtonLink
              tooltip="Voir mon YouTube"
              tooltipVariant="radix"
              href={YOUTUBE}
              target="_blank"
              size="small"
            >
              <VideoIcon />
            </IconButtonLink>
          </SlotTrack>
        )}
        {(sources.email || sources.tel) && (
          <div className="flex items-center gap-4">
            {sources.email && (
              <SlotTrack name="click socials email">
                <IconButtonLink
                  tooltip="E-mail"
                  tooltipVariant="radix"
                  href={EMAIL}
                  target="_blank"
                  size="small"
                >
                  <EnvelopeClosedIcon />
                </IconButtonLink>
              </SlotTrack>
            )}
            {sources.tel && (
              <SlotTrack name="click socials tel">
                <IconButtonLink
                  tooltip="Téléphone"
                  tooltipVariant="radix"
                  href={TEL}
                  target="_blank"
                  size="small"
                >
                  <MobileIcon />
                </IconButtonLink>
              </SlotTrack>
            )}
          </div>
        )}
      </TooltipGroup>
    </div>
  );
};

export default Socials;
