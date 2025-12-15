import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Column } from "@react-email/column";
import { Container } from "@react-email/container";
import { Font } from "@react-email/font";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Row } from "@react-email/row";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import {
  EMAIL,
  INSTAGRAM,
  LINKEDIN,
  TEL,
  ZCAL_FIRST,
} from "../constants/links";

const colors = {
  background: "hsl(225, 100%, 99%)",
  blackAlpha26: "hsla(0, 0%, 0%, .26)",
  navbar: "hsla(158, 20%, 81%, .2)",
  outlinePrimary: "hsla(183, 87%, 24%, .3)",
  primary: "hsl(183, 87%, 24%)",
  secondaryBackground: "hsl(22, 89%, 40%)",
  text: "hsl(0, 0%, 21%)",
  white: "hsl(0, 0%, 100%)",
};

const radii = {
  round: "50%",
  rounded: ".375rem",
};

const fontSizes = {
  1: "1.75rem",
  2: "1.25rem",
  body: "0.875rem",
  button: "1rem",
};

const headings = {
  body: {
    color: colors.text,
    display: "block",
    fontFamily: "Lora",
    fontSize: fontSizes.body,
    fontWeight: 400,
    lineHeight: 1.5,
    margin: 0,
  },
  h1: {
    color: colors.white,
    display: "block",
    fontFamily: "Urbanist",
    fontSize: fontSizes[1],
    fontWeight: 700,
    lineHeight: 1.5,
    margin: 0,
  },
  h2: {
    color: colors.text,
    display: "block",
    fontFamily: "Urbanist",
    fontSize: fontSizes[2],
    fontWeight: 700,
    lineHeight: 1.5,
    margin: 0,
  },
};

const banner = {
  backgroundColor: colors.navbar,
  color: colors.text,
  padding: "0 1.25rem",
  textAlign: "center" as const,
};

const button = {
  contained: {
    backgroundColor: colors.primary,
    border: "none",
    borderRadius: radii.rounded,
    boxSizing: "border-box" as const,
    color: colors.background,
    display: "inline-block",
    fontFamily: "Lora",
    fontSize: fontSizes.button,
    fontWeight: 700,
    height: "2.125rem",
    lineHeight: 1.5,
    margin: 0,
    maxWidth: "20rem",
    minWidth: "5rem",
    paddingBottom: "0.25rem !important",
    paddingLeft: "1.5rem !important",
    paddingRight: "1.5rem !important",
    paddingTop: "0.25rem !important",
    textAlign: "center" as const,
    textDecoration: "none",
    textTransform: "uppercase" as const,
    width: "100%",
  },
  link: {
    background: "none",
    border: "none",
    borderRadius: radii.rounded,
    boxSizing: "border-box" as const,
    color: colors.primary,
    display: "inline-block",
    fontFamily: "Lora",
    fontSize: fontSizes.button,
    fontWeight: 700,
    height: "2.125rem",
    lineHeight: 1.5,
    margin: 0,
    maxWidth: "20rem",
    minWidth: "5rem",
    padding: "0.25rem 1.5rem",
    textAlign: "center" as const,
    textDecoration: "none",
    width: "100%",
  },
};

const iconButton = {
  borderRadius: radii.round,
  color: colors.secondaryBackground,
  display: "inline-block",
  height: "3rem",
  textAlign: "start" as const,
  width: "3rem",
};

const iconWrapper = {
  height: iconButton.height,
  width: iconButton.width,
};

const icon = {
  margin: "auto",
};

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://floegaubert.com";

const Share = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Lora"
        fallbackFontFamily="serif"
        fontWeight={400}
        fontStyle="normal"
        webFont={{
          format: "woff2",
          url: "https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkq18ndeYxZ0.woff2",
        }}
      />
      <Font
        fontFamily="Lora"
        fallbackFontFamily="serif"
        fontWeight={700}
        fontStyle="normal"
        webFont={{
          format: "woff2",
          url: "https://fonts.gstatic.com/s/lora/v32/0QI6MX1D_JOuGQbT0gvTJPa787z5vBJBkq18ndeYxZ0.woff2",
        }}
      />
      <Font
        fontFamily="Urbanist"
        fallbackFontFamily="sans-serif"
        fontWeight={400}
        fontStyle="normal"
        webFont={{
          format: "woff2",
          url: "https://fonts.gstatic.com/s/urbanist/v17/L0x-DF02iFML4hGCyMqlbS1miXK2.woff2",
        }}
      />
      <Font
        fontFamily="Urbanist"
        fallbackFontFamily="sans-serif"
        fontWeight={700}
        fontStyle="normal"
        webFont={{
          format: "woff2",
          url: "https://fonts.gstatic.com/s/urbanist/v17/L0x-DF02iFML4hGCyMqlbS1miXK2.woff2",
        }}
      />
      <style>
        {`
                    .title tbody {
                        vertical-align: top;
                    }
                
                `}
      </style>
    </Head>
    <Preview>[Floé Gaubert] Ma carte de visite</Preview>
    <Body style={{ backgroundColor: colors.background, color: colors.text }}>
      <Container style={{ margin: "auto", width: 360 }}>
        <Section style={{ marginBottom: "1rem" }}>
          <Link
            style={{ ...button.link, height: "auto" }}
            href="https://floegaubert.com?source=email"
          >
            Ce message ne s&apos;affiche pas correctement ? Clique ici
          </Link>
        </Section>
        <Section
          style={{
            alignItems: "flex-start",
            backgroundImage: `url(${baseUrl}/landing-1-mask.webp)`,
            display: "flex",
            height: 360,
            marginBottom: "1.25rem",
            width: 360,
          }}
        >
          <Heading
            style={{
              padding: "0 1.25rem",
              textAlign: "center",
              verticalAlign: "start",
              ...headings.h1,
            }}
          >
            Réalisons les contenus qui feront parler de toi
          </Heading>
        </Section>
        <Section style={{ marginBottom: "1rem", paddingLeft: "1.25rem" }}>
          <Row>
            <Column>
              <Heading
                style={{ ...headings.h2, marginBottom: ".5rem" }}
                as="h2"
              >
                Floé Gaubert
              </Heading>
              <Heading style={headings.h2} as="h2">
                Photographe, vidéaste et monteuse
              </Heading>
            </Column>
            <Column>
              <Img
                style={{ marginLeft: "auto" }}
                height={80}
                src={`${baseUrl}/logo-side.webp`}
                alt=""
              />
            </Column>
          </Row>
        </Section>
        <Section style={{ ...banner, marginBottom: "1.5rem" }}>
          <Text style={headings.body}>
            Interview • Montage • Podcast • Photo • Vidéo
          </Text>
        </Section>
        <Section style={{ marginBottom: "4.25rem", textAlign: "center" }}>
          <Row style={{ height: 64, width: 256 }}>
            <Column>
              <Button
                aria-label="Instagram"
                style={iconButton}
                href={INSTAGRAM}
              >
                <Section style={iconWrapper}>
                  <Row>
                    <Img
                      style={icon}
                      src={`${baseUrl}/instagram-logo-icon.png`}
                      alt=""
                    />
                  </Row>
                </Section>
              </Button>
            </Column>
            <Column>
              <Button aria-label="LinkedIn" style={iconButton} href={LINKEDIN}>
                <Section style={iconWrapper}>
                  <Row>
                    <Img
                      style={icon}
                      src={`${baseUrl}/linkedin-logo-icon.png`}
                      alt=""
                    />
                  </Row>
                </Section>
              </Button>
            </Column>
            <Column>
              <Button aria-label="E-mail" style={iconButton} href={EMAIL}>
                <Section style={iconWrapper}>
                  <Row>
                    <Img
                      style={icon}
                      src={`${baseUrl}/envelope-closed-icon.png`}
                      alt=""
                    />
                  </Row>
                </Section>
              </Button>
            </Column>
            <Column>
              <Button aria-label="Téléphone" style={iconButton} href={TEL}>
                <Section style={iconWrapper}>
                  <Row>
                    <Img
                      style={icon}
                      src={`${baseUrl}/mobile-icon.png`}
                      alt=""
                    />
                  </Row>
                </Section>
              </Button>
            </Column>
          </Row>
        </Section>
        <Section style={{ marginBottom: "1.25rem", textAlign: "center" }}>
          <Row style={{ marginBottom: "1.25rem" }}>
            <Link style={button.link} href="https://floegaubert.com">
              Je visite le site de Floé
            </Link>
          </Row>
          <Row>
            <Link style={button.contained} href={ZCAL_FIRST}>
              Je prends rendez-vous
            </Link>
          </Row>
        </Section>
        <Section
          style={{
            borderTop: "1px solid",
            borderTopColor: colors.blackAlpha26,
            marginBottom: "1.25rem",
            paddingTop: "1.25rem",
            textAlign: "center",
          }}
        >
          <Row>
            <Text style={headings.body}>
              Chaque jour est différent, faites-en ce que vous voulez. 🌳
            </Text>
          </Row>
          <Row>
            <Text style={{ ...headings.body, fontWeight: 700 }}>
              Floé Gaubert
            </Text>
          </Row>
          <Row>
            <Link style={button.link} href={TEL}>
              {TEL.replace("tel:", "")}
            </Link>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Share;
