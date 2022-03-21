export const ROUTES = {
  PATH: '/',
  LOGIN: {
    PATH: '/login',
  },
  POSTS: {
    PATH: '/posts/:page',
    REDIRECT_PATH: (page: number) => `/posts/${page}`,
    QUERY_PARAMS: {
      user_id: 'user_id',
    },
  },
}
