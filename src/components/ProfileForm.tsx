import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import {
  useProfileStore,
  // initialState as initialValues
} from '../stores/profile.store';
import { Button } from './form/Button';
import { Checkbox } from './form/Checkbox';
import { Radio } from './form/Radio';
import { TextField } from './form/TextField';
import { Profile } from '../types/profile.type';

const validationSchema = yup.object({
  firstName: yup.string().required('Please enter a first name'),
  lastName: yup.string().required('Please enter a last name'),
  email: yup.string().required('Please enter an email'),
  gender: yup.string().required('Please enter a gender'),
  contactMethod: yup.object({
    email: yup.boolean(),
    post: yup.boolean(),
    sms: yup.boolean(),
  }),
  description: yup.string().required('Please enter a description'),
});

const initialValues: Profile = {
  firstName: 'xxx',
  lastName: 'xxx',
  email: 'xxx',
  gender: 'female',
  contactMethod: {
    email: false,
    post: true,
    sms: false,
  },
  description: 'xxx',
};


export const ProfileForm = (): JSX.Element => {
  const { add, profile } = useProfileStore();

  const handleSubmit = (values: Profile): void => {
    add(values);
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field label="First name" id="firstname" name="firstName" component={TextField} />
          <Field label="Last name" id="lastname" name="lastName" component={TextField} />
          <Field label="Email" id="email" name="email" component={TextField} />

          <Field label="Male" id="gender-male" name="gender" component={Radio} value="male" />
          <Field label="Female" id="gender-female" name="gender" component={Radio} value="female" />

          <fieldset>
            <legend>Contact Method</legend>
            <Field label="Post" id="contactMethod.post" name="contactMethod.post" component={Checkbox} value="post" />
            <Field label="Email" id="contactMethod.email" name="contactMethod.email" component={Checkbox} value="email" />
            <Field label="SMS" id="contactMethod.sms" name="contactMethod.sms" component={Checkbox} value="sms" />
          </fieldset>

          <Field label="Description" id="description" name="description" component={TextField} />

          <Button type="submit" label="Save" style={{ marginTop: '.5rem' }} />
        </Form>
      </Formik>

      <pre>{JSON.stringify(profile, null, 4)}</pre>
    </>
  )
};
