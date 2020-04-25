import { request } from './request'
//创建文章
export function createarticle(data) {
    return request({
        url: 'articles',
        method: 'post',
        data: data
    })
}
//获取文章
export function showarticle() {
    return request({
        url: 'articles',
        method: 'get',

    })
}
//删除文章
export function deleteById(url) {
    return request({
        url: url,
        method: 'delete',
        
       
    })
}

//展示文章
export function getArticle(url){
    return request({
        url:url,
        method:'get'
    })
}

//编辑文章
export function editarticle(url,data) {
    return request({
        url: url,
        method: 'put',
        data: data
    })
}