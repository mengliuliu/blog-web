import { useParams } from 'react-router-dom';
import { formatUrl } from '@src/utils/format';
import request from '../utils/request';
export default {
  getArticleList(params: { pageNum?: number; pageSize?: number }) {
    return request.post(formatUrl('/articles'), params);
  },
  getArticleDetail(params: any) {
    return request.get(formatUrl('/articles/') + params.id);
  },
};
