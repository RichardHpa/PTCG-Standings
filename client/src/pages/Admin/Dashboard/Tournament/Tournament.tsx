import { useFormik } from 'formik';
import * as yup from 'yup';

import { useTournamentContext } from 'providers/TournamentProvider';

import { Heading } from 'components/Heading';
import { Input } from 'components/Forms/Input';
import { Select } from 'components/Forms/Select';
import { Button } from 'components/Button';

const selectOptions = [
  { value: 'finished', label: 'Finished' },
  { value: 'running', label: 'Running' },
  { value: 'not_started', label: 'Not Started' },
  { value: 'check_in', label: 'Check In' },
];

const validationSchema = yup.object({
  name: yup.string().required('A tournament name is required'),
  tournamentStatus: yup.string().required('Status is required'),
  rk9link: yup.string().required('RK9 Link is required'),
});

export const Tournament = () => {
  const { tournament } = useTournamentContext();

  const formik = useFormik({
    initialValues: tournament,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col items-start gap-4">
      <Heading level="4">{tournament.name}</Heading>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
          <div className="sm:col-span-2">
            <Input
              label="Tournament Name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.errors.name}
            />
          </div>

          <div className="w-full">
            <Select
              label="Status"
              name="tournamentStatus"
              options={selectOptions}
              value={formik.values.tournamentStatus}
              onChange={formik.handleChange}
            />
          </div>

          <div className="w-full">
            <Input
              name="rk9link"
              label="RK9 Link"
              value={formik.values.rk9link}
              onChange={formik.handleChange}
              error={formik.touched.rk9link && Boolean(formik.errors.rk9link)}
              onBlur={formik.handleBlur}
              helperText={formik.errors.rk9link}
            />
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit">Update Tournament</Button>
        </div>
      </form>
    </div>
  );
};
