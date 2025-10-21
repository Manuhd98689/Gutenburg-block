import { Fragment } from '@wordpress/element';
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { text, url, openInNewTab, rel } = attributes;
  const blockProps = useBlockProps();

  const Tag = url ? 'a' : 'button';
  const relValue = openInNewTab
    ? [rel, 'noopener', 'noreferrer'].filter(Boolean).join(' ')
    : rel;

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title="Link settings" initialOpen>
          <TextControl
            label="URL"
            placeholder="https://example.com"
            value={url}
            onChange={(value) => setAttributes({ url: value })}
          />
          <ToggleControl
            label="Open in new tab"
            checked={openInNewTab}
            onChange={(value) => setAttributes({ openInNewTab: value })}
          />
          <TextControl
            label="rel"
            help="Optional rel attribute (e.g., nofollow). noopener and noreferrer are added automatically when opening in new tab."
            value={rel}
            onChange={(value) => setAttributes({ rel: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <Tag
          className="learn-more"
          href={url || undefined}
          target={openInNewTab && url ? '_blank' : undefined}
          rel={url ? relValue || undefined : undefined}
          type={!url ? 'button' : undefined}
          onClick={(e) => e.preventDefault()}
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <RichText
            tagName="span"
            className="button-text"
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            allowedFormats={[]}
            placeholder="Button text"
          />
        </Tag>
      </div>
    </Fragment>
  );
}