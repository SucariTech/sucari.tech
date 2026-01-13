/* eslint-disable */

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponent = Entry & _Node & {
  readonly __typename?: 'AboutUsComponent';
  readonly _id: Scalars['ID']['output'];
  readonly body?: Maybe<AboutUsComponentBody>;
  readonly buttonsCollection?: Maybe<AboutUsComponentButtonsCollection>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly heading?: Maybe<AboutUsComponentHeading>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<AboutUsComponentLinkingCollections>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly subheading?: Maybe<AboutUsComponentSubheading>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentButtonsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<AboutUsComponentButtonsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionButtonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/aboutUsComponent) */
export type AboutUsComponentSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AboutUsComponentBody = {
  readonly __typename?: 'AboutUsComponentBody';
  readonly json: Scalars['JSON']['output'];
  readonly links: AboutUsComponentBodyLinks;
};

export type AboutUsComponentBodyAssets = {
  readonly __typename?: 'AboutUsComponentBodyAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type AboutUsComponentBodyEntries = {
  readonly __typename?: 'AboutUsComponentBodyEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type AboutUsComponentBodyLinks = {
  readonly __typename?: 'AboutUsComponentBodyLinks';
  readonly assets: AboutUsComponentBodyAssets;
  readonly entries: AboutUsComponentBodyEntries;
  readonly resources: AboutUsComponentBodyResources;
};

export type AboutUsComponentBodyResources = {
  readonly __typename?: 'AboutUsComponentBodyResources';
  readonly block: ReadonlyArray<AboutUsComponentBodyResourcesBlock>;
  readonly hyperlink: ReadonlyArray<AboutUsComponentBodyResourcesHyperlink>;
  readonly inline: ReadonlyArray<AboutUsComponentBodyResourcesInline>;
};

export type AboutUsComponentBodyResourcesBlock = ResourceLink & {
  readonly __typename?: 'AboutUsComponentBodyResourcesBlock';
  readonly sys: ResourceSys;
};

export type AboutUsComponentBodyResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'AboutUsComponentBodyResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type AboutUsComponentBodyResourcesInline = ResourceLink & {
  readonly __typename?: 'AboutUsComponentBodyResourcesInline';
  readonly sys: ResourceSys;
};

export type AboutUsComponentButtonsCollection = {
  readonly __typename?: 'AboutUsComponentButtonsCollection';
  readonly items: ReadonlyArray<Maybe<PageSectionButton>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum AboutUsComponentButtonsCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export type AboutUsComponentCollection = {
  readonly __typename?: 'AboutUsComponentCollection';
  readonly items: ReadonlyArray<Maybe<AboutUsComponent>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type AboutUsComponentFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<AboutUsComponentFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<AboutUsComponentFilter>>>;
  readonly body_contains?: InputMaybe<Scalars['String']['input']>;
  readonly body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly body_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly buttons?: InputMaybe<CfPageSectionButtonNestedFilter>;
  readonly buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly heading_contains?: InputMaybe<Scalars['String']['input']>;
  readonly heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly subheading_contains?: InputMaybe<Scalars['String']['input']>;
  readonly subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type AboutUsComponentHeading = {
  readonly __typename?: 'AboutUsComponentHeading';
  readonly json: Scalars['JSON']['output'];
  readonly links: AboutUsComponentHeadingLinks;
};

export type AboutUsComponentHeadingAssets = {
  readonly __typename?: 'AboutUsComponentHeadingAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type AboutUsComponentHeadingEntries = {
  readonly __typename?: 'AboutUsComponentHeadingEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type AboutUsComponentHeadingLinks = {
  readonly __typename?: 'AboutUsComponentHeadingLinks';
  readonly assets: AboutUsComponentHeadingAssets;
  readonly entries: AboutUsComponentHeadingEntries;
  readonly resources: AboutUsComponentHeadingResources;
};

export type AboutUsComponentHeadingResources = {
  readonly __typename?: 'AboutUsComponentHeadingResources';
  readonly block: ReadonlyArray<AboutUsComponentHeadingResourcesBlock>;
  readonly hyperlink: ReadonlyArray<AboutUsComponentHeadingResourcesHyperlink>;
  readonly inline: ReadonlyArray<AboutUsComponentHeadingResourcesInline>;
};

export type AboutUsComponentHeadingResourcesBlock = ResourceLink & {
  readonly __typename?: 'AboutUsComponentHeadingResourcesBlock';
  readonly sys: ResourceSys;
};

export type AboutUsComponentHeadingResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'AboutUsComponentHeadingResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type AboutUsComponentHeadingResourcesInline = ResourceLink & {
  readonly __typename?: 'AboutUsComponentHeadingResourcesInline';
  readonly sys: ResourceSys;
};

export type AboutUsComponentLinkingCollections = {
  readonly __typename?: 'AboutUsComponentLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  readonly pageSectionButtonCollection?: Maybe<PageSectionButtonCollection>;
  readonly pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type AboutUsComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AboutUsComponentLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<AboutUsComponentLinkingCollectionsNavigationMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AboutUsComponentLinkingCollectionsPageSectionButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<AboutUsComponentLinkingCollectionsPageSectionButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AboutUsComponentLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<AboutUsComponentLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AboutUsComponentLinkingCollectionsNavigationMenuItemCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum AboutUsComponentLinkingCollectionsPageSectionButtonCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export enum AboutUsComponentLinkingCollectionsPageSectionCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum AboutUsComponentOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type AboutUsComponentSubheading = {
  readonly __typename?: 'AboutUsComponentSubheading';
  readonly json: Scalars['JSON']['output'];
  readonly links: AboutUsComponentSubheadingLinks;
};

export type AboutUsComponentSubheadingAssets = {
  readonly __typename?: 'AboutUsComponentSubheadingAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type AboutUsComponentSubheadingEntries = {
  readonly __typename?: 'AboutUsComponentSubheadingEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type AboutUsComponentSubheadingLinks = {
  readonly __typename?: 'AboutUsComponentSubheadingLinks';
  readonly assets: AboutUsComponentSubheadingAssets;
  readonly entries: AboutUsComponentSubheadingEntries;
  readonly resources: AboutUsComponentSubheadingResources;
};

export type AboutUsComponentSubheadingResources = {
  readonly __typename?: 'AboutUsComponentSubheadingResources';
  readonly block: ReadonlyArray<AboutUsComponentSubheadingResourcesBlock>;
  readonly hyperlink: ReadonlyArray<AboutUsComponentSubheadingResourcesHyperlink>;
  readonly inline: ReadonlyArray<AboutUsComponentSubheadingResourcesInline>;
};

export type AboutUsComponentSubheadingResourcesBlock = ResourceLink & {
  readonly __typename?: 'AboutUsComponentSubheadingResourcesBlock';
  readonly sys: ResourceSys;
};

export type AboutUsComponentSubheadingResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'AboutUsComponentSubheadingResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type AboutUsComponentSubheadingResourcesInline = ResourceLink & {
  readonly __typename?: 'AboutUsComponentSubheadingResourcesInline';
  readonly sys: ResourceSys;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  readonly __typename?: 'Asset';
  readonly contentType?: Maybe<Scalars['String']['output']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly fileName?: Maybe<Scalars['String']['output']>;
  readonly height?: Maybe<Scalars['Int']['output']>;
  readonly linkedFrom?: Maybe<AssetLinkingCollections>;
  readonly size?: Maybe<Scalars['Int']['output']>;
  readonly sys: Sys;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly url?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  readonly __typename?: 'AssetCollection';
  readonly items: ReadonlyArray<Maybe<Asset>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type AssetFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly contentType?: InputMaybe<Scalars['String']['input']>;
  readonly contentType_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contentType_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contentType_not?: InputMaybe<Scalars['String']['input']>;
  readonly contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contentType_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly fileName?: InputMaybe<Scalars['String']['input']>;
  readonly fileName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly fileName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly fileName_not?: InputMaybe<Scalars['String']['input']>;
  readonly fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly fileName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly height?: InputMaybe<Scalars['Int']['input']>;
  readonly height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly height_gt?: InputMaybe<Scalars['Int']['input']>;
  readonly height_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly height_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly height_lt?: InputMaybe<Scalars['Int']['input']>;
  readonly height_lte?: InputMaybe<Scalars['Int']['input']>;
  readonly height_not?: InputMaybe<Scalars['Int']['input']>;
  readonly height_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly size?: InputMaybe<Scalars['Int']['input']>;
  readonly size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly size_gt?: InputMaybe<Scalars['Int']['input']>;
  readonly size_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly size_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly size_lt?: InputMaybe<Scalars['Int']['input']>;
  readonly size_lte?: InputMaybe<Scalars['Int']['input']>;
  readonly size_not?: InputMaybe<Scalars['Int']['input']>;
  readonly size_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly title_contains?: InputMaybe<Scalars['String']['input']>;
  readonly title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly title_not?: InputMaybe<Scalars['String']['input']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly url_contains?: InputMaybe<Scalars['String']['input']>;
  readonly url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly url_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly url_not?: InputMaybe<Scalars['String']['input']>;
  readonly url_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly url_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly width?: InputMaybe<Scalars['Int']['input']>;
  readonly width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly width_gt?: InputMaybe<Scalars['Int']['input']>;
  readonly width_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly width_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly width_lt?: InputMaybe<Scalars['Int']['input']>;
  readonly width_lte?: InputMaybe<Scalars['Int']['input']>;
  readonly width_not?: InputMaybe<Scalars['Int']['input']>;
  readonly width_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  readonly __typename?: 'AssetLinkingCollections';
  readonly cardCollection?: Maybe<CardCollection>;
  readonly contactComponentCollection?: Maybe<ContactComponentCollection>;
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly metadataCollection?: Maybe<MetadataCollection>;
};


export type AssetLinkingCollectionsCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsContactComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  contentType_ASC = 'contentType_ASC',
  contentType_DESC = 'contentType_DESC',
  fileName_ASC = 'fileName_ASC',
  fileName_DESC = 'fileName_DESC',
  height_ASC = 'height_ASC',
  height_DESC = 'height_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
  width_ASC = 'width_ASC',
  width_DESC = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponent = Entry & _Node & {
  readonly __typename?: 'BannerComponent';
  readonly _id: Scalars['ID']['output'];
  readonly body?: Maybe<BannerComponentBody>;
  readonly buttonsCollection?: Maybe<BannerComponentButtonsCollection>;
  readonly cardsCollection?: Maybe<BannerComponentCardsCollection>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly heading?: Maybe<BannerComponentHeading>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<BannerComponentLinkingCollections>;
  readonly subheading?: Maybe<BannerComponentSubheading>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentButtonsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentButtonsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionButtonFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CardFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/bannerComponent) */
export type BannerComponentSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerComponentBody = {
  readonly __typename?: 'BannerComponentBody';
  readonly json: Scalars['JSON']['output'];
  readonly links: BannerComponentBodyLinks;
};

export type BannerComponentBodyAssets = {
  readonly __typename?: 'BannerComponentBodyAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type BannerComponentBodyEntries = {
  readonly __typename?: 'BannerComponentBodyEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type BannerComponentBodyLinks = {
  readonly __typename?: 'BannerComponentBodyLinks';
  readonly assets: BannerComponentBodyAssets;
  readonly entries: BannerComponentBodyEntries;
  readonly resources: BannerComponentBodyResources;
};

export type BannerComponentBodyResources = {
  readonly __typename?: 'BannerComponentBodyResources';
  readonly block: ReadonlyArray<BannerComponentBodyResourcesBlock>;
  readonly hyperlink: ReadonlyArray<BannerComponentBodyResourcesHyperlink>;
  readonly inline: ReadonlyArray<BannerComponentBodyResourcesInline>;
};

export type BannerComponentBodyResourcesBlock = ResourceLink & {
  readonly __typename?: 'BannerComponentBodyResourcesBlock';
  readonly sys: ResourceSys;
};

export type BannerComponentBodyResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'BannerComponentBodyResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type BannerComponentBodyResourcesInline = ResourceLink & {
  readonly __typename?: 'BannerComponentBodyResourcesInline';
  readonly sys: ResourceSys;
};

export type BannerComponentButtonsCollection = {
  readonly __typename?: 'BannerComponentButtonsCollection';
  readonly items: ReadonlyArray<Maybe<PageSectionButton>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum BannerComponentButtonsCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export type BannerComponentCardsCollection = {
  readonly __typename?: 'BannerComponentCardsCollection';
  readonly items: ReadonlyArray<Maybe<Card>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum BannerComponentCardsCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type BannerComponentCollection = {
  readonly __typename?: 'BannerComponentCollection';
  readonly items: ReadonlyArray<Maybe<BannerComponent>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type BannerComponentFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentFilter>>>;
  readonly body_contains?: InputMaybe<Scalars['String']['input']>;
  readonly body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly body_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly buttons?: InputMaybe<CfPageSectionButtonNestedFilter>;
  readonly buttonsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly cards?: InputMaybe<CfCardNestedFilter>;
  readonly cardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly heading_contains?: InputMaybe<Scalars['String']['input']>;
  readonly heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly subheading_contains?: InputMaybe<Scalars['String']['input']>;
  readonly subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type BannerComponentHeading = {
  readonly __typename?: 'BannerComponentHeading';
  readonly json: Scalars['JSON']['output'];
  readonly links: BannerComponentHeadingLinks;
};

export type BannerComponentHeadingAssets = {
  readonly __typename?: 'BannerComponentHeadingAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type BannerComponentHeadingEntries = {
  readonly __typename?: 'BannerComponentHeadingEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type BannerComponentHeadingLinks = {
  readonly __typename?: 'BannerComponentHeadingLinks';
  readonly assets: BannerComponentHeadingAssets;
  readonly entries: BannerComponentHeadingEntries;
  readonly resources: BannerComponentHeadingResources;
};

export type BannerComponentHeadingResources = {
  readonly __typename?: 'BannerComponentHeadingResources';
  readonly block: ReadonlyArray<BannerComponentHeadingResourcesBlock>;
  readonly hyperlink: ReadonlyArray<BannerComponentHeadingResourcesHyperlink>;
  readonly inline: ReadonlyArray<BannerComponentHeadingResourcesInline>;
};

export type BannerComponentHeadingResourcesBlock = ResourceLink & {
  readonly __typename?: 'BannerComponentHeadingResourcesBlock';
  readonly sys: ResourceSys;
};

export type BannerComponentHeadingResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'BannerComponentHeadingResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type BannerComponentHeadingResourcesInline = ResourceLink & {
  readonly __typename?: 'BannerComponentHeadingResourcesInline';
  readonly sys: ResourceSys;
};

export type BannerComponentLinkingCollections = {
  readonly __typename?: 'BannerComponentLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  readonly pageSectionButtonCollection?: Maybe<PageSectionButtonCollection>;
  readonly pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type BannerComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BannerComponentLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentLinkingCollectionsNavigationMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BannerComponentLinkingCollectionsPageSectionButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentLinkingCollectionsPageSectionButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BannerComponentLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BannerComponentLinkingCollectionsNavigationMenuItemCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum BannerComponentLinkingCollectionsPageSectionButtonCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export enum BannerComponentLinkingCollectionsPageSectionCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum BannerComponentOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type BannerComponentSubheading = {
  readonly __typename?: 'BannerComponentSubheading';
  readonly json: Scalars['JSON']['output'];
  readonly links: BannerComponentSubheadingLinks;
};

export type BannerComponentSubheadingAssets = {
  readonly __typename?: 'BannerComponentSubheadingAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type BannerComponentSubheadingEntries = {
  readonly __typename?: 'BannerComponentSubheadingEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type BannerComponentSubheadingLinks = {
  readonly __typename?: 'BannerComponentSubheadingLinks';
  readonly assets: BannerComponentSubheadingAssets;
  readonly entries: BannerComponentSubheadingEntries;
  readonly resources: BannerComponentSubheadingResources;
};

export type BannerComponentSubheadingResources = {
  readonly __typename?: 'BannerComponentSubheadingResources';
  readonly block: ReadonlyArray<BannerComponentSubheadingResourcesBlock>;
  readonly hyperlink: ReadonlyArray<BannerComponentSubheadingResourcesHyperlink>;
  readonly inline: ReadonlyArray<BannerComponentSubheadingResourcesInline>;
};

export type BannerComponentSubheadingResourcesBlock = ResourceLink & {
  readonly __typename?: 'BannerComponentSubheadingResourcesBlock';
  readonly sys: ResourceSys;
};

export type BannerComponentSubheadingResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'BannerComponentSubheadingResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type BannerComponentSubheadingResourcesInline = ResourceLink & {
  readonly __typename?: 'BannerComponentSubheadingResourcesInline';
  readonly sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/card) */
export type Card = Entry & _Node & {
  readonly __typename?: 'Card';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<CardLinkingCollections>;
  readonly media?: Maybe<Asset>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/card) */
export type CardDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/card) */
export type CardInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/card) */
export type CardMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/card) */
export type CardNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardCollection = {
  readonly __typename?: 'CardCollection';
  readonly items: ReadonlyArray<Maybe<Card>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type CardFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CardFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CardFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type CardLinkingCollections = {
  readonly __typename?: 'CardLinkingCollections';
  readonly bannerComponentCollection?: Maybe<BannerComponentCollection>;
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly servicesComponentCollection?: Maybe<ServicesComponentCollection>;
};


export type CardLinkingCollectionsBannerComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<CardLinkingCollectionsBannerComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CardLinkingCollectionsServicesComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<CardLinkingCollectionsServicesComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CardLinkingCollectionsBannerComponentCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum CardLinkingCollectionsServicesComponentCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum CardOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponent = Entry & _Node & {
  readonly __typename?: 'ContactComponent';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly errorMessage?: Maybe<Scalars['String']['output']>;
  readonly formButtonText?: Maybe<Scalars['String']['output']>;
  readonly formFieldsCollection?: Maybe<ContactComponentFormFieldsCollection>;
  readonly heading?: Maybe<ContactComponentHeading>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<ContactComponentLinkingCollections>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly notice?: Maybe<ContactComponentNotice>;
  readonly siteLogo?: Maybe<Asset>;
  readonly successMessage?: Maybe<Scalars['String']['output']>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentErrorMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentFormButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentFormFieldsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ContactComponentFormFieldsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFieldFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentNoticeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentSiteLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/contactComponent) */
export type ContactComponentSuccessMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactComponentCollection = {
  readonly __typename?: 'ContactComponentCollection';
  readonly items: ReadonlyArray<Maybe<ContactComponent>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type ContactComponentFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<ContactComponentFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<ContactComponentFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly errorMessage?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly formButtonText?: InputMaybe<Scalars['String']['input']>;
  readonly formButtonText_contains?: InputMaybe<Scalars['String']['input']>;
  readonly formButtonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly formButtonText_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly formButtonText_not?: InputMaybe<Scalars['String']['input']>;
  readonly formButtonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly formButtonText_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly formFields?: InputMaybe<CfFormFieldNestedFilter>;
  readonly formFieldsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly heading_contains?: InputMaybe<Scalars['String']['input']>;
  readonly heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notice_contains?: InputMaybe<Scalars['String']['input']>;
  readonly notice_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly notice_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly siteLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly successMessage?: InputMaybe<Scalars['String']['input']>;
  readonly successMessage_contains?: InputMaybe<Scalars['String']['input']>;
  readonly successMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly successMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly successMessage_not?: InputMaybe<Scalars['String']['input']>;
  readonly successMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly successMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type ContactComponentFormFieldsCollection = {
  readonly __typename?: 'ContactComponentFormFieldsCollection';
  readonly items: ReadonlyArray<Maybe<FormField>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum ContactComponentFormFieldsCollectionOrder {
  helperText_ASC = 'helperText_ASC',
  helperText_DESC = 'helperText_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  key_ASC = 'key_ASC',
  key_DESC = 'key_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  placeholder_ASC = 'placeholder_ASC',
  placeholder_DESC = 'placeholder_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type ContactComponentHeading = {
  readonly __typename?: 'ContactComponentHeading';
  readonly json: Scalars['JSON']['output'];
  readonly links: ContactComponentHeadingLinks;
};

export type ContactComponentHeadingAssets = {
  readonly __typename?: 'ContactComponentHeadingAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type ContactComponentHeadingEntries = {
  readonly __typename?: 'ContactComponentHeadingEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type ContactComponentHeadingLinks = {
  readonly __typename?: 'ContactComponentHeadingLinks';
  readonly assets: ContactComponentHeadingAssets;
  readonly entries: ContactComponentHeadingEntries;
  readonly resources: ContactComponentHeadingResources;
};

export type ContactComponentHeadingResources = {
  readonly __typename?: 'ContactComponentHeadingResources';
  readonly block: ReadonlyArray<ContactComponentHeadingResourcesBlock>;
  readonly hyperlink: ReadonlyArray<ContactComponentHeadingResourcesHyperlink>;
  readonly inline: ReadonlyArray<ContactComponentHeadingResourcesInline>;
};

export type ContactComponentHeadingResourcesBlock = ResourceLink & {
  readonly __typename?: 'ContactComponentHeadingResourcesBlock';
  readonly sys: ResourceSys;
};

export type ContactComponentHeadingResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'ContactComponentHeadingResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type ContactComponentHeadingResourcesInline = ResourceLink & {
  readonly __typename?: 'ContactComponentHeadingResourcesInline';
  readonly sys: ResourceSys;
};

export type ContactComponentLinkingCollections = {
  readonly __typename?: 'ContactComponentLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  readonly pageSectionButtonCollection?: Maybe<PageSectionButtonCollection>;
  readonly pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type ContactComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContactComponentLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ContactComponentLinkingCollectionsNavigationMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContactComponentLinkingCollectionsPageSectionButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ContactComponentLinkingCollectionsPageSectionButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContactComponentLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ContactComponentLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ContactComponentLinkingCollectionsNavigationMenuItemCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum ContactComponentLinkingCollectionsPageSectionButtonCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export enum ContactComponentLinkingCollectionsPageSectionCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type ContactComponentNotice = {
  readonly __typename?: 'ContactComponentNotice';
  readonly json: Scalars['JSON']['output'];
  readonly links: ContactComponentNoticeLinks;
};

export type ContactComponentNoticeAssets = {
  readonly __typename?: 'ContactComponentNoticeAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type ContactComponentNoticeEntries = {
  readonly __typename?: 'ContactComponentNoticeEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type ContactComponentNoticeLinks = {
  readonly __typename?: 'ContactComponentNoticeLinks';
  readonly assets: ContactComponentNoticeAssets;
  readonly entries: ContactComponentNoticeEntries;
  readonly resources: ContactComponentNoticeResources;
};

export type ContactComponentNoticeResources = {
  readonly __typename?: 'ContactComponentNoticeResources';
  readonly block: ReadonlyArray<ContactComponentNoticeResourcesBlock>;
  readonly hyperlink: ReadonlyArray<ContactComponentNoticeResourcesHyperlink>;
  readonly inline: ReadonlyArray<ContactComponentNoticeResourcesInline>;
};

export type ContactComponentNoticeResourcesBlock = ResourceLink & {
  readonly __typename?: 'ContactComponentNoticeResourcesBlock';
  readonly sys: ResourceSys;
};

export type ContactComponentNoticeResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'ContactComponentNoticeResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type ContactComponentNoticeResourcesInline = ResourceLink & {
  readonly __typename?: 'ContactComponentNoticeResourcesInline';
  readonly sys: ResourceSys;
};

export enum ContactComponentOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  errorMessage_ASC = 'errorMessage_ASC',
  errorMessage_DESC = 'errorMessage_DESC',
  formButtonText_ASC = 'formButtonText_ASC',
  formButtonText_DESC = 'formButtonText_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  successMessage_ASC = 'successMessage_ASC',
  successMessage_DESC = 'successMessage_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  readonly __typename?: 'ContentfulMetadata';
  readonly concepts: ReadonlyArray<Maybe<TaxonomyConcept>>;
  readonly tags: ReadonlyArray<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  readonly id_contains_all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly id_contains_none?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly id_contains_some?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  readonly descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  readonly id_contains_all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly id_contains_none?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly id_contains_some?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  readonly concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  readonly concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  readonly tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  readonly id_contains_all?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly id_contains_none?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly id_contains_some?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  readonly __typename?: 'ContentfulTag';
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly sys: Sys;
};

export type EntryCollection = {
  readonly __typename?: 'EntryCollection';
  readonly items: ReadonlyArray<Maybe<Entry>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type EntryFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPage = Entry & _Node & {
  readonly __typename?: 'ErrorPage';
  readonly _id: Scalars['ID']['output'];
  readonly code?: Maybe<Scalars['Int']['output']>;
  readonly content?: Maybe<RichTextComponent>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly footerMenu?: Maybe<FooterMenu>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<ErrorPageLinkingCollections>;
  readonly metadata?: Maybe<Metadata>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly navigationMenu?: Maybe<NavigationMenu>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RichTextComponentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageFooterMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterMenuFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/errorPage) */
export type ErrorPageNavigationMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};

export type ErrorPageCollection = {
  readonly __typename?: 'ErrorPageCollection';
  readonly items: ReadonlyArray<Maybe<ErrorPage>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type ErrorPageFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<ErrorPageFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<ErrorPageFilter>>>;
  readonly code?: InputMaybe<Scalars['Int']['input']>;
  readonly code_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly code_gt?: InputMaybe<Scalars['Int']['input']>;
  readonly code_gte?: InputMaybe<Scalars['Int']['input']>;
  readonly code_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly code_lt?: InputMaybe<Scalars['Int']['input']>;
  readonly code_lte?: InputMaybe<Scalars['Int']['input']>;
  readonly code_not?: InputMaybe<Scalars['Int']['input']>;
  readonly code_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly content?: InputMaybe<CfRichTextComponentNestedFilter>;
  readonly content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly footerMenu?: InputMaybe<CfFooterMenuNestedFilter>;
  readonly footerMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly metadata?: InputMaybe<CfMetadataNestedFilter>;
  readonly metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly navigationMenu?: InputMaybe<CfNavigationMenuNestedFilter>;
  readonly navigationMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type ErrorPageLinkingCollections = {
  readonly __typename?: 'ErrorPageLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type ErrorPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ErrorPageOrder {
  code_ASC = 'code_ASC',
  code_DESC = 'code_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/FAQComponent) */
export type FaqComponent = Entry & _Node & {
  readonly __typename?: 'FaqComponent';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly heading?: Maybe<FaqComponentHeading>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<FaqComponentLinkingCollections>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly questionsCollection?: Maybe<FaqComponentQuestionsCollection>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/FAQComponent) */
export type FaqComponentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/FAQComponent) */
export type FaqComponentHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/FAQComponent) */
export type FaqComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/FAQComponent) */
export type FaqComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/FAQComponent) */
export type FaqComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/FAQComponent) */
export type FaqComponentQuestionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FaqComponentQuestionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageQuestionFilter>;
};

export type FaqComponentCollection = {
  readonly __typename?: 'FaqComponentCollection';
  readonly items: ReadonlyArray<Maybe<FaqComponent>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type FaqComponentFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<FaqComponentFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<FaqComponentFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly heading_contains?: InputMaybe<Scalars['String']['input']>;
  readonly heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly questions?: InputMaybe<CfPageQuestionNestedFilter>;
  readonly questionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type FaqComponentHeading = {
  readonly __typename?: 'FaqComponentHeading';
  readonly json: Scalars['JSON']['output'];
  readonly links: FaqComponentHeadingLinks;
};

export type FaqComponentHeadingAssets = {
  readonly __typename?: 'FaqComponentHeadingAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type FaqComponentHeadingEntries = {
  readonly __typename?: 'FaqComponentHeadingEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type FaqComponentHeadingLinks = {
  readonly __typename?: 'FaqComponentHeadingLinks';
  readonly assets: FaqComponentHeadingAssets;
  readonly entries: FaqComponentHeadingEntries;
  readonly resources: FaqComponentHeadingResources;
};

export type FaqComponentHeadingResources = {
  readonly __typename?: 'FaqComponentHeadingResources';
  readonly block: ReadonlyArray<FaqComponentHeadingResourcesBlock>;
  readonly hyperlink: ReadonlyArray<FaqComponentHeadingResourcesHyperlink>;
  readonly inline: ReadonlyArray<FaqComponentHeadingResourcesInline>;
};

export type FaqComponentHeadingResourcesBlock = ResourceLink & {
  readonly __typename?: 'FaqComponentHeadingResourcesBlock';
  readonly sys: ResourceSys;
};

export type FaqComponentHeadingResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'FaqComponentHeadingResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type FaqComponentHeadingResourcesInline = ResourceLink & {
  readonly __typename?: 'FaqComponentHeadingResourcesInline';
  readonly sys: ResourceSys;
};

export type FaqComponentLinkingCollections = {
  readonly __typename?: 'FaqComponentLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  readonly pageSectionButtonCollection?: Maybe<PageSectionButtonCollection>;
  readonly pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type FaqComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FaqComponentLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FaqComponentLinkingCollectionsNavigationMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FaqComponentLinkingCollectionsPageSectionButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FaqComponentLinkingCollectionsPageSectionButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FaqComponentLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FaqComponentLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FaqComponentLinkingCollectionsNavigationMenuItemCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum FaqComponentLinkingCollectionsPageSectionButtonCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export enum FaqComponentLinkingCollectionsPageSectionCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum FaqComponentOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type FaqComponentQuestionsCollection = {
  readonly __typename?: 'FaqComponentQuestionsCollection';
  readonly items: ReadonlyArray<Maybe<PageQuestion>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum FaqComponentQuestionsCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenu = Entry & _Node & {
  readonly __typename?: 'FooterMenu';
  readonly _id: Scalars['ID']['output'];
  readonly contactEmailAddress?: Maybe<Scalars['String']['output']>;
  readonly contactGroupName?: Maybe<Scalars['String']['output']>;
  readonly contactPhoneNumber?: Maybe<Scalars['String']['output']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly facebookLink?: Maybe<Scalars['String']['output']>;
  readonly gitHubLink?: Maybe<Scalars['String']['output']>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly languageGroupName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  readonly linkedInLink?: Maybe<Scalars['String']['output']>;
  readonly sys: Sys;
  readonly twitterLink?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuContactEmailAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuContactGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuContactPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuGitHubLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuLanguageGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuLinkedInLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/footerMenu) */
export type FooterMenuTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterMenuCollection = {
  readonly __typename?: 'FooterMenuCollection';
  readonly items: ReadonlyArray<Maybe<FooterMenu>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type FooterMenuFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<FooterMenuFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<FooterMenuFilter>>>;
  readonly contactEmailAddress?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contactEmailAddress_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactEmailAddress_not?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactGroupName?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contactGroupName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactGroupName_not?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contactPhoneNumber_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactPhoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly facebookLink?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly facebookLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly facebookLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly gitHubLink?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gitHubLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly gitHubLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly languageGroupName?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly languageGroupName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly languageGroupName_not?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly linkedInLink?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly linkedInLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly linkedInLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly twitterLink?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly twitterLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly twitterLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterMenuLinkingCollections = {
  readonly __typename?: 'FooterMenuLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly errorPageCollection?: Maybe<ErrorPageCollection>;
  readonly pageCollection?: Maybe<PageCollection>;
};


export type FooterMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FooterMenuLinkingCollectionsErrorPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FooterMenuLinkingCollectionsErrorPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FooterMenuLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FooterMenuLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FooterMenuLinkingCollectionsErrorPageCollectionOrder {
  code_ASC = 'code_ASC',
  code_DESC = 'code_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum FooterMenuLinkingCollectionsPageCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  pathname_ASC = 'pathname_ASC',
  pathname_DESC = 'pathname_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum FooterMenuOrder {
  contactEmailAddress_ASC = 'contactEmailAddress_ASC',
  contactEmailAddress_DESC = 'contactEmailAddress_DESC',
  contactGroupName_ASC = 'contactGroupName_ASC',
  contactGroupName_DESC = 'contactGroupName_DESC',
  contactPhoneNumber_ASC = 'contactPhoneNumber_ASC',
  contactPhoneNumber_DESC = 'contactPhoneNumber_DESC',
  facebookLink_ASC = 'facebookLink_ASC',
  facebookLink_DESC = 'facebookLink_DESC',
  gitHubLink_ASC = 'gitHubLink_ASC',
  gitHubLink_DESC = 'gitHubLink_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  languageGroupName_ASC = 'languageGroupName_ASC',
  languageGroupName_DESC = 'languageGroupName_DESC',
  linkedInLink_ASC = 'linkedInLink_ASC',
  linkedInLink_DESC = 'linkedInLink_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  twitterLink_ASC = 'twitterLink_ASC',
  twitterLink_DESC = 'twitterLink_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/formField) */
export type FormField = Entry & _Node & {
  readonly __typename?: 'FormField';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly helperText?: Maybe<Scalars['String']['output']>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly key?: Maybe<Scalars['String']['output']>;
  readonly label?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<FormFieldLinkingCollections>;
  readonly placeholder?: Maybe<Scalars['String']['output']>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/formField) */
export type FormFieldHelperTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/formField) */
export type FormFieldInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/formField) */
export type FormFieldKeyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/formField) */
export type FormFieldLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/formField) */
export type FormFieldLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/formField) */
export type FormFieldPlaceholderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormFieldCollection = {
  readonly __typename?: 'FormFieldCollection';
  readonly items: ReadonlyArray<Maybe<FormField>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type FormFieldFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<FormFieldFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<FormFieldFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly helperText?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_contains?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly helperText_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly helperText_not?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly key?: InputMaybe<Scalars['String']['input']>;
  readonly key_contains?: InputMaybe<Scalars['String']['input']>;
  readonly key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly key_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly key_not?: InputMaybe<Scalars['String']['input']>;
  readonly key_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly key_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly label?: InputMaybe<Scalars['String']['input']>;
  readonly label_contains?: InputMaybe<Scalars['String']['input']>;
  readonly label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly label_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly label_not?: InputMaybe<Scalars['String']['input']>;
  readonly label_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly label_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly placeholder?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_contains?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly placeholder_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly placeholder_not?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type FormFieldLinkingCollections = {
  readonly __typename?: 'FormFieldLinkingCollections';
  readonly contactComponentCollection?: Maybe<ContactComponentCollection>;
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type FormFieldLinkingCollectionsContactComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FormFieldLinkingCollectionsContactComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FormFieldLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FormFieldLinkingCollectionsContactComponentCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  errorMessage_ASC = 'errorMessage_ASC',
  errorMessage_DESC = 'errorMessage_DESC',
  formButtonText_ASC = 'formButtonText_ASC',
  formButtonText_DESC = 'formButtonText_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  successMessage_ASC = 'successMessage_ASC',
  successMessage_DESC = 'successMessage_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum FormFieldOrder {
  helperText_ASC = 'helperText_ASC',
  helperText_DESC = 'helperText_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  key_ASC = 'key_ASC',
  key_DESC = 'key_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  placeholder_ASC = 'placeholder_ASC',
  placeholder_DESC = 'placeholder_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  AVIF = 'AVIF',
  /** JPG image format. */
  JPG = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JPG_PROGRESSIVE = 'JPG_PROGRESSIVE',
  /** PNG image format */
  PNG = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  PNG8 = 'PNG8',
  /** WebP image format. */
  WEBP = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  BOTTOM = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  CENTER = 'CENTER',
  /** Focus the resizing on the largest face. */
  FACE = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  FACES = 'FACES',
  /** Focus the resizing on the left. */
  LEFT = 'LEFT',
  /** Focus the resizing on the right. */
  RIGHT = 'RIGHT',
  /** Focus the resizing on the top. */
  TOP = 'TOP',
  /** Focus the resizing on the top left. */
  TOP_LEFT = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TOP_RIGHT = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  CROP = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  FILL = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  FIT = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  PAD = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  SCALE = 'SCALE',
  /** Creates a thumbnail from the image. */
  THUMB = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  readonly backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  readonly cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  readonly format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  readonly height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  readonly quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  readonly resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  readonly resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  readonly width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/metadata) */
export type Metadata = Entry & _Node & {
  readonly __typename?: 'Metadata';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<MetadataLinkingCollections>;
  readonly openGraphImage?: Maybe<Asset>;
  readonly sys: Sys;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly twitterUsername?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/metadata) */
export type MetadataDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/metadata) */
export type MetadataInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/metadata) */
export type MetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/metadata) */
export type MetadataOpenGraphImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/metadata) */
export type MetadataTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/metadata) */
export type MetadataTwitterUsernameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MetadataCollection = {
  readonly __typename?: 'MetadataCollection';
  readonly items: ReadonlyArray<Maybe<Metadata>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type MetadataFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<MetadataFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<MetadataFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly title_contains?: InputMaybe<Scalars['String']['input']>;
  readonly title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly title_not?: InputMaybe<Scalars['String']['input']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly twitterUsername?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly twitterUsername_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly twitterUsername_not?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type MetadataLinkingCollections = {
  readonly __typename?: 'MetadataLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly errorPageCollection?: Maybe<ErrorPageCollection>;
  readonly pageCollection?: Maybe<PageCollection>;
};


export type MetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MetadataLinkingCollectionsErrorPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<MetadataLinkingCollectionsErrorPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MetadataLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<MetadataLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum MetadataLinkingCollectionsErrorPageCollectionOrder {
  code_ASC = 'code_ASC',
  code_DESC = 'code_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum MetadataLinkingCollectionsPageCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  pathname_ASC = 'pathname_ASC',
  pathname_DESC = 'pathname_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum MetadataOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  twitterUsername_ASC = 'twitterUsername_ASC',
  twitterUsername_DESC = 'twitterUsername_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenu) */
export type NavigationMenu = Entry & _Node & {
  readonly __typename?: 'NavigationMenu';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly itemsCollection?: Maybe<NavigationMenuItemsCollection>;
  readonly linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  readonly rootItem?: Maybe<NavigationMenuItem>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenu) */
export type NavigationMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenu) */
export type NavigationMenuRootItemArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuItemFilter>;
};

export type NavigationMenuCollection = {
  readonly __typename?: 'NavigationMenuCollection';
  readonly items: ReadonlyArray<Maybe<NavigationMenu>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type NavigationMenuFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly items?: InputMaybe<CfNavigationMenuItemNestedFilter>;
  readonly itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly rootItem?: InputMaybe<CfNavigationMenuItemNestedFilter>;
  readonly rootItem_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenuItem) */
export type NavigationMenuItem = Entry & _Node & {
  readonly __typename?: 'NavigationMenuItem';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<NavigationMenuItemLinkingCollections>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly navigationMenu?: Maybe<NavigationMenu>;
  readonly reference?: Maybe<NavigationMenuItemReference>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenuItem) */
export type NavigationMenuItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenuItem) */
export type NavigationMenuItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenuItem) */
export type NavigationMenuItemNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenuItem) */
export type NavigationMenuItemNavigationMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/navigationMenuItem) */
export type NavigationMenuItemReferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationMenuItemCollection = {
  readonly __typename?: 'NavigationMenuItemCollection';
  readonly items: ReadonlyArray<Maybe<NavigationMenuItem>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type NavigationMenuItemFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuItemFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuItemFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly navigationMenu?: InputMaybe<CfNavigationMenuNestedFilter>;
  readonly navigationMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuItemLinkingCollections = {
  readonly __typename?: 'NavigationMenuItemLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};


export type NavigationMenuItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavigationMenuItemLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuItemLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum NavigationMenuItemLinkingCollectionsNavigationMenuCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum NavigationMenuItemOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type NavigationMenuItemReference = AboutUsComponent | BannerComponent | ContactComponent | FaqComponent | Page | ServicesComponent;

export type NavigationMenuItemsCollection = {
  readonly __typename?: 'NavigationMenuItemsCollection';
  readonly items: ReadonlyArray<Maybe<NavigationMenuItem>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum NavigationMenuItemsCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type NavigationMenuLinkingCollections = {
  readonly __typename?: 'NavigationMenuLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly errorPageCollection?: Maybe<ErrorPageCollection>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  readonly pageCollection?: Maybe<PageCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavigationMenuLinkingCollectionsErrorPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuLinkingCollectionsErrorPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavigationMenuLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuLinkingCollectionsNavigationMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavigationMenuLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum NavigationMenuLinkingCollectionsErrorPageCollectionOrder {
  code_ASC = 'code_ASC',
  code_DESC = 'code_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum NavigationMenuLinkingCollectionsNavigationMenuItemCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum NavigationMenuLinkingCollectionsPageCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  pathname_ASC = 'pathname_ASC',
  pathname_DESC = 'pathname_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum NavigationMenuOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type Page = Entry & _Node & {
  readonly __typename?: 'Page';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly footerMenu?: Maybe<FooterMenu>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<PageLinkingCollections>;
  readonly metadata?: Maybe<Metadata>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly navigationMenu?: Maybe<NavigationMenu>;
  readonly pathname?: Maybe<Scalars['String']['output']>;
  readonly sectionsCollection?: Maybe<PageSectionsCollection>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PageFooterMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterMenuFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PageNavigationMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PagePathnameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/page) */
export type PageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};

export type PageCollection = {
  readonly __typename?: 'PageCollection';
  readonly items: ReadonlyArray<Maybe<Page>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PageFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PageFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PageFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly footerMenu?: InputMaybe<CfFooterMenuNestedFilter>;
  readonly footerMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly metadata?: InputMaybe<CfMetadataNestedFilter>;
  readonly metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly navigationMenu?: InputMaybe<CfNavigationMenuNestedFilter>;
  readonly navigationMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly pathname?: InputMaybe<Scalars['String']['input']>;
  readonly pathname_contains?: InputMaybe<Scalars['String']['input']>;
  readonly pathname_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly pathname_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly pathname_not?: InputMaybe<Scalars['String']['input']>;
  readonly pathname_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly pathname_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sections?: InputMaybe<CfPageSectionNestedFilter>;
  readonly sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  readonly __typename?: 'PageLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageLinkingCollectionsNavigationMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageLinkingCollectionsNavigationMenuItemCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum PageOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  pathname_ASC = 'pathname_ASC',
  pathname_DESC = 'pathname_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageQuestion) */
export type PageQuestion = Entry & _Node & {
  readonly __typename?: 'PageQuestion';
  readonly _id: Scalars['ID']['output'];
  readonly answer?: Maybe<PageQuestionAnswer>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<PageQuestionLinkingCollections>;
  readonly question?: Maybe<Scalars['String']['output']>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageQuestion) */
export type PageQuestionAnswerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageQuestion) */
export type PageQuestionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageQuestion) */
export type PageQuestionLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageQuestion) */
export type PageQuestionQuestionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageQuestionAnswer = {
  readonly __typename?: 'PageQuestionAnswer';
  readonly json: Scalars['JSON']['output'];
  readonly links: PageQuestionAnswerLinks;
};

export type PageQuestionAnswerAssets = {
  readonly __typename?: 'PageQuestionAnswerAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type PageQuestionAnswerEntries = {
  readonly __typename?: 'PageQuestionAnswerEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type PageQuestionAnswerLinks = {
  readonly __typename?: 'PageQuestionAnswerLinks';
  readonly assets: PageQuestionAnswerAssets;
  readonly entries: PageQuestionAnswerEntries;
  readonly resources: PageQuestionAnswerResources;
};

export type PageQuestionAnswerResources = {
  readonly __typename?: 'PageQuestionAnswerResources';
  readonly block: ReadonlyArray<PageQuestionAnswerResourcesBlock>;
  readonly hyperlink: ReadonlyArray<PageQuestionAnswerResourcesHyperlink>;
  readonly inline: ReadonlyArray<PageQuestionAnswerResourcesInline>;
};

export type PageQuestionAnswerResourcesBlock = ResourceLink & {
  readonly __typename?: 'PageQuestionAnswerResourcesBlock';
  readonly sys: ResourceSys;
};

export type PageQuestionAnswerResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'PageQuestionAnswerResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type PageQuestionAnswerResourcesInline = ResourceLink & {
  readonly __typename?: 'PageQuestionAnswerResourcesInline';
  readonly sys: ResourceSys;
};

export type PageQuestionCollection = {
  readonly __typename?: 'PageQuestionCollection';
  readonly items: ReadonlyArray<Maybe<PageQuestion>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PageQuestionFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PageQuestionFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PageQuestionFilter>>>;
  readonly answer_contains?: InputMaybe<Scalars['String']['input']>;
  readonly answer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly answer_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly question?: InputMaybe<Scalars['String']['input']>;
  readonly question_contains?: InputMaybe<Scalars['String']['input']>;
  readonly question_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly question_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly question_not?: InputMaybe<Scalars['String']['input']>;
  readonly question_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly question_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type PageQuestionLinkingCollections = {
  readonly __typename?: 'PageQuestionLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly faqComponentCollection?: Maybe<FaqComponentCollection>;
};


export type PageQuestionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageQuestionLinkingCollectionsFaqComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageQuestionLinkingCollectionsFaqComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageQuestionLinkingCollectionsFaqComponentCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum PageQuestionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSection) */
export type PageSection = Entry & _Node & {
  readonly __typename?: 'PageSection';
  readonly _id: Scalars['ID']['output'];
  readonly content?: Maybe<PageSectionContent>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<PageSectionLinkingCollections>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSection) */
export type PageSectionContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSection) */
export type PageSectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSection) */
export type PageSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSectionButton) */
export type PageSectionButton = Entry & _Node & {
  readonly __typename?: 'PageSectionButton';
  readonly _id: Scalars['ID']['output'];
  readonly contentfulMetadata: ContentfulMetadata;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<PageSectionButtonLinkingCollections>;
  readonly reference?: Maybe<PageSectionButtonReference>;
  readonly sys: Sys;
  readonly text?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSectionButton) */
export type PageSectionButtonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSectionButton) */
export type PageSectionButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSectionButton) */
export type PageSectionButtonReferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/pageSectionButton) */
export type PageSectionButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSectionButtonCollection = {
  readonly __typename?: 'PageSectionButtonCollection';
  readonly items: ReadonlyArray<Maybe<PageSectionButton>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PageSectionButtonFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionButtonFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionButtonFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly text?: InputMaybe<Scalars['String']['input']>;
  readonly text_contains?: InputMaybe<Scalars['String']['input']>;
  readonly text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly text_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly text_not?: InputMaybe<Scalars['String']['input']>;
  readonly text_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly text_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type PageSectionButtonLinkingCollections = {
  readonly __typename?: 'PageSectionButtonLinkingCollections';
  readonly aboutUsComponentCollection?: Maybe<AboutUsComponentCollection>;
  readonly bannerComponentCollection?: Maybe<BannerComponentCollection>;
  readonly entryCollection?: Maybe<EntryCollection>;
};


export type PageSectionButtonLinkingCollectionsAboutUsComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionButtonLinkingCollectionsAboutUsComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageSectionButtonLinkingCollectionsBannerComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionButtonLinkingCollectionsBannerComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageSectionButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageSectionButtonLinkingCollectionsAboutUsComponentCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum PageSectionButtonLinkingCollectionsBannerComponentCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum PageSectionButtonOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export type PageSectionButtonReference = AboutUsComponent | BannerComponent | ContactComponent | FaqComponent | ServicesComponent;

export type PageSectionCollection = {
  readonly __typename?: 'PageSectionCollection';
  readonly items: ReadonlyArray<Maybe<PageSection>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PageSectionContent = AboutUsComponent | BannerComponent | ContactComponent | FaqComponent | RichTextComponent | ServicesComponent;

export type PageSectionFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionFilter>>>;
  readonly content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type PageSectionLinkingCollections = {
  readonly __typename?: 'PageSectionLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly pageCollection?: Maybe<PageCollection>;
};


export type PageSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageSectionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageSectionLinkingCollectionsPageCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  pathname_ASC = 'pathname_ASC',
  pathname_DESC = 'pathname_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum PageSectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type PageSectionsCollection = {
  readonly __typename?: 'PageSectionsCollection';
  readonly items: ReadonlyArray<Maybe<PageSection>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum PageSectionsCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly _node?: Maybe<_Node>;
  readonly _nodes: ReadonlyArray<Maybe<_Node>>;
  readonly aboutUsComponent?: Maybe<AboutUsComponent>;
  readonly aboutUsComponentCollection?: Maybe<AboutUsComponentCollection>;
  readonly asset?: Maybe<Asset>;
  readonly assetCollection?: Maybe<AssetCollection>;
  readonly bannerComponent?: Maybe<BannerComponent>;
  readonly bannerComponentCollection?: Maybe<BannerComponentCollection>;
  readonly card?: Maybe<Card>;
  readonly cardCollection?: Maybe<CardCollection>;
  readonly contactComponent?: Maybe<ContactComponent>;
  readonly contactComponentCollection?: Maybe<ContactComponentCollection>;
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly errorPage?: Maybe<ErrorPage>;
  readonly errorPageCollection?: Maybe<ErrorPageCollection>;
  readonly faqComponent?: Maybe<FaqComponent>;
  readonly faqComponentCollection?: Maybe<FaqComponentCollection>;
  readonly footerMenu?: Maybe<FooterMenu>;
  readonly footerMenuCollection?: Maybe<FooterMenuCollection>;
  readonly formField?: Maybe<FormField>;
  readonly formFieldCollection?: Maybe<FormFieldCollection>;
  readonly metadata?: Maybe<Metadata>;
  readonly metadataCollection?: Maybe<MetadataCollection>;
  readonly navigationMenu?: Maybe<NavigationMenu>;
  readonly navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  readonly navigationMenuItem?: Maybe<NavigationMenuItem>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  readonly page?: Maybe<Page>;
  readonly pageCollection?: Maybe<PageCollection>;
  readonly pageQuestion?: Maybe<PageQuestion>;
  readonly pageQuestionCollection?: Maybe<PageQuestionCollection>;
  readonly pageSection?: Maybe<PageSection>;
  readonly pageSectionButton?: Maybe<PageSectionButton>;
  readonly pageSectionButtonCollection?: Maybe<PageSectionButtonCollection>;
  readonly pageSectionCollection?: Maybe<PageSectionCollection>;
  readonly richTextComponent?: Maybe<RichTextComponent>;
  readonly richTextComponentCollection?: Maybe<RichTextComponentCollection>;
  readonly servicesComponent?: Maybe<ServicesComponent>;
  readonly servicesComponentCollection?: Maybe<ServicesComponentCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAboutUsComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAboutUsComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<AboutUsComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AboutUsComponentFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBannerComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBannerComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<BannerComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BannerComponentFilter>;
};


export type QueryCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<CardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CardFilter>;
};


export type QueryContactComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ContactComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ContactComponentFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryErrorPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryErrorPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ErrorPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ErrorPageFilter>;
};


export type QueryFaqComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFaqComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FaqComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FaqComponentFilter>;
};


export type QueryFooterMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FooterMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterMenuFilter>;
};


export type QueryFormFieldArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<FormFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFieldFilter>;
};


export type QueryMetadataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<MetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MetadataFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryNavigationMenuItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<NavigationMenuItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuItemFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageQuestionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageQuestionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageQuestionFilter>;
};


export type QueryPageSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageSectionButtonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageSectionButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionButtonFilter>;
};


export type QueryPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<PageSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};


export type QueryRichTextComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRichTextComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<RichTextComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RichTextComponentFilter>;
};


export type QueryServicesComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServicesComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ServicesComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ServicesComponentFilter>;
};

export type ResourceLink = {
  readonly sys: ResourceSys;
};

export type ResourceSys = {
  readonly __typename?: 'ResourceSys';
  readonly linkType: Scalars['String']['output'];
  readonly urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/richTextComponent) */
export type RichTextComponent = Entry & _Node & {
  readonly __typename?: 'RichTextComponent';
  readonly _id: Scalars['ID']['output'];
  readonly body?: Maybe<RichTextComponentBody>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<RichTextComponentLinkingCollections>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/richTextComponent) */
export type RichTextComponentBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/richTextComponent) */
export type RichTextComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/richTextComponent) */
export type RichTextComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type RichTextComponentBody = {
  readonly __typename?: 'RichTextComponentBody';
  readonly json: Scalars['JSON']['output'];
  readonly links: RichTextComponentBodyLinks;
};

export type RichTextComponentBodyAssets = {
  readonly __typename?: 'RichTextComponentBodyAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type RichTextComponentBodyEntries = {
  readonly __typename?: 'RichTextComponentBodyEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type RichTextComponentBodyLinks = {
  readonly __typename?: 'RichTextComponentBodyLinks';
  readonly assets: RichTextComponentBodyAssets;
  readonly entries: RichTextComponentBodyEntries;
  readonly resources: RichTextComponentBodyResources;
};

export type RichTextComponentBodyResources = {
  readonly __typename?: 'RichTextComponentBodyResources';
  readonly block: ReadonlyArray<RichTextComponentBodyResourcesBlock>;
  readonly hyperlink: ReadonlyArray<RichTextComponentBodyResourcesHyperlink>;
  readonly inline: ReadonlyArray<RichTextComponentBodyResourcesInline>;
};

export type RichTextComponentBodyResourcesBlock = ResourceLink & {
  readonly __typename?: 'RichTextComponentBodyResourcesBlock';
  readonly sys: ResourceSys;
};

export type RichTextComponentBodyResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'RichTextComponentBodyResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type RichTextComponentBodyResourcesInline = ResourceLink & {
  readonly __typename?: 'RichTextComponentBodyResourcesInline';
  readonly sys: ResourceSys;
};

export type RichTextComponentCollection = {
  readonly __typename?: 'RichTextComponentCollection';
  readonly items: ReadonlyArray<Maybe<RichTextComponent>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type RichTextComponentFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<RichTextComponentFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<RichTextComponentFilter>>>;
  readonly body_contains?: InputMaybe<Scalars['String']['input']>;
  readonly body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly body_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type RichTextComponentLinkingCollections = {
  readonly __typename?: 'RichTextComponentLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly errorPageCollection?: Maybe<ErrorPageCollection>;
  readonly pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type RichTextComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RichTextComponentLinkingCollectionsErrorPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<RichTextComponentLinkingCollectionsErrorPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RichTextComponentLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<RichTextComponentLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum RichTextComponentLinkingCollectionsErrorPageCollectionOrder {
  code_ASC = 'code_ASC',
  code_DESC = 'code_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum RichTextComponentLinkingCollectionsPageSectionCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum RichTextComponentOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/servicesComponent) */
export type ServicesComponent = Entry & _Node & {
  readonly __typename?: 'ServicesComponent';
  readonly _id: Scalars['ID']['output'];
  readonly cardsCollection?: Maybe<ServicesComponentCardsCollection>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly heading?: Maybe<ServicesComponentHeading>;
  readonly internalName?: Maybe<Scalars['String']['output']>;
  readonly linkedFrom?: Maybe<ServicesComponentLinkingCollections>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/servicesComponent) */
export type ServicesComponentCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ServicesComponentCardsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CardFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/servicesComponent) */
export type ServicesComponentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/servicesComponent) */
export type ServicesComponentHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/servicesComponent) */
export type ServicesComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/servicesComponent) */
export type ServicesComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/njf2oo5j3g5d/content_types/servicesComponent) */
export type ServicesComponentNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesComponentCardsCollection = {
  readonly __typename?: 'ServicesComponentCardsCollection';
  readonly items: ReadonlyArray<Maybe<Card>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export enum ServicesComponentCardsCollectionOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type ServicesComponentCollection = {
  readonly __typename?: 'ServicesComponentCollection';
  readonly items: ReadonlyArray<Maybe<ServicesComponent>>;
  readonly limit: Scalars['Int']['output'];
  readonly skip: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type ServicesComponentFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<ServicesComponentFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<ServicesComponentFilter>>>;
  readonly cards?: InputMaybe<CfCardNestedFilter>;
  readonly cardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly heading_contains?: InputMaybe<Scalars['String']['input']>;
  readonly heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type ServicesComponentHeading = {
  readonly __typename?: 'ServicesComponentHeading';
  readonly json: Scalars['JSON']['output'];
  readonly links: ServicesComponentHeadingLinks;
};

export type ServicesComponentHeadingAssets = {
  readonly __typename?: 'ServicesComponentHeadingAssets';
  readonly block: ReadonlyArray<Maybe<Asset>>;
  readonly hyperlink: ReadonlyArray<Maybe<Asset>>;
};

export type ServicesComponentHeadingEntries = {
  readonly __typename?: 'ServicesComponentHeadingEntries';
  readonly block: ReadonlyArray<Maybe<Entry>>;
  readonly hyperlink: ReadonlyArray<Maybe<Entry>>;
  readonly inline: ReadonlyArray<Maybe<Entry>>;
};

export type ServicesComponentHeadingLinks = {
  readonly __typename?: 'ServicesComponentHeadingLinks';
  readonly assets: ServicesComponentHeadingAssets;
  readonly entries: ServicesComponentHeadingEntries;
  readonly resources: ServicesComponentHeadingResources;
};

export type ServicesComponentHeadingResources = {
  readonly __typename?: 'ServicesComponentHeadingResources';
  readonly block: ReadonlyArray<ServicesComponentHeadingResourcesBlock>;
  readonly hyperlink: ReadonlyArray<ServicesComponentHeadingResourcesHyperlink>;
  readonly inline: ReadonlyArray<ServicesComponentHeadingResourcesInline>;
};

export type ServicesComponentHeadingResourcesBlock = ResourceLink & {
  readonly __typename?: 'ServicesComponentHeadingResourcesBlock';
  readonly sys: ResourceSys;
};

export type ServicesComponentHeadingResourcesHyperlink = ResourceLink & {
  readonly __typename?: 'ServicesComponentHeadingResourcesHyperlink';
  readonly sys: ResourceSys;
};

export type ServicesComponentHeadingResourcesInline = ResourceLink & {
  readonly __typename?: 'ServicesComponentHeadingResourcesInline';
  readonly sys: ResourceSys;
};

export type ServicesComponentLinkingCollections = {
  readonly __typename?: 'ServicesComponentLinkingCollections';
  readonly entryCollection?: Maybe<EntryCollection>;
  readonly navigationMenuItemCollection?: Maybe<NavigationMenuItemCollection>;
  readonly pageSectionButtonCollection?: Maybe<PageSectionButtonCollection>;
  readonly pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type ServicesComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ServicesComponentLinkingCollectionsNavigationMenuItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ServicesComponentLinkingCollectionsNavigationMenuItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ServicesComponentLinkingCollectionsPageSectionButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ServicesComponentLinkingCollectionsPageSectionButtonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ServicesComponentLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ReadonlyArray<InputMaybe<ServicesComponentLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ServicesComponentLinkingCollectionsNavigationMenuItemCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum ServicesComponentLinkingCollectionsPageSectionButtonCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC',
  text_ASC = 'text_ASC',
  text_DESC = 'text_DESC'
}

export enum ServicesComponentLinkingCollectionsPageSectionCollectionOrder {
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export enum ServicesComponentOrder {
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  internalName_ASC = 'internalName_ASC',
  internalName_DESC = 'internalName_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  sys_firstPublishedAt_ASC = 'sys_firstPublishedAt_ASC',
  sys_firstPublishedAt_DESC = 'sys_firstPublishedAt_DESC',
  sys_id_ASC = 'sys_id_ASC',
  sys_id_DESC = 'sys_id_DESC',
  sys_publishedAt_ASC = 'sys_publishedAt_ASC',
  sys_publishedAt_DESC = 'sys_publishedAt_DESC',
  sys_publishedVersion_ASC = 'sys_publishedVersion_ASC',
  sys_publishedVersion_DESC = 'sys_publishedVersion_DESC'
}

export type Sys = {
  readonly __typename?: 'Sys';
  readonly environmentId: Scalars['String']['output'];
  readonly firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly id: Scalars['String']['output'];
  /** The locale that was requested. */
  readonly locale?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly publishedVersion?: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  readonly firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly firstPublishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  readonly firstPublishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly id_contains?: InputMaybe<Scalars['String']['input']>;
  readonly id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly id_not?: InputMaybe<Scalars['String']['input']>;
  readonly id_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  readonly publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  readonly publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  readonly publishedVersion_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  readonly publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  readonly publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  readonly publishedVersion_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  readonly __typename?: 'TaxonomyConcept';
  readonly id?: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  readonly release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  readonly timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
  readonly _id: Scalars['ID']['output'];
};

export type CfCardNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfCardNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfCardNestedFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type CfFooterMenuNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfFooterMenuNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfFooterMenuNestedFilter>>>;
  readonly contactEmailAddress?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contactEmailAddress_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactEmailAddress_not?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactEmailAddress_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactGroupName?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contactGroupName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactGroupName_not?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactGroupName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contactPhoneNumber_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contactPhoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contactPhoneNumber_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly facebookLink?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly facebookLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly facebookLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly facebookLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly gitHubLink?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gitHubLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly gitHubLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly gitHubLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly languageGroupName?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly languageGroupName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly languageGroupName_not?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly languageGroupName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly linkedInLink?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly linkedInLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly linkedInLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly linkedInLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly twitterLink?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly twitterLink_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly twitterLink_not?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterLink_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFormFieldNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfFormFieldNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfFormFieldNestedFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly helperText?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_contains?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly helperText_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly helperText_not?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly helperText_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly key?: InputMaybe<Scalars['String']['input']>;
  readonly key_contains?: InputMaybe<Scalars['String']['input']>;
  readonly key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly key_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly key_not?: InputMaybe<Scalars['String']['input']>;
  readonly key_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly key_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly label?: InputMaybe<Scalars['String']['input']>;
  readonly label_contains?: InputMaybe<Scalars['String']['input']>;
  readonly label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly label_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly label_not?: InputMaybe<Scalars['String']['input']>;
  readonly label_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly label_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly placeholder?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_contains?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly placeholder_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly placeholder_not?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly placeholder_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type CfMetadataNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfMetadataNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfMetadataNestedFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly description_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly description_not?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly title_contains?: InputMaybe<Scalars['String']['input']>;
  readonly title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly title_not?: InputMaybe<Scalars['String']['input']>;
  readonly title_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly twitterUsername?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly twitterUsername_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly twitterUsername_not?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly twitterUsername_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CfNavigationMenuItemNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfNavigationMenuItemNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfNavigationMenuItemNestedFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly name_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly name_not?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly navigationMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type CfNavigationMenuNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfNavigationMenuNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfNavigationMenuNestedFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly rootItem_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type CfPageQuestionNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfPageQuestionNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfPageQuestionNestedFilter>>>;
  readonly answer_contains?: InputMaybe<Scalars['String']['input']>;
  readonly answer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly answer_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly question?: InputMaybe<Scalars['String']['input']>;
  readonly question_contains?: InputMaybe<Scalars['String']['input']>;
  readonly question_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly question_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly question_not?: InputMaybe<Scalars['String']['input']>;
  readonly question_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly question_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type CfPageSectionButtonNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfPageSectionButtonNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfPageSectionButtonNestedFilter>>>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly sys?: InputMaybe<SysFilter>;
  readonly text?: InputMaybe<Scalars['String']['input']>;
  readonly text_contains?: InputMaybe<Scalars['String']['input']>;
  readonly text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly text_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly text_not?: InputMaybe<Scalars['String']['input']>;
  readonly text_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly text_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageSectionNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfPageSectionNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfPageSectionNestedFilter>>>;
  readonly content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type CfRichTextComponentNestedFilter = {
  readonly AND?: InputMaybe<ReadonlyArray<InputMaybe<CfRichTextComponentNestedFilter>>>;
  readonly OR?: InputMaybe<ReadonlyArray<InputMaybe<CfRichTextComponentNestedFilter>>>;
  readonly body_contains?: InputMaybe<Scalars['String']['input']>;
  readonly body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly body_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  readonly internalName?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readonly internalName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly internalName_not?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  readonly internalName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly sys?: InputMaybe<SysFilter>;
};

export type ContentfulAboutUsComponentContentFragment = { readonly __typename: 'AboutUsComponent', readonly description?: string | null, readonly name?: string | null, readonly body?: { readonly __typename?: 'AboutUsComponentBody', readonly json: any } | null, readonly buttonsCollection?: { readonly __typename?: 'AboutUsComponentButtonsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'PageSectionButton', readonly text?: string | null, readonly reference?:
        | { readonly __typename: 'AboutUsComponent' }
        | { readonly __typename: 'BannerComponent' }
        | { readonly __typename: 'ContactComponent' }
        | { readonly __typename: 'FaqComponent' }
        | { readonly __typename: 'ServicesComponent' }
       | null } | null> } | null, readonly heading?: { readonly __typename?: 'AboutUsComponentHeading', readonly json: any } | null, readonly subheading?: { readonly __typename?: 'AboutUsComponentSubheading', readonly json: any } | null };

export type ContentfulBannerComponentContentFragment = { readonly __typename: 'BannerComponent', readonly description?: string | null, readonly body?: { readonly __typename?: 'BannerComponentBody', readonly json: any } | null, readonly buttonsCollection?: { readonly __typename?: 'BannerComponentButtonsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'PageSectionButton', readonly text?: string | null, readonly reference?:
        | { readonly __typename: 'AboutUsComponent' }
        | { readonly __typename: 'BannerComponent' }
        | { readonly __typename: 'ContactComponent' }
        | { readonly __typename: 'FaqComponent' }
        | { readonly __typename: 'ServicesComponent' }
       | null } | null> } | null, readonly cardsCollection?: { readonly __typename?: 'BannerComponentCardsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'Card', readonly description?: string | null, readonly name?: string | null, readonly media?: { readonly __typename?: 'Asset', readonly height?: number | null, readonly title?: string | null, readonly url?: string | null, readonly width?: number | null } | null } | null> } | null, readonly heading?: { readonly __typename?: 'BannerComponentHeading', readonly json: any } | null, readonly subheading?: { readonly __typename?: 'BannerComponentSubheading', readonly json: any } | null };

export type ContentfulCardContentFragment = { readonly __typename?: 'Card', readonly description?: string | null, readonly name?: string | null, readonly media?: { readonly __typename?: 'Asset', readonly height?: number | null, readonly title?: string | null, readonly url?: string | null, readonly width?: number | null } | null };

export type ContentfulContactComponentContentFragment = { readonly __typename: 'ContactComponent', readonly description?: string | null, readonly errorMessage?: string | null, readonly formButtonText?: string | null, readonly name?: string | null, readonly successMessage?: string | null, readonly formFieldsCollection?: { readonly __typename?: 'ContactComponentFormFieldsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'FormField', readonly key?: string | null, readonly label?: string | null } | null> } | null, readonly heading?: { readonly __typename?: 'ContactComponentHeading', readonly json: any } | null, readonly notice?: { readonly __typename?: 'ContactComponentNotice', readonly json: any } | null, readonly siteLogo?: { readonly __typename?: 'Asset', readonly url?: string | null } | null };

export type ContentfulFaqComponentContentFragment = { readonly __typename: 'FaqComponent', readonly description?: string | null, readonly name?: string | null, readonly heading?: { readonly __typename?: 'FaqComponentHeading', readonly json: any } | null, readonly questionsCollection?: { readonly __typename?: 'FaqComponentQuestionsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'PageQuestion', readonly question?: string | null, readonly answer?: { readonly __typename?: 'PageQuestionAnswer', readonly json: any } | null } | null> } | null };

export type ContentfulImageContentFragment = { readonly __typename?: 'Asset', readonly height?: number | null, readonly title?: string | null, readonly url?: string | null, readonly width?: number | null };

export type ContentfulRichTextComponentContentFragment = { readonly __typename: 'RichTextComponent', readonly body?: { readonly __typename?: 'RichTextComponentBody', readonly json: any } | null };

export type ContentfulServicesComponentContentFragment = { readonly __typename: 'ServicesComponent', readonly description?: string | null, readonly name?: string | null, readonly cardsCollection?: { readonly __typename?: 'ServicesComponentCardsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'Card', readonly description?: string | null, readonly name?: string | null, readonly media?: { readonly __typename?: 'Asset', readonly height?: number | null, readonly title?: string | null, readonly url?: string | null, readonly width?: number | null } | null } | null> } | null, readonly heading?: { readonly __typename?: 'ServicesComponentHeading', readonly json: any } | null };

export type ContentfulFooterMenuContentFragment = { readonly __typename?: 'FooterMenu', readonly contactGroupName?: string | null, readonly contactPhoneNumber?: string | null, readonly contactEmailAddress?: string | null, readonly facebookLink?: string | null, readonly gitHubLink?: string | null, readonly languageGroupName?: string | null, readonly linkedInLink?: string | null, readonly twitterLink?: string | null };

export type ContentfulNavigationMenuItemContentFragment = { readonly __typename?: 'NavigationMenuItem', readonly name?: string | null, readonly reference?:
    | { readonly __typename: 'AboutUsComponent' }
    | { readonly __typename: 'BannerComponent' }
    | { readonly __typename: 'ContactComponent' }
    | { readonly __typename: 'FaqComponent' }
    | { readonly __typename: 'Page', readonly pathname?: string | null }
    | { readonly __typename: 'ServicesComponent' }
   | null };

export type ContentfulNavigationMenuContentFragment = { readonly __typename?: 'NavigationMenu', readonly itemsCollection?: { readonly __typename?: 'NavigationMenuItemsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'NavigationMenuItem', readonly name?: string | null, readonly reference?:
        | { readonly __typename: 'AboutUsComponent' }
        | { readonly __typename: 'BannerComponent' }
        | { readonly __typename: 'ContactComponent' }
        | { readonly __typename: 'FaqComponent' }
        | { readonly __typename: 'Page', readonly pathname?: string | null }
        | { readonly __typename: 'ServicesComponent' }
       | null } | null> } | null, readonly rootItem?: { readonly __typename?: 'NavigationMenuItem', readonly name?: string | null, readonly reference?:
      | { readonly __typename: 'AboutUsComponent' }
      | { readonly __typename: 'BannerComponent' }
      | { readonly __typename: 'ContactComponent' }
      | { readonly __typename: 'FaqComponent' }
      | { readonly __typename: 'Page', readonly pathname?: string | null }
      | { readonly __typename: 'ServicesComponent' }
     | null } | null };

export type ContentfulErrorPageQueryVariables = Exact<{
  languageCode: Scalars['String']['input'];
  code: Scalars['Int']['input'];
}>;


export type ContentfulErrorPageQuery = { readonly __typename?: 'Query', readonly errorPageCollection?: { readonly __typename?: 'ErrorPageCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'ErrorPage', readonly name?: string | null, readonly footerMenu?: { readonly __typename?: 'FooterMenu', readonly contactGroupName?: string | null, readonly contactPhoneNumber?: string | null, readonly contactEmailAddress?: string | null, readonly facebookLink?: string | null, readonly gitHubLink?: string | null, readonly languageGroupName?: string | null, readonly linkedInLink?: string | null, readonly twitterLink?: string | null } | null, readonly metadata?: { readonly __typename?: 'Metadata', readonly description?: string | null, readonly title?: string | null, readonly twitterUsername?: string | null, readonly openGraphImage?: { readonly __typename?: 'Asset', readonly url?: string | null } | null } | null, readonly navigationMenu?: { readonly __typename?: 'NavigationMenu', readonly itemsCollection?: { readonly __typename?: 'NavigationMenuItemsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'NavigationMenuItem', readonly name?: string | null, readonly reference?:
              | { readonly __typename: 'AboutUsComponent' }
              | { readonly __typename: 'BannerComponent' }
              | { readonly __typename: 'ContactComponent' }
              | { readonly __typename: 'FaqComponent' }
              | { readonly __typename: 'Page', readonly pathname?: string | null }
              | { readonly __typename: 'ServicesComponent' }
             | null } | null> } | null, readonly rootItem?: { readonly __typename?: 'NavigationMenuItem', readonly name?: string | null, readonly reference?:
            | { readonly __typename: 'AboutUsComponent' }
            | { readonly __typename: 'BannerComponent' }
            | { readonly __typename: 'ContactComponent' }
            | { readonly __typename: 'FaqComponent' }
            | { readonly __typename: 'Page', readonly pathname?: string | null }
            | { readonly __typename: 'ServicesComponent' }
           | null } | null } | null, readonly content?: { readonly __typename: 'RichTextComponent', readonly body?: { readonly __typename?: 'RichTextComponentBody', readonly json: any } | null } | null } | null> } | null };

export type ContentfulPagesQueryVariables = Exact<{
  languageCode: Scalars['String']['input'];
}>;


export type ContentfulPagesQuery = { readonly __typename?: 'Query', readonly pageCollection?: { readonly __typename?: 'PageCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'Page', readonly pathname?: string | null, readonly sys: { readonly __typename?: 'Sys', readonly publishedAt?: string | null } } | null> } | null };

export type ContentfulLandingPageQueryVariables = Exact<{
  languageCode: Scalars['String']['input'];
  pathname: Scalars['String']['input'];
}>;


export type ContentfulLandingPageQuery = { readonly __typename?: 'Query', readonly pageCollection?: { readonly __typename?: 'PageCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'Page', readonly name?: string | null, readonly footerMenu?: { readonly __typename?: 'FooterMenu', readonly contactGroupName?: string | null, readonly contactPhoneNumber?: string | null, readonly contactEmailAddress?: string | null, readonly facebookLink?: string | null, readonly gitHubLink?: string | null, readonly languageGroupName?: string | null, readonly linkedInLink?: string | null, readonly twitterLink?: string | null } | null, readonly metadata?: { readonly __typename?: 'Metadata', readonly description?: string | null, readonly title?: string | null, readonly twitterUsername?: string | null, readonly openGraphImage?: { readonly __typename?: 'Asset', readonly url?: string | null } | null } | null, readonly navigationMenu?: { readonly __typename?: 'NavigationMenu', readonly itemsCollection?: { readonly __typename?: 'NavigationMenuItemsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'NavigationMenuItem', readonly name?: string | null, readonly reference?:
              | { readonly __typename: 'AboutUsComponent' }
              | { readonly __typename: 'BannerComponent' }
              | { readonly __typename: 'ContactComponent' }
              | { readonly __typename: 'FaqComponent' }
              | { readonly __typename: 'Page', readonly pathname?: string | null }
              | { readonly __typename: 'ServicesComponent' }
             | null } | null> } | null, readonly rootItem?: { readonly __typename?: 'NavigationMenuItem', readonly name?: string | null, readonly reference?:
            | { readonly __typename: 'AboutUsComponent' }
            | { readonly __typename: 'BannerComponent' }
            | { readonly __typename: 'ContactComponent' }
            | { readonly __typename: 'FaqComponent' }
            | { readonly __typename: 'Page', readonly pathname?: string | null }
            | { readonly __typename: 'ServicesComponent' }
           | null } | null } | null, readonly sectionsCollection?: { readonly __typename?: 'PageSectionsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'PageSection', readonly content?:
            | { readonly __typename: 'AboutUsComponent', readonly description?: string | null, readonly name?: string | null, readonly body?: { readonly __typename?: 'AboutUsComponentBody', readonly json: any } | null, readonly buttonsCollection?: { readonly __typename?: 'AboutUsComponentButtonsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'PageSectionButton', readonly text?: string | null, readonly reference?:
                    | { readonly __typename: 'AboutUsComponent' }
                    | { readonly __typename: 'BannerComponent' }
                    | { readonly __typename: 'ContactComponent' }
                    | { readonly __typename: 'FaqComponent' }
                    | { readonly __typename: 'ServicesComponent' }
                   | null } | null> } | null, readonly heading?: { readonly __typename?: 'AboutUsComponentHeading', readonly json: any } | null, readonly subheading?: { readonly __typename?: 'AboutUsComponentSubheading', readonly json: any } | null }
            | { readonly __typename: 'BannerComponent', readonly description?: string | null, readonly body?: { readonly __typename?: 'BannerComponentBody', readonly json: any } | null, readonly buttonsCollection?: { readonly __typename?: 'BannerComponentButtonsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'PageSectionButton', readonly text?: string | null, readonly reference?:
                    | { readonly __typename: 'AboutUsComponent' }
                    | { readonly __typename: 'BannerComponent' }
                    | { readonly __typename: 'ContactComponent' }
                    | { readonly __typename: 'FaqComponent' }
                    | { readonly __typename: 'ServicesComponent' }
                   | null } | null> } | null, readonly cardsCollection?: { readonly __typename?: 'BannerComponentCardsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'Card', readonly description?: string | null, readonly name?: string | null, readonly media?: { readonly __typename?: 'Asset', readonly height?: number | null, readonly title?: string | null, readonly url?: string | null, readonly width?: number | null } | null } | null> } | null, readonly heading?: { readonly __typename?: 'BannerComponentHeading', readonly json: any } | null, readonly subheading?: { readonly __typename?: 'BannerComponentSubheading', readonly json: any } | null }
            | { readonly __typename: 'ContactComponent', readonly description?: string | null, readonly errorMessage?: string | null, readonly formButtonText?: string | null, readonly name?: string | null, readonly successMessage?: string | null, readonly formFieldsCollection?: { readonly __typename?: 'ContactComponentFormFieldsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'FormField', readonly key?: string | null, readonly label?: string | null } | null> } | null, readonly heading?: { readonly __typename?: 'ContactComponentHeading', readonly json: any } | null, readonly notice?: { readonly __typename?: 'ContactComponentNotice', readonly json: any } | null, readonly siteLogo?: { readonly __typename?: 'Asset', readonly url?: string | null } | null }
            | { readonly __typename: 'FaqComponent', readonly description?: string | null, readonly name?: string | null, readonly heading?: { readonly __typename?: 'FaqComponentHeading', readonly json: any } | null, readonly questionsCollection?: { readonly __typename?: 'FaqComponentQuestionsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'PageQuestion', readonly question?: string | null, readonly answer?: { readonly __typename?: 'PageQuestionAnswer', readonly json: any } | null } | null> } | null }
            | { readonly __typename: 'RichTextComponent', readonly body?: { readonly __typename?: 'RichTextComponentBody', readonly json: any } | null }
            | { readonly __typename: 'ServicesComponent', readonly description?: string | null, readonly name?: string | null, readonly cardsCollection?: { readonly __typename?: 'ServicesComponentCardsCollection', readonly items: ReadonlyArray<{ readonly __typename?: 'Card', readonly description?: string | null, readonly name?: string | null, readonly media?: { readonly __typename?: 'Asset', readonly height?: number | null, readonly title?: string | null, readonly url?: string | null, readonly width?: number | null } | null } | null> } | null, readonly heading?: { readonly __typename?: 'ServicesComponentHeading', readonly json: any } | null }
           | null } | null> } | null } | null> } | null };

export const ContentfulAboutUsComponentContentFragmentDoc = gql`
    fragment ContentfulAboutUsComponentContent on AboutUsComponent {
  __typename
  body {
    json
  }
  buttonsCollection {
    items {
      reference {
        __typename
      }
      text
    }
  }
  description
  heading {
    json
  }
  name
  subheading {
    json
  }
}
    `;
export const ContentfulImageContentFragmentDoc = gql`
    fragment ContentfulImageContent on Asset {
  height
  title
  url
  width
}
    `;
export const ContentfulCardContentFragmentDoc = gql`
    fragment ContentfulCardContent on Card {
  description
  media {
    ...ContentfulImageContent
  }
  name
}
    ${ContentfulImageContentFragmentDoc}`;
export const ContentfulBannerComponentContentFragmentDoc = gql`
    fragment ContentfulBannerComponentContent on BannerComponent {
  __typename
  body {
    json
  }
  buttonsCollection {
    items {
      reference {
        __typename
      }
      text
    }
  }
  cardsCollection {
    items {
      ...ContentfulCardContent
    }
  }
  description
  heading {
    json
  }
  subheading {
    json
  }
}
    ${ContentfulCardContentFragmentDoc}`;
export const ContentfulContactComponentContentFragmentDoc = gql`
    fragment ContentfulContactComponentContent on ContactComponent {
  __typename
  description
  errorMessage
  formButtonText
  formFieldsCollection {
    items {
      key
      label
    }
  }
  heading {
    json
  }
  name
  notice {
    json
  }
  siteLogo {
    url
  }
  successMessage
}
    `;
export const ContentfulFaqComponentContentFragmentDoc = gql`
    fragment ContentfulFaqComponentContent on FaqComponent {
  __typename
  description
  heading {
    json
  }
  name
  questionsCollection {
    items {
      answer {
        json
      }
      question
    }
  }
}
    `;
export const ContentfulRichTextComponentContentFragmentDoc = gql`
    fragment ContentfulRichTextComponentContent on RichTextComponent {
  __typename
  body {
    json
  }
}
    `;
export const ContentfulServicesComponentContentFragmentDoc = gql`
    fragment ContentfulServicesComponentContent on ServicesComponent {
  __typename
  cardsCollection {
    items {
      ...ContentfulCardContent
    }
  }
  description
  heading {
    json
  }
  name
}
    ${ContentfulCardContentFragmentDoc}`;
export const ContentfulFooterMenuContentFragmentDoc = gql`
    fragment ContentfulFooterMenuContent on FooterMenu {
  contactGroupName
  contactPhoneNumber
  contactEmailAddress
  facebookLink
  gitHubLink
  languageGroupName
  linkedInLink
  twitterLink
}
    `;
export const ContentfulNavigationMenuItemContentFragmentDoc = gql`
    fragment ContentfulNavigationMenuItemContent on NavigationMenuItem {
  name
  reference {
    __typename
    ... on Page {
      pathname
    }
  }
}
    `;
export const ContentfulNavigationMenuContentFragmentDoc = gql`
    fragment ContentfulNavigationMenuContent on NavigationMenu {
  itemsCollection {
    items {
      ...ContentfulNavigationMenuItemContent
    }
  }
  rootItem {
    ...ContentfulNavigationMenuItemContent
  }
}
    ${ContentfulNavigationMenuItemContentFragmentDoc}`;
export const ContentfulErrorPageDocument = gql`
    query ContentfulErrorPage($languageCode: String!, $code: Int!) {
  errorPageCollection(limit: 1, locale: $languageCode, where: {code: $code}) {
    items {
      footerMenu {
        ...ContentfulFooterMenuContent
      }
      metadata {
        description
        openGraphImage {
          url
        }
        title
        twitterUsername
      }
      name
      navigationMenu {
        ...ContentfulNavigationMenuContent
      }
      content {
        __typename
        ...ContentfulRichTextComponentContent
      }
    }
  }
}
    ${ContentfulFooterMenuContentFragmentDoc}
${ContentfulNavigationMenuContentFragmentDoc}
${ContentfulRichTextComponentContentFragmentDoc}`;
export const ContentfulPagesDocument = gql`
    query ContentfulPages($languageCode: String!) {
  pageCollection(locale: $languageCode) {
    items {
      pathname
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const ContentfulLandingPageDocument = gql`
    query ContentfulLandingPage($languageCode: String!, $pathname: String!) {
  pageCollection(limit: 1, locale: $languageCode, where: {pathname: $pathname}) {
    items {
      footerMenu {
        ...ContentfulFooterMenuContent
      }
      metadata {
        description
        openGraphImage {
          url
        }
        title
        twitterUsername
      }
      name
      navigationMenu {
        ...ContentfulNavigationMenuContent
      }
      sectionsCollection {
        items {
          content {
            __typename
            ...ContentfulAboutUsComponentContent
            ...ContentfulBannerComponentContent
            ...ContentfulContactComponentContent
            ...ContentfulFaqComponentContent
            ...ContentfulRichTextComponentContent
            ...ContentfulServicesComponentContent
          }
        }
      }
    }
  }
}
    ${ContentfulFooterMenuContentFragmentDoc}
${ContentfulNavigationMenuContentFragmentDoc}
${ContentfulAboutUsComponentContentFragmentDoc}
${ContentfulBannerComponentContentFragmentDoc}
${ContentfulContactComponentContentFragmentDoc}
${ContentfulFaqComponentContentFragmentDoc}
${ContentfulRichTextComponentContentFragmentDoc}
${ContentfulServicesComponentContentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ContentfulErrorPage(variables: ContentfulErrorPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ContentfulErrorPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentfulErrorPageQuery>({ document: ContentfulErrorPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ContentfulErrorPage', 'query', variables);
    },
    ContentfulPages(variables: ContentfulPagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ContentfulPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentfulPagesQuery>({ document: ContentfulPagesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ContentfulPages', 'query', variables);
    },
    ContentfulLandingPage(variables: ContentfulLandingPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ContentfulLandingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentfulLandingPageQuery>({ document: ContentfulLandingPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ContentfulLandingPage', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;