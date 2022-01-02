import { Formik, Field, Form, ErrorMessage, FieldProps } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useTitle } from '../hooks/title';

type Input2Props = React.InputHTMLAttributes<HTMLInputElement> & FieldProps<string, string> & {
  id: string,
  label: string,
  callback: (value: any) => void,
}


const Debug = ({ data }: { data: any }) => <pre>{JSON.stringify(data, null, 4)}</pre>

const Input = ({ ...props }) => {
  return (
    <div className="field">
      <label htmlFor={props.id}>{props.label}</label>
      <Field { ...props } />
      <ErrorMessage name={props.name} />
    </div>
  );
}

const Input2 = ({ field, form, ...props }: Input2Props): JSX.Element => {
  return (
    <div className="field">
      <label htmlFor={props.id}>{props.label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={field.name} />
    </div>
  );
}

const validationSchema = yup.object({
  field1: yup.string().min(3, 'Should be longer than 3 characters').required('Please enter something for field 1'),
  field2: yup.string().min(3, 'Should be longer than 3 characters').required('Please enter something for field 2'),
});

export const BasicForm = (): JSX.Element => {
  const [formState, setFormState] = useState({});
  useTitle('Basic Form');

  const handleSubmit = (values: any): void => {
    console.info(values);
    setFormState(values);
  }

  return (
    <>
      <Formik
        initialValues={{ field1: 'value1', field2: 'value2', }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Input label="Field 1:" id="field1" name="field1" />
          <Field label="Field 2:" name="field2" component={Input2} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <hr />

      <Debug data={formState} />
    </>
  )
};
