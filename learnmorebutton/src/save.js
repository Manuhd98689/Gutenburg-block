import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { text, url, openInNewTab, rel } = attributes;
  const blockProps = useBlockProps.save();

  const Tag = url ? 'a' : 'button';
  const relValue = openInNewTab
    ? [rel, 'noopener', 'noreferrer'].filter(Boolean).join(' ')
    : rel;

  return (
    <div {...blockProps}>
      <Tag
        className="learn-more"
        href={url || undefined}
        target={openInNewTab && url ? '_blank' : undefined}
        rel={url ? relValue || undefined : undefined}
        type={!url ? 'button' : undefined}
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <RichText.Content tagName="span" className="button-text" value={text} />
      </Tag>
    </div>
  );
}
