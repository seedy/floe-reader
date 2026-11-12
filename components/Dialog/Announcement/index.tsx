import {
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-alert-dialog";
import Button from "components/Button";
import CarouselTranslateRotate from "components/Carousel/TranslateRotate";
import Image from "components/Image";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import cn from "helpers/cn";
import expoBlue from "public/expo-blue.webp";
import expoGreen from "public/expo-green.webp";
import expoOrange from "public/expo-orange.webp";
import type { ReactNode } from "react";

interface DialogAnnouncementProps {
  children: ReactNode;
}
const DialogAnnouncement = ({ children }: DialogAnnouncementProps) => {
  return (
    <Root>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Overlay />
        <Content className="fixed h-svh w-svw z-10000 flex flex-col bg-background py-5">
          <Title asChild>
            <H2>Mes actus</H2>
          </Title>
          <Description asChild>
            <H3>En ce moment</H3>
          </Description>
          <div className="flex grow flex-col gap-4">
            <div className="flex grow flex-col">
              <CarouselTranslateRotate>
                <Image
                  className="h-full w-auto max-w-full object-contain"
                  src={expoGreen}
                  alt="Expo photo"
                />
                <Image
                  className="h-full w-auto max-w-full object-contain"
                  src={expoBlue}
                  alt="Expo photo"
                />
                <Image
                  className="h-full w-auto max-w-full object-contain"
                  src={expoOrange}
                  alt="Expo photo"
                />
              </CarouselTranslateRotate>
            </div>
            <div className={cn("flex items-center justify-center")}>
              <Cancel asChild>
                <Button>Fermer</Button>
              </Cancel>
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default DialogAnnouncement;
