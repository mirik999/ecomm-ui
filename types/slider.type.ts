export interface ISlider {
  id: string;
  name: string;
  fade: boolean;
  vertical: boolean;
  images: IImage[];
}

export interface IImage {
  src: string;
  alt: string;
  videoId: string;
  link: string;
}
