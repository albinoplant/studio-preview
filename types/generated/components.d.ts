import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    backgroundImage: Attribute.Media;
    button: Attribute.Component<'button.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'hero.hero': HeroHero;
    }
  }
}
