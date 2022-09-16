import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postname?: SortOrder;
  updatedAt?: SortOrder;
};
