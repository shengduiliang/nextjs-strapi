import type { Schema, Struct } from '@strapi/strapi';

export interface ProductApplication extends Struct.ComponentSchema {
  collectionName: 'components_product_applications';
  info: {
    description: '\u4EA7\u54C1\u5E94\u7528\u573A\u666F\uFF08\u4E00\u884C\u4E00\u4E2A\uFF09';
    displayName: '\u5E94\u7528\u573A\u666F';
    icon: 'apps';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ProductDatasheet extends Struct.ComponentSchema {
  collectionName: 'components_product_datasheets';
  info: {
    description: '\u4EA7\u54C1\u6570\u636E\u624B\u518C\u6761\u76EE';
    displayName: '\u6570\u636E\u624B\u518C';
    icon: 'file';
  };
  attributes: {
    badge: Schema.Attribute.String;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    lang: Schema.Attribute.String;
  };
}

export interface ProductDocumentRow extends Struct.ComponentSchema {
  collectionName: 'components_product_document_rows';
  info: {
    description: '\u6587\u6863\u5217\u8868\u4E2D\u7684\u4E00\u884C';
    displayName: '\u6587\u6863\u884C';
    icon: 'file';
  };
  attributes: {
    cnHref: Schema.Attribute.String;
    date: Schema.Attribute.String;
    enHref: Schema.Attribute.String;
    name: Schema.Attribute.String;
    version: Schema.Attribute.String;
  };
}

export interface ProductDocumentSection extends Struct.ComponentSchema {
  collectionName: 'components_product_document_sections';
  info: {
    description: '\u4EA7\u54C1\u6587\u6863\u5206\u7EC4\uFF08\u6570\u636E\u624B\u518C/\u7528\u6237\u624B\u518C/\u52D8\u8BEF\u8868\uFF09';
    displayName: '\u6587\u6863\u5206\u7EC4';
    icon: 'folder';
  };
  attributes: {
    rows: Schema.Attribute.Component<'product.document-row', true>;
    title: Schema.Attribute.String;
  };
}

export interface ProductParagraph extends Struct.ComponentSchema {
  collectionName: 'components_product_paragraphs';
  info: {
    description: '\u4EA7\u54C1\u63CF\u8FF0\u6BB5\u843D\uFF08\u4E00\u6BB5\u4E00\u4E2A\uFF09';
    displayName: '\u63CF\u8FF0\u6BB5\u843D';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ProductTool extends Struct.ComponentSchema {
  collectionName: 'components_product_tools';
  info: {
    description: '\u4EA7\u54C1\u5DE5\u5177/\u8D44\u6E90\u94FE\u63A5';
    displayName: '\u5DE5\u5177\u8D44\u6E90';
    icon: 'wrench';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    note: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'product.application': ProductApplication;
      'product.datasheet': ProductDatasheet;
      'product.document-row': ProductDocumentRow;
      'product.document-section': ProductDocumentSection;
      'product.paragraph': ProductParagraph;
      'product.tool': ProductTool;
    }
  }
}
