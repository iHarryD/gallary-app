export interface imageDetails {
  description: string;
  lastModifiedOn: Date;
  uploadedOn: Date;
}

export interface ImageCard {
  _id: string;
  imageDetails: imageDetails;
  imageName: string;
  imageURL: string;
}
