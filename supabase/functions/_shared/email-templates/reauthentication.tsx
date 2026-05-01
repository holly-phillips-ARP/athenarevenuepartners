/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your verification code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Confirm reauthentication</Heading>
        <Text style={text}>Use the code below to confirm your identity:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          This code will expire shortly. If you didn't request this, you can
          safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

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
const codeStyle = {
  fontFamily: "'SF Mono', Menlo, Consolas, monospace",
  fontSize: '28px',
  fontWeight: 600 as const,
  letterSpacing: '0.15em',
  color: '#231F1C',
  backgroundColor: '#FBF7F0',
  border: '1px solid #e8e1d6',
  borderRadius: '4px',
  padding: '16px 24px',
  display: 'inline-block',
  margin: '0 0 32px',
}
const footer = {
  fontSize: '12px',
  color: '#8a827d',
  lineHeight: '1.6',
  margin: '40px 0 0',
  borderTop: '1px solid #e8e1d6',
  paddingTop: '24px',
}
