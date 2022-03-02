import request from "../utils/request";
export default {
  getArticles() {
    return request.get("/api/articles");
  },
  //   getBlogDetail(params) {
  //     return request.get("/api/blog/detail", {
  //       params,
  //     });
  //   },
};
