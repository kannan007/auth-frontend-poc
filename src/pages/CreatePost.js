import React from 'react';
import { Col, Form, FormGroup, Input, Label, Row, FormFeedback, Button } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { createPostService } from '../services';

const CreatePost = () => {
  const {
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm({ mode: 'onChange' });

  const onFormSubmit = (formValues, event) => {
    event.preventDefault();
    console.log({ formValues });
    createPostService(formValues)
      .then((data) => {
        console.log({ data });
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  return (
    <Row>
      <Col md="6" xs="12">
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <Input
                  id="title"
                  name="title"
                  value={field.value}
                  onChange={field.onChange}
                  invalid={Boolean(errors.title)}
                  type="text"
                  placeholder="Enter Title"
                />
              )}
              rules={{ required: true }}
            />
            {errors.title && errors.title.type === 'required' && (
              <FormFeedback>Please Enter a title</FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <Input
                  id="description"
                  name="description"
                  value={field.value}
                  onChange={field.onChange}
                  invalid={Boolean(errors.description)}
                  type="textarea"
                  placeholder="Enter Description"
                />
              )}
            />
          </FormGroup>
          <Button type="submit" disabled={!isValid}>
            Create Post
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreatePost;
