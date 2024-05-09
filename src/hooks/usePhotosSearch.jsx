import { useEffect, useState } from "react";
import { requestPhotosByQuery } from "../services/api";

const usePhotosSearch = () => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIserror] = useState(false);
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //   useEffect(() => {
  //     async function fetchPhotos() {
  //       try {
  //         setIsloading(true);
  //         const data = await requestProducts();
  //         setPhotos(data);
  //       } catch (error) {
  //         setIserror(true);
  //       } finally {
  //         setIsloading(false);
  //       }
  //     }
  //     fetchPhotos();
  //   }, []);

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

  const onSetSearchQuery = (searchTerm) => {
    if (searchTerm.trim() !== "") {
      setQuery(searchTerm), setPhotos([]);
    }
  };
  return {
    setIsloading,
    setPage,
    page,
    totalPages,
    photos,
    isLoading,
    isError,
    onSetSearchQuery,
  };
};

export default usePhotosSearch;
