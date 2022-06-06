import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "Page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    | SanityKeyed<Hero>
    | SanityKeyed<Grid>
    | SanityKeyed<Testimonial>
    | SanityKeyed<Text>
  >;
}

/**
 * Menu
 *
 *
 */
export interface Menu extends SanityDocument {
  _type: "Menu";

  /**
   * Menu items — `array`
   *
   * Add, edit, and reorder pages
   */
  items?: Array<SanityKeyedReference<Page>>;
}

export type Hero = {
  _type: "Hero";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Text — `string`
   *
   *
   */
  text?: string;
};

export type Grid = {
  _type: "Grid";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<GridItem>>;
};

export type GridItem = {
  _type: "GridItem";
  /**
   * Emoji — `string`
   *
   *
   */
  emoji?: string;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Text — `string`
   *
   *
   */
  text?: string;
};

export type Testimonial = {
  _type: "Testimonial";
  /**
   * Quote — `string`
   *
   *
   */
  quote?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Info — `string`
   *
   *
   */
  info?: string;
};

export type Text = {
  _type: "Text";
  /**
   * Content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;
};

export type Documents = Page | Menu;
