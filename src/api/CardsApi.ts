import { queryOptions } from "@tanstack/react-query";

import { UserCard } from "types/products";

import { FirestoreApi } from "./FirestoreApi";
import { queryClient } from "./queryClient";

export const CardsApi = {
  baseKey: "cards",
  getCards: <T>() => {
    return queryOptions({
      queryKey: [CardsApi.baseKey],
      queryFn: () => FirestoreApi.getItems<T>(CardsApi.baseKey),
    });
  },

  createCard: () => {
    return {
      mutationFn: (data: Omit<UserCard, "id">) =>
        FirestoreApi.createItem<UserCard>(CardsApi.baseKey, data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [CardsApi.baseKey] });
      },
    };
  },

  updateCard: () => {
    return {
      mutationFn: (newData: Partial<UserCard> & { id: string }) =>
        FirestoreApi.updateItem<UserCard>(CardsApi.baseKey, newData),
      onSuccess: (newData: Partial<UserCard> & { id: string }) => {
        queryClient.setQueryData(["cards", { id: newData.id }], newData);
      },
    };
  },
};
