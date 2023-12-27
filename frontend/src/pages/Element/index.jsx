import { HasTagPosts } from "./HasTagPosts";
import { NewPost } from "./NewPosts";
import { PopularPosts } from "./PopularPosts";
import { RecentPosts } from "./RecentPosts";
import { TopPost } from "./TopPosts";
import { TrendyPosts } from "./TrendyPosts";

export const Element = () => {
  return (
    <>
      <HasTagPosts />
      <RecentPosts />
      <PopularPosts />
      {/* <ClubInfo /> */}
      <NewPost />
      {/* <latestVideos /> */}
      <TrendyPosts />
      {/* <WeatherInfo /> */}
      <TopPost />
    </>
  );
};
