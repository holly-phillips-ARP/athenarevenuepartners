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

interface DiagnosticRequestProps {
  name?: string
  email?: string
  company?: string | null
  role?: string | null
  arr_stage?: string | null
  challenge?: string | null
}

const Row = ({ label, value }: { label: string; value?: string | null }) => (
  <Section style={row}>
    <Text style={rowLabel}>{label}</Text>
    <Text style={rowValue}>{value && value.trim() ? value : '—'}</Text>
  </Section>
)

const DiagnosticRequestEmail = ({
  name,
  email,
  company,
  role,
  arr_stage,
  challenge,
}: DiagnosticRequestProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New Revenue Diagnostic request from {name || 'a prospect'}
      {company ? ` at ${company}` : ''}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Revenue Diagnostic request</Heading>
        <Text style={lede}>
          A new diagnostic request just came in from the website.
        </Text>
        <Hr style={hr} />
        <Row label="Name" value={name} />
        <Row label="Email" value={email} />
        <Row label="Company" value={company} />
        <Row label="Role" value={role} />
        <Row label="Current ARR / stage" value={arr_stage} />
        <Row label="Top revenue challenge" value={challenge} />
        <Hr style={hr} />
        <Text style={footerNote}>
          Reply directly to this email to reach {name || 'the prospect'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: DiagnosticRequestEmail,
  subject: (data: Record<string, any>) => {
    const name = data?.name || 'New prospect'
    const company = data?.company ? ` (${data.company})` : ''
    return `New diagnostic request — ${name}${company}`
  },
  displayName: 'Diagnostic request notification',
  to: 'hello@athenarevenuepartners.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    company: 'Acme Inc.',
    role: 'VP Revenue',
    arr_stage: '$5M ARR, Series A',
    challenge: 'Plateau in net new logo growth and rising CAC.',
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
const lede = {
  fontSize: '15px',
  color: '#3d3835',
  lineHeight: '1.6',
  margin: '0 0 24px',
}
const hr = {
  border: 'none',
  borderTop: '1px solid #e8e1d6',
  margin: '24px 0',
}
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
