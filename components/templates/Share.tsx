import { Html } from "@react-email/html"
import { Button } from "@react-email/button"
import { Img } from "@react-email/img"
import { Body } from "@react-email/body"
import { Container } from "@react-email/container"
import { Section } from "@react-email/section"
import { Text } from "@react-email/text"
import { Link } from "@react-email/link"
import { Head } from "@react-email/head"
import { Preview } from "@react-email/preview"
import { Heading } from "@react-email/heading"
import getBaseUrl from "helpers/getBaseUrl"


const Share = () => (
    <Html>
        <Head />
        <Preview>Suite à notre rencontre, ci-joint ma carte de visite</Preview>
        <Body style={{ backgroundColor: "hsl(225, 100%, 99%)", color: "hsl(0, 0%, 21%)" }}>
            <Container style={{ padding: '1.5rem' }}>
                <Img src={`${getBaseUrl()}/public/CBC_LOGO_FULL.png`} height="512" width="492" alt="CBenCorrec'" />
                <Heading style={{ fontSize: "1.75rem", fontWeight: 'bold' }}>Suite à notre rencontre, ci-joint ma carte de visite</Heading>

                <Section style={{ padding: "1.5rem", margin: "0 2.5rem" }}>
                    <Heading as="h2">Floé Gaubert</Heading>
                    <Heading as="h2">Tel: <Link href="tel:0683988242">06 83 98 82 42</Link></Heading>
                    <Heading as="h2">Mail : <Link href="mailto:cbencorrec@gmail.com">cbencorrec@gmail.com</Link></Heading>
                    <Link href={getBaseUrl()}>Visiter mon site vitrine</Link>
                </Section>
                <Text>CBenCorrec&apos; - Floé Gaubert</Text>
            </Container>
        </Body>
    </Html>
)

export default Share