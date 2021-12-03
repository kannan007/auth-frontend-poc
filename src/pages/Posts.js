import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import getPostsService from '../services/getPosts';

const Posts = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    getPostsService()
      .then((data) => {
        console.log({ data });
        setPostsData(data);
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  console.log('Inside');

  return (
    <Row>
      {postsData.map((post) => (
        <Col md="3">
          <Card>
            <CardHeader>{post.title}</CardHeader>
            <CardBody>{post.description}</CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
