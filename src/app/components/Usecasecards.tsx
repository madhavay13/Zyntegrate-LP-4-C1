import React from 'react';
const useCases = [
  {
    title: 'Legacy System Integration',
    description:
      'Connect outdated databases and systems with modern cloud applications without extensive rewrites.',
    benefits: [
      'Bridge legacy and modern systems',
      'Preserve existing investments',
      'No complex migrations required',
    ],
  },
  {
    title: 'Multi-Cloud Orchestration',
    description:
      'Seamlessly integrate services across AWS, Azure, Google Cloud, and other cloud providers.',
    benefits: [
      'Cross-platform data flow',
      'Unified management console',
      'Vendor-agnostic approach',
    ],
  },
  {
    title: 'Third-Party API Integration',
    description:
      'Connect with any REST, SOAP, or GraphQL API to extend your business capabilities.',
    benefits: [
      'Pre-built connectors for popular APIs',
      'Custom connector development',
      'API versioning support',
    ],
  },
];
export function UseCaseCards() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        padding: '1.5rem',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      {useCases.map((useCase, index) => (
        <article
          key={index}
          style={{
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb',
            backgroundColor: '#fff',
            flexShrink: 0,
          }}
        >
          <h3
            style={{
              margin: '0 0 0.75rem',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#111827',
            }}
          >
            {useCase.title}
          </h3>
          <p
            style={{
              margin: '0 0 1rem',
              fontSize: '0.9375rem',
              lineHeight: 1.5,
              color: '#4b5563',
            }}
          >
            {useCase.description}
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.25rem',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              color: '#374151',
            }}
          >
            {useCase.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
export default UseCaseCards;