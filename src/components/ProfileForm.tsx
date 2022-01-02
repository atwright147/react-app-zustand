import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { useProfileStore } from '../stores/profile.store';
import { Button } from './form/Button';
import { FormikCheckbox } from './form/Checkbox';
import { FormikRadio } from './form/Radio';
import { FormikTextField } from './form/TextField';
import { Profile } from '../types/profile.type';
import { FormikTextarea } from './form/Textarea';
import { Fieldset } from './form/Fieldset';
import { Heading } from './Heading';
import { useTitle } from '../hooks/title';

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
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email@example.com',
  gender: 'female',
  contactMethod: {
    email: false,
    post: true,
    sms: false,
  },
  description: 'description',
};


export const ProfileForm = (): JSX.Element => {
  const { add, profile } = useProfileStore();
  useTitle('Profile Form');

  const handleSubmit = (values: Profile): void => {
    add(values);
  }

  return (
    <>
      <Heading>Profile Form</Heading>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormikTextField label="First name" id="firstname" name="firstName" />
          <FormikTextField label="Last name" id="lastname" name="lastName" />
          <FormikTextField label="Email" id="email" name="email" />

          <Fieldset>
            <legend>Gender</legend>
            <FormikRadio label="Male" name="gender" value="male" />
            <FormikRadio label="Female" name="gender" value="female" />
          </Fieldset>

          <Fieldset>
            <legend>Contact Method</legend>
            <FormikCheckbox label="Email" id="contactMethod.email" name="contactMethod.email" />
            <FormikCheckbox label="Post" id="contactMethod.post" name="contactMethod.post" />
            <FormikCheckbox label="SMS" id="contactMethod.sms" name="contactMethod.sms"/>
          </Fieldset>

          <FormikTextarea label="Description" id="description" name="description" />

          <Button type="submit" label="Save" style={{ marginTop: '.5rem' }} />
        </Form>
      </Formik>

      <pre>{JSON.stringify(profile, null, 4)}</pre>
    </>
  )
};
