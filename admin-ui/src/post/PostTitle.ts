import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "postname";

export const PostTitle = (record: TPost): string => {
  return record.postname || record.id;
};
