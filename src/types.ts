export interface Photos {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}


export  interface ImageGalleryProps {
  photos: Photos[];
  openModal: (img: ImgUrlType)=> void;
}


export interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
  openModal: ({imgUrl,description}: {imgUrl:string,description:string})=> void
}

export type ImgUrlType =
  {
    imgUrl: string,
    description: string
  }



export type Respons = {
  results: object[];
  total_pages: number;
  total: number;
}

export type ImageModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  modalImg: ImgUrlType | null;
}

export type SearchBarProps = {
  setSearchBarQuery: (query: string) => void;
  isError: boolean
}