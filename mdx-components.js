function MarkdownLink({ href = '', ...props }) {
  const isExternal = /^https?:\/\//i.test(href);
  const isSafe = isExternal || href.startsWith('/') || href.startsWith('#');

  return <a
    {...props}
    href={isSafe ? href : '#'}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noreferrer noopener' : undefined}
  />;
}

export function useMDXComponents() {
  return { a: MarkdownLink };
}
