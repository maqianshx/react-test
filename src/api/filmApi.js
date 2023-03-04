import { get } from '../utils/http'

// 请求电影列表数据
export const getFilmListApi = (page = 1) => get('/api/films?page=' + page)



