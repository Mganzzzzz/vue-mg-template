import request from '@/utils/request'
import { Message } from 'element-ui'

export function fetchList (query) {
  log('debug query', query)
  return Promise.resolve({
    list: [
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      },
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      },
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      },
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      },
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      },
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      },
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      },
      {
        img: '',
        title: '前沿生物科技为中国智造高端医药贴上新标签',
        content: '生物技术快速发展带来了安全风险、伦理挑战、遗传资源安全等问题。比如基因治疗技术、辅助 生殖技术、克隆技术、器官移植技术等典型的',
        date: '2019/3/14'
      }

    ],
    total: 110,
    pageSize: 10,
    pageCount: query.pageCount,
  })
  return request({
    url: '/article/list',
    method: 'get',
    params: query,
  })
}

export function fetchArticle (id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id, },
  })
}
