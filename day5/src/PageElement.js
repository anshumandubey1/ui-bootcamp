import React from 'react';

export default function PageElement({ htmlElementName, innerHTML, style }) {
  const TagName = htmlElementName;
  // const width = 4;
  // style.width = String((80 * width) / 12) + '%';
  if (typeof innerHTML != 'object')
    return <TagName style={style}>{innerHTML}</TagName>;
  if (Array.isArray(innerHTML))
    return (
      <TagName style={style}>
        {innerHTML.map((x) => (
          <PageElement {...x} />
        ))}
      </TagName>
    );
  return (
    <TagName style={style}>
      <PageElement {...innerHTML} />
    </TagName>
  );
}
