import Screen from "components/Screen";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import styles from "components/Screen/Presentation/Presentation.module.css";
import Avatar, { AvatarProps, SIZE } from "components/Avatar";
import Flex from "components/Flex";
import floe from "public/floe.jpg";
import P from "components/Typography/P";

interface ScreenPresentationProps {
  avatarProps?: Partial<AvatarProps>;
}

const ScreenPresentation = ({
  avatarProps,
  ...props
}: ScreenPresentationProps) => (
  <Flex align="center" justify="center">
    <Screen
      className={styles.content}
      style={{ maxWidth: `calc(100vw - 2 * ${SIZE}px)` }}
      {...props}
    >
      <Flex justify="center">
        <H1 id="presentation">Présentation</H1>
      </Flex>
      <Flex direction="column" align="start">
        <H2>Rédaction Web & SEO</H2>
        <P
          align="start"
          className={styles.relativeBlock}
          style={{ minHeight: SIZE }}
        >
          Lorem
          <Avatar
            className={styles.floatingAvatar}
            style={{ left: `calc(${-SIZE}px - 1rem)` }}
            src={floe}
            alt="Floé"
            {...avatarProps}
          />
        </P>
      </Flex>
      <Flex grow />
      <Flex direction="column" align="end">
        <H2>Correction</H2>
        <P
          align="end"
          className={styles.relativeBlock}
          style={{ minHeight: SIZE }}
        >
          Ipsum
          <Avatar
            className={styles.floatingAvatar}
            style={{ right: `calc(${-SIZE}px - 1rem)` }}
            src={floe}
            alt="Floé"
            {...avatarProps}
          />
        </P>
      </Flex>
    </Screen>
  </Flex>
);

export default ScreenPresentation;
