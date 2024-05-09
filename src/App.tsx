import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErroreMessage from "./components/ErroreMessage/ErroreMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import { requestPhotosByQuery } from "./services/api";

// import usePhotosSearch from "./hooks/usePhotosSearch";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { ImgUrlType, Photos } from "./types";


function App() {
  const [photos, setPhotos] = useState<Photos[] | null >  (null);
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [isError, setIserror] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalImg, setModalImg] = useState<ImgUrlType | null>(null);
  const [openCloseModal, setOpenCloseModal] = useState<Boolean>(false);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchPhotosByQuery() {
      try {
        setIsloading(true);
        const data = await requestPhotosByQuery(query, page);
        !photos
          ? setPhotos(data.results)
          : setPhotos((prev) => [...prev, ...data.results]);

        setTotalPages(data.total_pages);
      } catch (error) {
        setIserror(true);
      } finally {
        setIsloading(false);
      }
    }
    fetchPhotosByQuery();
  }, [query, page]);

  const loadMorePage = () => {
    setIsloading(true);
    page < totalPages ? setPage((prev) => prev + 1) : page;
  };

  const setSearchBarQuery = (query) => {
    if (query !== "") {
      setQuery(query);
      setPhotos([]);
      setPage(1);
    } else {
      toast("Попрацюй пальчиками🤪");
    }
  };

  const openModal = (img) => {
    setModalImg(img);
    setOpenCloseModal(true);
  };
  const closeModal = () => setOpenCloseModal(false);

  return (
    <>
      <SearchBar
        setSearchBarQuery={setSearchBarQuery}
        isError={isError}
      ></SearchBar>
      {isLoading && <Loader />}
      {isError ? (
        <ErroreMessage />
      ) : (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
      {photos && page < totalPages && <LoadMoreBtn pageChange={loadMorePage} />}
      <ImageModal
        modalImg={modalImg}
        isOpen={openCloseModal}
        onCloseModal={closeModal}
      />
    </>
  );
}

export default App;
