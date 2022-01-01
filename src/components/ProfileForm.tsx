import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { useProfileStore } from '../stores/profile.store';
import { Button } from './form/Button';
import { Checkbox } from './form/Checkbox';
import { Radio } from './form/Radio';
import { FormikTextField } from './form/TextField';
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
          <FormikTextField label="First name" id="firstname" name="firstName" />
          <FormikTextField label="Last name" id="lastname" name="lastName" />
          <FormikTextField label="Email" id="email" name="email" />

          <Field label="Male" id="gender-male" name="gender" component={Radio} value="male" />
          <Field label="Female" id="gender-female" name="gender" component={Radio} value="female" />

          <fieldset>
            <legend>Contact Method</legend>
            <Field label="Post" id="contactMethod.post" name="contactMethod.post" component={Checkbox} value="post" />
            <Field label="Email" id="contactMethod.email" name="contactMethod.email" component={Checkbox} value="email" />
            <Field label="SMS" id="contactMethod.sms" name="contactMethod.sms" component={Checkbox} value="sms" />
          </fieldset>

          <FormikTextField label="Description" id="description" name="description" />

          <Button type="submit" label="Save" style={{ marginTop: '.5rem' }} />
        </Form>
      </Formik>

      <pre>{JSON.stringify(profile, null, 4)}</pre>
    </>
  )
};
