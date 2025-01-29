import { queryOptions } from "@tanstack/react-query";

import { FirestoreApi } from "./FirestoreApi";

export const CreditsApi = {
  baseKey: "credits",
  getCards: <T>() => {
    return queryOptions({
      queryKey: [CreditsApi.baseKey, "credits"],
      queryFn: () => FirestoreApi.getItems<T>(CreditsApi.baseKey),
    });
  },
};
