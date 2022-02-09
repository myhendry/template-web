export interface IListing {
  sys: {
    id: string;
  };
  fields: {
    images: IImage[];
    property: string;
  };
}

export interface IImage {
  fields: {
    file: {
      url: string;
    };
  };
}
