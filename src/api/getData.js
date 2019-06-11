import axios from '../plugins/axios'


/**
 * 获取当前城市
 */
export const cityGuess = () => axios.get('/v1/cities', {
  params: {
    type: 'guess'
  }
})

/**
 * 获取热门城市
 */
export const hotcity = () => axios.get('/v1/cities', {
  params: {
    type: 'hot'
  }
})
/**
 * 获取首页所有城市
 */
export const groupcity = () => axios.get('/v1/cities', {
  params: {
    type: 'group'
  }
})