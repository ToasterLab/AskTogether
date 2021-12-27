export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  DateTime: any;
  Time: any;
  Date: any;
  Long: any;
  Upload: any;
};

export type FileInfoInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Organisation = {
  __typename?: 'Organisation';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  logo?: Maybe<UploadFile>;
  short_name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type OrganisationConnection = {
  __typename?: 'OrganisationConnection';
  values?: Maybe<Array<Maybe<Organisation>>>;
  groupBy?: Maybe<OrganisationGroupBy>;
  aggregate?: Maybe<OrganisationAggregator>;
};

export type OrganisationAggregator = {
  __typename?: 'OrganisationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrganisationGroupBy = {
  __typename?: 'OrganisationGroupBy';
  id?: Maybe<Array<Maybe<OrganisationConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrganisationConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrganisationConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<OrganisationConnectionName>>>;
  logo?: Maybe<Array<Maybe<OrganisationConnectionLogo>>>;
  short_name?: Maybe<Array<Maybe<OrganisationConnectionShort_Name>>>;
  url?: Maybe<Array<Maybe<OrganisationConnectionUrl>>>;
  published_at?: Maybe<Array<Maybe<OrganisationConnectionPublished_At>>>;
};

export type OrganisationConnectionId = {
  __typename?: 'OrganisationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionCreated_At = {
  __typename?: 'OrganisationConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionUpdated_At = {
  __typename?: 'OrganisationConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionName = {
  __typename?: 'OrganisationConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionLogo = {
  __typename?: 'OrganisationConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionShort_Name = {
  __typename?: 'OrganisationConnectionShort_name';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionUrl = {
  __typename?: 'OrganisationConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationConnectionPublished_At = {
  __typename?: 'OrganisationConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrganisationConnection>;
};

export type OrganisationInput = {
  name: Scalars['String'];
  logo?: InputMaybe<Scalars['ID']>;
  short_name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditOrganisationInput = {
  name?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  short_name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CreateOrganisationInput = {
  data?: InputMaybe<OrganisationInput>;
};

export type CreateOrganisationPayload = {
  __typename?: 'createOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type UpdateOrganisationInput = {
  where?: InputMaybe<InputId>;
  data?: InputMaybe<EditOrganisationInput>;
};

export type UpdateOrganisationPayload = {
  __typename?: 'updateOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type DeleteOrganisationInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteOrganisationPayload = {
  __typename?: 'deleteOrganisationPayload';
  organisation?: Maybe<Organisation>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  content: Scalars['String'];
  author?: Maybe<UsersPermissionsUser>;
  title: Scalars['String'];
  to?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
  organisations?: Maybe<Array<Maybe<Organisation>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};


export type PostOrganisationsArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type PostTagsArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  values?: Maybe<Array<Maybe<Post>>>;
  groupBy?: Maybe<PostGroupBy>;
  aggregate?: Maybe<PostAggregator>;
};

export type PostAggregator = {
  __typename?: 'PostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  id?: Maybe<Array<Maybe<PostConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PostConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PostConnectionUpdated_At>>>;
  content?: Maybe<Array<Maybe<PostConnectionContent>>>;
  author?: Maybe<Array<Maybe<PostConnectionAuthor>>>;
  title?: Maybe<Array<Maybe<PostConnectionTitle>>>;
  to?: Maybe<Array<Maybe<PostConnectionTo>>>;
  timestamp?: Maybe<Array<Maybe<PostConnectionTimestamp>>>;
  published_at?: Maybe<Array<Maybe<PostConnectionPublished_At>>>;
};

export type PostConnectionId = {
  __typename?: 'PostConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionCreated_At = {
  __typename?: 'PostConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionUpdated_At = {
  __typename?: 'PostConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionContent = {
  __typename?: 'PostConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionAuthor = {
  __typename?: 'PostConnectionAuthor';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionTitle = {
  __typename?: 'PostConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionTo = {
  __typename?: 'PostConnectionTo';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionTimestamp = {
  __typename?: 'PostConnectionTimestamp';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostConnectionPublished_At = {
  __typename?: 'PostConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PostConnection>;
};

export type PostInput = {
  content: Scalars['String'];
  author?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
  organisations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  to?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPostInput = {
  content?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  organisations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  to?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CreatePostInput = {
  data?: InputMaybe<PostInput>;
};

export type CreatePostPayload = {
  __typename?: 'createPostPayload';
  post?: Maybe<Post>;
};

export type UpdatePostInput = {
  where?: InputMaybe<InputId>;
  data?: InputMaybe<EditPostInput>;
};

export type UpdatePostPayload = {
  __typename?: 'updatePostPayload';
  post?: Maybe<Post>;
};

export type DeletePostInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePostPayload = {
  __typename?: 'deletePostPayload';
  post?: Maybe<Post>;
};

export type Response = {
  __typename?: 'Response';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  post?: Maybe<Post>;
  from?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ResponseConnection = {
  __typename?: 'ResponseConnection';
  values?: Maybe<Array<Maybe<Response>>>;
  groupBy?: Maybe<ResponseGroupBy>;
  aggregate?: Maybe<ResponseAggregator>;
};

export type ResponseAggregator = {
  __typename?: 'ResponseAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResponseGroupBy = {
  __typename?: 'ResponseGroupBy';
  id?: Maybe<Array<Maybe<ResponseConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ResponseConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ResponseConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ResponseConnectionTitle>>>;
  content?: Maybe<Array<Maybe<ResponseConnectionContent>>>;
  post?: Maybe<Array<Maybe<ResponseConnectionPost>>>;
  from?: Maybe<Array<Maybe<ResponseConnectionFrom>>>;
  timestamp?: Maybe<Array<Maybe<ResponseConnectionTimestamp>>>;
  published_at?: Maybe<Array<Maybe<ResponseConnectionPublished_At>>>;
};

export type ResponseConnectionId = {
  __typename?: 'ResponseConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionCreated_At = {
  __typename?: 'ResponseConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionUpdated_At = {
  __typename?: 'ResponseConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionTitle = {
  __typename?: 'ResponseConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionContent = {
  __typename?: 'ResponseConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionPost = {
  __typename?: 'ResponseConnectionPost';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionFrom = {
  __typename?: 'ResponseConnectionFrom';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionTimestamp = {
  __typename?: 'ResponseConnectionTimestamp';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseConnectionPublished_At = {
  __typename?: 'ResponseConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ResponseConnection>;
};

export type ResponseInput = {
  title?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  post?: InputMaybe<Scalars['ID']>;
  from?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditResponseInput = {
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<Scalars['ID']>;
  from?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CreateResponseInput = {
  data?: InputMaybe<ResponseInput>;
};

export type CreateResponsePayload = {
  __typename?: 'createResponsePayload';
  response?: Maybe<Response>;
};

export type UpdateResponseInput = {
  where?: InputMaybe<InputId>;
  data?: InputMaybe<EditResponseInput>;
};

export type UpdateResponsePayload = {
  __typename?: 'updateResponsePayload';
  response?: Maybe<Response>;
};

export type DeleteResponseInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteResponsePayload = {
  __typename?: 'deleteResponsePayload';
  response?: Maybe<Response>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  values?: Maybe<Array<Maybe<Tag>>>;
  groupBy?: Maybe<TagGroupBy>;
  aggregate?: Maybe<TagAggregator>;
};

export type TagAggregator = {
  __typename?: 'TagAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  id?: Maybe<Array<Maybe<TagConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TagConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TagConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TagConnectionName>>>;
  description?: Maybe<Array<Maybe<TagConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<TagConnectionPublished_At>>>;
};

export type TagConnectionId = {
  __typename?: 'TagConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionCreated_At = {
  __typename?: 'TagConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionUpdated_At = {
  __typename?: 'TagConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionName = {
  __typename?: 'TagConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionDescription = {
  __typename?: 'TagConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionPublished_At = {
  __typename?: 'TagConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagConnection>;
};

export type TagInput = {
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTagInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CreateTagInput = {
  data?: InputMaybe<TagInput>;
};

export type CreateTagPayload = {
  __typename?: 'createTagPayload';
  tag?: Maybe<Tag>;
};

export type UpdateTagInput = {
  where?: InputMaybe<InputId>;
  data?: InputMaybe<EditTagInput>;
};

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteTagInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  tag?: Maybe<Tag>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type LocaleInput = {
  name?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: InputMaybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  mime?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: InputMaybe<InputId>;
  data?: InputMaybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: InputMaybe<InputId>;
  data?: InputMaybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Organisation | OrganisationConnection | OrganisationAggregator | OrganisationGroupBy | OrganisationConnectionId | OrganisationConnectionCreated_At | OrganisationConnectionUpdated_At | OrganisationConnectionName | OrganisationConnectionLogo | OrganisationConnectionShort_Name | OrganisationConnectionUrl | OrganisationConnectionPublished_At | CreateOrganisationPayload | UpdateOrganisationPayload | DeleteOrganisationPayload | Post | PostConnection | PostAggregator | PostGroupBy | PostConnectionId | PostConnectionCreated_At | PostConnectionUpdated_At | PostConnectionContent | PostConnectionAuthor | PostConnectionTitle | PostConnectionTo | PostConnectionTimestamp | PostConnectionPublished_At | CreatePostPayload | UpdatePostPayload | DeletePostPayload | Response | ResponseConnection | ResponseAggregator | ResponseGroupBy | ResponseConnectionId | ResponseConnectionCreated_At | ResponseConnectionUpdated_At | ResponseConnectionTitle | ResponseConnectionContent | ResponseConnectionPost | ResponseConnectionFrom | ResponseConnectionTimestamp | ResponseConnectionPublished_At | CreateResponsePayload | UpdateResponsePayload | DeleteResponsePayload | Tag | TagConnection | TagAggregator | TagGroupBy | TagConnectionId | TagConnectionCreated_At | TagConnectionUpdated_At | TagConnectionName | TagConnectionDescription | TagConnectionPublished_At | CreateTagPayload | UpdateTagPayload | DeleteTagPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  organisation?: Maybe<Organisation>;
  organisations?: Maybe<Array<Maybe<Organisation>>>;
  organisationsConnection?: Maybe<OrganisationConnection>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  postsConnection?: Maybe<PostConnection>;
  response?: Maybe<Response>;
  responses?: Maybe<Array<Maybe<Response>>>;
  responsesConnection?: Maybe<ResponseConnection>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsConnection?: Maybe<TagConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOrganisationsArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOrganisationsConnectionArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPostsArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPostsConnectionArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryResponseArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryResponsesArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryResponsesConnectionArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagsArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagsConnectionArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrganisation?: Maybe<CreateOrganisationPayload>;
  updateOrganisation?: Maybe<UpdateOrganisationPayload>;
  deleteOrganisation?: Maybe<DeleteOrganisationPayload>;
  createPost?: Maybe<CreatePostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  createResponse?: Maybe<CreateResponsePayload>;
  updateResponse?: Maybe<UpdateResponsePayload>;
  deleteResponse?: Maybe<DeleteResponsePayload>;
  createTag?: Maybe<CreateTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  deleteFile?: Maybe<DeleteFilePayload>;
  createRole?: Maybe<CreateRolePayload>;
  updateRole?: Maybe<UpdateRolePayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  createUser?: Maybe<CreateUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateOrganisationArgs = {
  input?: InputMaybe<CreateOrganisationInput>;
};


export type MutationUpdateOrganisationArgs = {
  input?: InputMaybe<UpdateOrganisationInput>;
};


export type MutationDeleteOrganisationArgs = {
  input?: InputMaybe<DeleteOrganisationInput>;
};


export type MutationCreatePostArgs = {
  input?: InputMaybe<CreatePostInput>;
};


export type MutationUpdatePostArgs = {
  input?: InputMaybe<UpdatePostInput>;
};


export type MutationDeletePostArgs = {
  input?: InputMaybe<DeletePostInput>;
};


export type MutationCreateResponseArgs = {
  input?: InputMaybe<CreateResponseInput>;
};


export type MutationUpdateResponseArgs = {
  input?: InputMaybe<UpdateResponseInput>;
};


export type MutationDeleteResponseArgs = {
  input?: InputMaybe<DeleteResponseInput>;
};


export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>;
};


export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>;
};


export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};
