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
    email: false,
    instagram: true,
    linkedin: true,
    portfolio: true,
    tel: false,
    youtube: true,
  },
}: SocialsProps) => {
  if (Object.keys(sources).length === 0) {
    return null;
  }
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 p-2",
        className,
      )}
    >
      <TooltipGroup>
        {sources.instagram && (
          <SlotTrack name="click socials instagram">
            <IconButtonLink
              tooltip="Voir mon Instagram"
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
