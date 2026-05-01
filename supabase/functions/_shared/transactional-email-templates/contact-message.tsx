/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactMessageProps {
  name?: string
  email?: string
  message?: string
  source?: string
}

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Section style={row}>
    <Text style={rowLabel}>{label}</Text>
    <Text style={rowValue}>{value && value.trim() ? value : '—'}</Text>
  </Section>
)

const ContactMessageEmail = ({ name, email, message, source }: ContactMessageProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New message from {name || 'a website visitor'}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New website message</Heading>
        <Text style={lede}>
          Someone just reached out from the Athena Revenue Partners website.
        </Text>
        <Hr style={hr} />
        <Row label="Name" value={name} />
        <Row label="Email" value={email} />
        <Row label="Message" value={message} />
        {source ? <Row label="Source" value={source} /> : null}
        <Hr style={hr} />
        <Text style={footerNote}>
          Reply directly to this email to reach {name || 'them'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactMessageEmail,
  subject: (data: Record<string, any>) => {
    const name = data?.name || 'New contact'
    const src = data?.source ? ` (${data.source})` : ''
    return `New website message — ${name}${src}`
  },
  displayName: 'Contact message notification',
  to: 'hello@athenarevenuepartners.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Would love to chat about scaling our outbound motion.',
    source: 'Talk to us',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
  color: '#231F1C',
}
const container = { padding: '40px 32px', maxWidth: '600px' }
const h1 = {
  fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
  fontSize: '26px',
  fontWeight: 400 as const,
  letterSpacing: '-0.01em',
  color: '#231F1C',
  margin: '0 0 12px',
}
const lede = { fontSize: '15px', color: '#3d3835', lineHeight: '1.6', margin: '0 0 24px' }
const hr = { border: 'none', borderTop: '1px solid #e8e1d6', margin: '24px 0' }
const row = { margin: '0 0 16px' }
const rowLabel = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: '#8a827d',
  margin: '0 0 4px',
  fontWeight: 600 as const,
}
const rowValue = {
  fontSize: '15px',
  color: '#231F1C',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}
const footerNote = {
  fontSize: '13px',
  color: '#8a827d',
  fontStyle: 'italic' as const,
  margin: '0',
}
