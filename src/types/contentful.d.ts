import {ContentfulPhoto} from "contentful";

declare module 'contentful' {
  export type ContentfulPhoto = {
    fields: {
      file: {
        url: string;
      }
    }
  }

  export type ContentfulType = {
    sys: {
      id: string,
    },
    fields: {
      name: string,
      description: string,
      logo: ContentfulPhoto,
      video1: string,
      photos: ContentfulPhoto[],
      tags: string;
      booth: string,
    },
  }
}
