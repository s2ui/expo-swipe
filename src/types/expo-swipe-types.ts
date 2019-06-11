import {ContentfulPhoto, ContentfulType} from "contentful";

export type Exhibitor = {
  name: string;
  description: string;
  logo: string;
  video1: string;
  photos: ContentfulPhoto[];
  tags: string;
  booth: string;
}

export const mapContentfulPhoto = (contentfulPhotos: ContentfulPhoto[]) => {
  const results = [];
  contentfulPhotos.map(contentfulPhoto => {
    results.push(contentfulPhoto)
  })
};

export const mapContentfulExhibitor = (contentfulObj: ContentfulType): Exhibitor => {
  const {fields} = contentfulObj;
  const exhibitor: Exhibitor = {
    name: fields.name,
    description: fields.description,
    logo: fields.logo.fields.file.url,
    video1: fields.video1,
    photos: fields.photos,
    tags: fields.tags,
    booth: fields.booth,
  };
  return exhibitor;
};

