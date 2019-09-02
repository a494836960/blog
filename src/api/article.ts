import request from '@/common/axios.ts';

export const fetchArticleList = (params: any) => {
    return request({
        url: '/article/list',
        method: 'GET',
        params: params
    })
}

export const fetchArticleDetail = (params: any) => {
    return request({
        url: `/article/${params.id}`,
        method: 'GET',
        params: params
    })
}