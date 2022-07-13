import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { ImageCard } from "../interfaces/ImageCard.interface";
import baseAxiosInstance from "./baseAxiosInstance";

export async function getImages(
  query: string,
  page: number,
  loadingStateSetter?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (
    result: AxiosResponse<{
      message: string;
      data: { result: ImageCard[]; thisPage: number; nextPage: number | null };
    }>
  ) => void,
  failureCallback?: (err: unknown) => void
) {
  if (loadingStateSetter) loadingStateSetter(true);
  try {
    const result = await baseAxiosInstance().get(
      `/?page=${page}&query=${query}`
    );
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingStateSetter) loadingStateSetter(false);
  }
}

export async function getImage(
  imageID: string,
  loadingStateSetter?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (
    result: AxiosResponse<{ message: string; data: ImageCard }>
  ) => void,
  failureCallback?: (err: unknown) => void
) {
  if (loadingStateSetter) loadingStateSetter(true);
  try {
    const result = await baseAxiosInstance().get(`/${imageID}`);
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingStateSetter) loadingStateSetter(false);
  }
}

export async function postNewImage(
  image: ImageCard,
  loadingStateSetter?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (
    result: AxiosResponse<{ message: string; data: ImageCard }>
  ) => void,
  failureCallback?: (err: unknown) => void
) {
  if (loadingStateSetter) loadingStateSetter(true);
  try {
    const result = await baseAxiosInstance().post("/", image);
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingStateSetter) loadingStateSetter(false);
  }
}

export async function editImage(
  imageID: string,
  image: {
    imageName?: string;
    imageURL?: string;
    description?: string;
  },
  loadingStateSetter?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (
    result: AxiosResponse<{ message: string; data: ImageCard }>
  ) => void,
  failureCallback?: (err: unknown) => void
) {
  if (loadingStateSetter) loadingStateSetter(true);
  try {
    const result = await baseAxiosInstance().put(`/${imageID}/edit`, image);
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingStateSetter) loadingStateSetter(false);
  }
}

export async function deleteImage(
  imageID: string,
  loadingStateSetter?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (
    result: AxiosResponse<{ message: string; data: ImageCard }>
  ) => void,
  failureCallback?: (err: unknown) => void
) {
  if (loadingStateSetter) loadingStateSetter(true);
  try {
    const result = await baseAxiosInstance().delete(`/delete/${imageID}`);
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingStateSetter) loadingStateSetter(false);
  }
}
