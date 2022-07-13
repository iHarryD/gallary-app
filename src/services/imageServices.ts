import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { ImageCard } from "../interfaces/ImageCard.interface";
import baseAxiosInstance from "./baseAxiosInstance";

export async function getImages(
  loadingStateSetter?: Dispatch<SetStateAction<boolean>>,
  successCallback?: (
    result: AxiosResponse<{ message: string; data: ImageCard[] }>
  ) => void,
  failureCallback?: (err: unknown) => void
) {
  if (loadingStateSetter) loadingStateSetter(true);
  try {
    const result = await baseAxiosInstance().get("");
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
