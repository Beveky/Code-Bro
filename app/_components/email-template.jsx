import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ body }) => (
  <Html>
    <Head />
    <Preview>
      CODE〰️BRO For Your Digital Products search now for your future
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://i.ibb.co/wQcqkKB/LoginPic.png"
          width="640"
          height="362"
          alt="CODEBRO"
          style={logo}
        />
        <Text style={paragraph}>Hi {body.fullName},</Text>
        <Text style={paragraph}>
          Thank you for your purchase on CODE BRO. To access your digital
          content, please click the download button below. Should you need any
          further assistance, feel free to reach out to our support team.
        </Text>

        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={{
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "black",
              color: "white",
              borderRadius: 8,
            }}
            href="https://res-console.cloudinary.com/deowoctvk/thumbnails/v1/image/upload/v1712867383/bWVkaXVtX3RodW1ibmFpbF9iMWU5ZDFjYWY5/drilldown"
          >
            Download
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          CODE BRO TEAM
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Subscribe to CODE BRO</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
