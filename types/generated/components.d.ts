import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.hero': SectionHero;
    }
  }
}
