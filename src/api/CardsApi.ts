import { queryOptions } from "@tanstack/react-query";

import { FirestoreApi } from "./FirestoreApi";

export const CardsApi = {
  baseKey: "cards",
  getCards: <T>(key?: string) => {
    return queryOptions({
      queryKey: [CardsApi.baseKey, key || ""],
      queryFn: () => FirestoreApi.getItems<T>(CardsApi.baseKey),
    });
  },
};
