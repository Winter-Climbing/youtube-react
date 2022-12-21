// fetch는 네이티브 브라우저 API이기는 하나 문제가 있다!
// 1. json을 받아올 때마다 객체로 변환해줘야 한다
// 2. then 안에서 http 메소드가 섞인다 (200대와 400대가 섞인다)
// axios는 json을 변환해 줄 필요도 없고 http 메소드도 상태에 따라 달리 표기된다.

// 이렇게 네트워크 통신 모듈을 따로 뺌으로서 재사용하기 편해졌다.

// import axios from "axios";

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "search" : "popular"}.json`)
//     .then((res) => res.data.items);
// }

export default class Youtube {
  constructor(apiClient) {
    // axios 통신을 할 떄 필요한 기본적인 정보를 가져와서 httpClient에 할당한다.
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })

      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
