'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  // Generate JSON-LD schema
  const schemaItems = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://drcapitalva.com'}${item.href}`,
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        className="flex items-center gap-2 text-sm text-text-muted mb-8"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-teal-deep transition-colors">
          Home
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <span className="text-text-muted">/</span>
            {index === items.length - 1 ? (
              <span className="text-text-primary font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-teal-deep transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;
