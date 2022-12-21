import React from "react";
import { useParams } from "react-router-dom";
// usequery 비동기로 받아오는 상태를 관리하는 라이브러리이다.
// 즉 행동은 우리가 따로 작성해야 한다.
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
// import FakeYoutube from "../api/fakeYoutube";
import { useYoutubeApi } from "../context/YoutubeApiContext";
// import Youtube from "../api/youtube";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  // 로딩중일때, 에러일때, data videos를 받아올때 usequery를 사용한다.
  // 전체적인 key videos안에 keyword별로 key를 만든다.
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 👎👎</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
