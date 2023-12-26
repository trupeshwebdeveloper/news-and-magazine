import { HasTagPosts } from "./HasTagPosts";
import { NewPost } from "./NewPosts";
import { RecentPosts } from "./RecentPosts";

export const Element = () => {
  return (
    <>
      <HasTagPosts />
      <RecentPosts />
      <NewPost />
    </>
  );
};
