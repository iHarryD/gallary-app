export interface imageDetails {
  description: string;
  lastModifiedOn: Date;
  uploadedOn: Date;
}

export interface ImageCard {
  imageDetails: imageDetails;
  imageName: string;
  imageURL: string;
}
