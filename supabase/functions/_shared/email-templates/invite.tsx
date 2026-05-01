/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface InviteEmailProps {
  siteName: string
  siteUrl: string
  confirmationUrl: string
}

export const InviteEmail = ({
  siteName,
  siteUrl,
  confirmationUrl,
}: InviteEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You've been invited to join {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>You've been invited</Heading>
        <Text style={text}>
          You've been invited to join{' '}
          <Link href={siteUrl} style={link}>
            <strong>{siteName}</strong>
          </Link>
          . Click the button below to accept the invitation and create your
          account.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Accept Invitation
        </Button>
        <Text style={footer}>
          If you weren't expecting this invitation, you can safely ignore this
          email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default InviteEmail

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
const link = { color: '#C25A3A', textDecoration: 'underline' }
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
