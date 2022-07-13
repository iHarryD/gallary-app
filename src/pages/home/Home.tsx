import { useEffect, useState } from "react";
import ImageCard from "../../components/imageCard/ImageCard";
import { useSearchQuery } from "../../contexts/SearchQueryContext";
import { ImageCard as IImageCard } from "../../interfaces/ImageCard.interface";
import { getImages } from "../../services/imageServices";
import homeStyles from "./Home.module.css";

export default function Home() {
  const [images, setImages] = useState<IImageCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pages, setPages] = useState<{
    previousPage: number | null;
    currentPage: number;
    nextPage: number | null;
  }>({
    previousPage: null,
    currentPage: 1,
    nextPage: null,
  });
  const { searchQuery } = useSearchQuery();

  useEffect(() => {
    getImages(searchQuery, pages.currentPage, setIsLoading, (result) => {
      setImages(result.data.data.result);
      setPages({
        previousPage:
          result.data.data.thisPage > 1 ? result.data.data.thisPage - 1 : null,
        currentPage: result.data.data.thisPage,
        nextPage: result.data.data.nextPage,
      });
    });
  }, [pages.currentPage, searchQuery]);

  function handlePagination(toPage: number) {
    setPages((prev) => ({ ...prev, currentPage: toPage }));
  }

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className={homeStyles["image-cards-container"]}>
            {images.map(
              ({ _id, imageDetails, imageName, imageURL }: IImageCard) => (
                <ImageCard
                  _id={_id}
                  imageDetails={imageDetails}
                  imageName={imageName}
                  imageURL={imageURL}
                />
              )
            )}
          </div>
          <div className={homeStyles["pagination-bar"]}>
            {pages.previousPage && (
              <button
                className={homeStyles["pagination-btn"]}
                onClick={() => handlePagination(pages.previousPage!)}
              >
                &lt;
              </button>
            )}
            {pages.currentPage && (
              <button className={homeStyles["pagination-btn"]}>
                {pages.currentPage}
              </button>
            )}
            {pages.nextPage && (
              <button
                className={homeStyles["pagination-btn"]}
                onClick={() => handlePagination(pages.nextPage!)}
              >
                &gt;
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
}
