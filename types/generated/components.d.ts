import type { Schema, Attribute } from '@strapi/strapi';

export interface PageElementsAdvancedInfoSection extends Schema.Component {
  collectionName: 'components_page_elements_advanced_info_sections';
  info: {
    displayName: 'AdvancedInfoSection';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    content: Attribute.Text;
    url: Attribute.String;
    buttonText: Attribute.String;
  };
}

export interface PageElementsBlogTeaser extends Schema.Component {
  collectionName: 'components_page_elements_blog_teasers';
  info: {
    displayName: 'BlogTeaser';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface PageElementsCoreTeam extends Schema.Component {
  collectionName: 'components_page_elements_core_teams';
  info: {
    displayName: 'Core Team';
    icon: 'cube';
  };
  attributes: {
    TeamMember: Attribute.Component<'sub-elements.team-member', true>;
  };
}

export interface PageElementsCtaSection extends Schema.Component {
  collectionName: 'components_page_elements_cta_sections';
  info: {
    displayName: 'CTASection';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonLink: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface PageElementsCta extends Schema.Component {
  collectionName: 'components_page_elements_ctas';
  info: {
    displayName: 'CTA';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Categories: Attribute.String;
  };
}

export interface PageElementsFeaturedProject extends Schema.Component {
  collectionName: 'components_page_elements_featured_projects';
  info: {
    displayName: 'Featured Project';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface PageElementsImageCarousel extends Schema.Component {
  collectionName: 'components_page_elements_image_carousels';
  info: {
    displayName: 'Image Carousel';
    icon: 'dashboard';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Images: Attribute.Media & Attribute.Required;
  };
}

export interface PageElementsInfoSection extends Schema.Component {
  collectionName: 'components_page_elements_info_sections';
  info: {
    displayName: 'InfoSection';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    InfoItem: Attribute.Component<'sub-elements.info-section-item', true>;
    ShowItemNumbering: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface PageElementsPageTitle extends Schema.Component {
  collectionName: 'components_page_elements_page_titles';
  info: {
    displayName: 'PageTitleSection';
    icon: 'alien';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface PageElementsProductScroll extends Schema.Component {
  collectionName: 'components_page_elements_product_scrolls';
  info: {
    displayName: 'Product Scroll';
    icon: 'cube';
  };
  attributes: {
    productScroll: Attribute.Component<'page-elements.cta', true>;
  };
}

export interface PageElementsProjects extends Schema.Component {
  collectionName: 'components_page_elements_projects';
  info: {
    displayName: 'Projects';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface PageElementsTestimonialsComponent extends Schema.Component {
  collectionName: 'components_page_elements_testimonials_components';
  info: {
    displayName: 'Testimonials Component';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
  };
}

export interface PageElementsTitleSection extends Schema.Component {
  collectionName: 'components_page_elements_title_sections';
  info: {
    displayName: 'TitleSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface PageElementsTwoColumnAdvanced extends Schema.Component {
  collectionName: 'components_page_elements_two_column_advanceds';
  info: {
    displayName: 'TwoColumnAdvanced';
    icon: 'cube';
  };
  attributes: {
    item: Attribute.Component<'page-elements.advanced-info-section', true>;
  };
}

export interface PageElementsTwoColumnInfoSection extends Schema.Component {
  collectionName: 'components_page_elements_two_column_info_sections';
  info: {
    displayName: 'TwoColumnInfoSection';
    icon: 'grid';
    description: '';
  };
  attributes: {
    SectionSet: Attribute.Component<'sub-elements.section-set', true>;
  };
}

export interface PageElementsWhoWeAre extends Schema.Component {
  collectionName: 'components_page_elements_who_we_ares';
  info: {
    displayName: 'Who We Are';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SubElementsImageCarouselItems extends Schema.Component {
  collectionName: 'components_page_elements_image_carousel_items';
  info: {
    displayName: 'ImageCarouselItems';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    AltText: Attribute.String;
  };
}

export interface SubElementsInfoSectionItem extends Schema.Component {
  collectionName: 'components_page_elements_info_section_items';
  info: {
    displayName: 'InfoSectionItem';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    htmlContent: Attribute.Blocks;
  };
}

export interface SubElementsSectionSet extends Schema.Component {
  collectionName: 'components_sub_elements_section_sets';
  info: {
    displayName: 'SectionSet';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface SubElementsTeamMember extends Schema.Component {
  collectionName: 'components_sub_elements_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'alien';
  };
  attributes: {
    Name: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.Text;
    Location: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-elements.advanced-info-section': PageElementsAdvancedInfoSection;
      'page-elements.blog-teaser': PageElementsBlogTeaser;
      'page-elements.core-team': PageElementsCoreTeam;
      'page-elements.cta-section': PageElementsCtaSection;
      'page-elements.cta': PageElementsCta;
      'page-elements.featured-project': PageElementsFeaturedProject;
      'page-elements.image-carousel': PageElementsImageCarousel;
      'page-elements.info-section': PageElementsInfoSection;
      'page-elements.page-title': PageElementsPageTitle;
      'page-elements.product-scroll': PageElementsProductScroll;
      'page-elements.projects': PageElementsProjects;
      'page-elements.testimonials-component': PageElementsTestimonialsComponent;
      'page-elements.title-section': PageElementsTitleSection;
      'page-elements.two-column-advanced': PageElementsTwoColumnAdvanced;
      'page-elements.two-column-info-section': PageElementsTwoColumnInfoSection;
      'page-elements.who-we-are': PageElementsWhoWeAre;
      'sub-elements.image-carousel-items': SubElementsImageCarouselItems;
      'sub-elements.info-section-item': SubElementsInfoSectionItem;
      'sub-elements.section-set': SubElementsSectionSet;
      'sub-elements.team-member': SubElementsTeamMember;
    }
  }
}
