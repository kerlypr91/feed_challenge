import React from 'react';
import { shallow } from 'enzyme';
import {
  PostList,
  mapStateToProps,
  mapDispatchToProps
} from './PostList';
import * as PostsActions from '../actions/posts'

describe('PostList Tests', () => {
  let wrapper
  let getPostList
  let postList
  let history
  let setStateSpy

  beforeEach(() => {
    postList = [
      {
        id: 1,
        title: 'Title 1',
        body: 'Body 1'
      },
      {
        id: 2,
        title: 'Title 2',
        body: 'Body 2'
      }
    ]

    history = {
      push: jest.fn()
    }

    getPostList = jest.fn()

    setStateSpy = jest.spyOn(PostList.prototype, 'setState')

    wrapper = shallow(<PostList getPostList={getPostList} history={history} />)
  })

  it('should match snapshot - loader container', () => {
    const loaderContainer = wrapper.find('.loader_container')

    expect.assertions(2)
    expect(loaderContainer).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot - post list container', () => {
    wrapper.setProps({
      postList
    })

    wrapper.setState({
      loading: false
    })

    wrapper.update()

    const postListContainer = wrapper.find('.post_list')

    expect.assertions(2)
    expect(postListContainer).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount calls prop getPostList', () => {
    wrapper.instance().componentDidMount()

    expect(getPostList).toHaveBeenCalled()
  })

  it('componentDidUpdate calls setState and sets loading value to false', () => {
    wrapper.setProps({
      fetching: false,
      error: null,
      postList
    })

    wrapper.instance().componentDidUpdate({ fetching: true })

    expect.assertions(2)
    expect(setStateSpy).toHaveBeenCalled()
    expect(wrapper.state('loading')).toBe(false)
  })

  it('handleCommentLinkClick should navigate to comments route', () => {
    wrapper.instance().handleCommentLinkClick(1)()

    expect.assertions(2)
    expect(history.push).toHaveBeenCalled()
    expect(history.push).toHaveBeenCalledWith('/comments', { postId: 1 })
  })

  it('mapDispatchToProps: getPostList action', () => {
    const dispatch = jest.fn()
    const spyOn = jest.spyOn(PostsActions, 'getPostListAction')

    mapDispatchToProps(dispatch).getPostList()

    expect(spyOn).toHaveBeenCalled()
  })

  it('mapStateToProps', () => {
    const state = {
      posts: {
        postList: 'test',
        fetching: true,
        error: 'error'
      }
    }

    expect.assertions(7)
    expect(mapStateToProps(state)).toBeTruthy()
    expect(mapStateToProps(state)).toHaveProperty('postList')
    expect(mapStateToProps(state).postList).toBe('test')
    expect(mapStateToProps(state)).toHaveProperty('fetching')
    expect(mapStateToProps(state).fetching).toBe(true)
    expect(mapStateToProps(state)).toHaveProperty('error')
    expect(mapStateToProps(state).error).toBe('error')
  })
})