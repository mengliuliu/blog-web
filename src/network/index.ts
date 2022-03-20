import { useParams } from "react-router-dom";
import { formatUrl } from "@src/utils/format";
import request from "../utils/request";
export default {
  getArticleList() {
    return request.post(formatUrl("/articles"));
  },
  getArticleDetail(params: any) {
    return request.get(formatUrl("/articles/") + params.id);
  },
};
