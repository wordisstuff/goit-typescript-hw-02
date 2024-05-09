import ImageCard from "../ImaageCard/ImageCard.js";
import CSS from "./ImageGallery.module.css";
import { ImageGalleryProps } from "../../types.js"


const ImageGallery : React.FC<ImageGalleryProps> = ({ photos, openModal })=> {
  return (
    <>
      <ul className={CSS.list}>
      {photos &&
        photos.map(({id,urls,alt_description,user,likes}) => {
          return (
            <ImageCard  
            key={id} 
            urls={urls}
            alt_description={alt_description} 
            user={user} 
            likes={likes} 
            openModal={openModal} />
          );
        })}
        
      </ul>
    </>
  );
};

export default ImageGallery;
