import Home from './containers/Home'
import PostList from './containers/PostList'
import PostComments from './containers/PostComments'

export const Routes = [
  {
    id: 'posts',
    exact: true,
    path: '/posts',
    component: PostList
  },
  {
    id: 'comments',
    exact: false,
    path: '/comments',
    component: PostComments
  },
  {
    id: 'home',
    path: '/',
    exact: true,
    component: Home
  }
]