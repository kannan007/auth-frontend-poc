import React, { useContext } from 'react';
import {
  Form,
  FormGroup,
  Label,
  FormFeedback,
  Input,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { loginService } from '../services';
import { isLoggedInContext } from '../utils';

const Login = () => {
  const { setAuthenticated } = useContext(isLoggedInContext);
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: 'onChange' });

  const handleOnSubmit = (formvalues, event) => {
    loginService(formvalues)
      .then((data) => {
        console.log({ data });
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('token', data.token);
        setAuthenticated(true);
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  return (
    <Container>
      <Row>
        <Col md="12">
          <Form inline onSubmit={handleSubmit(handleOnSubmit)}>
            <FormGroup floating>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Email"
                    type="email"
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                    invalid={Boolean(errors.email)}
                  />
                )}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address',
                  },
                }}
              />
              <Label for="email">Email</Label>
              {errors.email && errors.email.type === 'required' && (
                <FormFeedback>Field Required</FormFeedback>
              )}
              {errors.email && errors.email.type === 'pattern' && (
                <FormFeedback>{errors.email.message}</FormFeedback>
              )}
            </FormGroup>
            <FormGroup floating>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Password"
                    type="password"
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                    invalid={Boolean(errors.password)}
                  />
                )}
                rules={{ required: true }}
              />
              <Label for="password">Password</Label>
              {errors.password && errors.password.type === 'required' && (
                <FormFeedback>Field Required</FormFeedback>
              )}
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
