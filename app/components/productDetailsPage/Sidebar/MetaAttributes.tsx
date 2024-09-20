import React from 'react';
import moment from 'moment';

interface MetaAttributesProps {
  templateData: {
    updatedAt: string;
    createdAt: string;
    category: string;
    widgetReady: boolean;
    highResolution: boolean;
    compatible: string[];
    version: string;
    filesIncluded: string[];
    layout: string;
    tags: string[];
  };
}

const MetaAttributes: React.FC<MetaAttributesProps> = ({ templateData }) => {
  return (
    <ul className="meta-attribute mt-4">
      <li className="meta-attribute__item">
        <span className="name">Last Update</span>
        <span className="details">{moment(templateData.updatedAt).format("ll")}</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Published</span>
        <span className="details">{moment(templateData.createdAt).format("ll")}</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Category</span>
        <span className="details">{templateData.category}</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Widget Ready</span>
        <span className="details">{templateData.widgetReady ? "Yes" : "No"}</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">High Resolution</span>
        <span className="details">{templateData.highResolution ? "Yes" : "No"}</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Compatible with</span>
        <div className="details">
          {templateData.compatible.map((compatibleWith: string, index: number) => (
            <span key={index}>
              {compatibleWith}
              {index < templateData.compatible.length-1 && ', ' || index === templateData.compatible.length-1 && ''}
            </span>
          ))}
        </div>
      </li>
      <li className="meta-attribute__item">
        <span className="name">File size</span>
        <span className="details">85 MB</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Framework</span>
        <span className="details">Underscores</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Software Version</span>
        <span>{templateData.version}</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Marketplace Files Included</span>
        <span className="details">
          {templateData.filesIncluded.map((fileIncluded: string, index: number) => (
            <span key={index} className="hover-text-decoration-underline">
              {fileIncluded}
              {index < templateData.filesIncluded.length-1 && ', ' || index === templateData.filesIncluded.length-1 && ''}
            </span>
          ))}
        </span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Layout</span>
        <span className="details">{templateData.layout}</span>
      </li>
      <li className="meta-attribute__item">
        <span className="name">Tags</span>
        <div className="details">
          {templateData.tags.map((tag: string, index: number) => (
            <span key={index} className="hover-text-decoration-underline">
              {tag}
              {index < templateData.tags.length-1 && ', ' || index === templateData.tags.length-1 && ''}
            </span>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default MetaAttributes;
