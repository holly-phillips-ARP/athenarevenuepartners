/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Reset your password for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Reset your password</Heading>
        <Text style={text}>
          We received a request to reset your password for {siteName}. Click
          the button below to choose a new password.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Reset Password
        </Button>
        <Text style={footer}>
          If you didn't request a password reset, you can safely ignore this
          email. Your password will not be changed.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
  color: '#231F1C',
}
const container = { padding: '40px 32px', maxWidth: '560px' }
const h1 = {
  fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
  fontSize: '28px',
  fontWeight: 400 as const,
  letterSpacing: '-0.01em',
  color: '#231F1C',
  margin: '0 0 24px',
}
const text = {
  fontSize: '15px',
  color: '#3d3835',
  lineHeight: '1.6',
  margin: '0 0 24px',
}
const button = {
  backgroundColor: '#231F1C',
  color: '#FBF7F0',
  fontSize: '14px',
  fontWeight: 500 as const,
  borderRadius: '4px',
  padding: '14px 28px',
  textDecoration: 'none',
  letterSpacing: '0.01em',
}
const footer = {
  fontSize: '12px',
  color: '#8a827d',
  lineHeight: '1.6',
  margin: '40px 0 0',
  borderTop: '1px solid #e8e1d6',
  paddingTop: '24px',
}
