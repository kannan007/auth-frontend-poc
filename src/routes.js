import React from 'react';
import { useParams } from 'react-router-dom';
import { Dashboard, CreatePost, Posts } from './pages';

const Messages = () => (
  <div>
    <h2>Messages</h2>
    Messages
  </div>
);

const SingleMessage = () => {
  const { messageId } = useParams();
  console.log({ messageId });
  return (
    <div>
      <h2>Messages</h2>
      SingleMessage
    </div>
  );
};

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    exact: true,
  },
  {
    path: '/myposts',
    name: 'MyPosts',
    component: Messages,
    exact: true,
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost,
    exact: true,
  },
  {
    path: '/posts/:postId',
    name: 'SinglePost',
    component: SingleMessage,
    exact: true,
    scope: [],
  },
];

export default routes;
