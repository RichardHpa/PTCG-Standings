import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLoaderData } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// import { useTournamentContext } from 'providers/TournamentProvider';

import { Heading } from 'components/Heading';
import { Input } from 'components/Forms/Input';
import { Select } from 'components/Forms/Select';
import { Button } from 'components/Button';
import { Notice } from 'components/Notice';
import { LoadingPokeball } from 'components/LoadingPokeball';

import {
  sendRequest,
  ApiMethod,
  sendAuthGuardedRequest,
} from 'helpers/sendRequest';

import { tournamentTypeOptions } from 'pages/Tournaments/Tournaments';

interface AdminTournament {
  id: number;
  name: string;
  location: string;
  status: string;
  event_type: string;
  season: string;
  starts_at: string;
  ends_at: string;
}

interface AdminTournamentApiResponse {
  data: {
    tournament: AdminTournament;
  };
}

const getTournaments = async (
  id: string,
): Promise<AdminTournamentApiResponse> => {
  const tournamentUrl = `https://ptcg-api.fly.dev/api/tournaments/${id}`;
  return sendRequest(ApiMethod.GET, tournamentUrl);
};

const updateTournament = async (
  id: string,
  data: AdminTournament,
): Promise<AdminTournamentApiResponse> => {
  const updateTournamentUrl = `https://ptcg-api.fly.dev/api/admin/tournaments/${id}`;
  return sendAuthGuardedRequest(ApiMethod.PUT, updateTournamentUrl, data);
};

const useGetTournament = (id: string) => {
  return useQuery({
    queryKey: ['admin', 'tournaments', id],
    queryFn: () => getTournaments(id),
    select: data => data.data.tournament,
  });
};

const selectOptions = [
  { value: 'Unknown', label: 'Unknown' },
  { value: 'finished', label: 'Finished' },
  { value: 'running', label: 'Running' },
  { value: 'not_started', label: 'Not Started' },
  { value: 'check_in', label: 'Check In' },
];

const validationSchema = yup.object({
  name: yup.string().required('A tournament name is required'),
  status: yup.string().required('Status is required'),
  event_type: yup.string().required('Event type is required'),
});

const TournamentForm = ({ tournament }: { tournament: AdminTournament }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (updatedTournament: AdminTournament) => {
      return updateTournament(tournament.id.toString(), updatedTournament);
    },
    onSuccess: res => {
      queryClient.invalidateQueries({
        queryKey: ['admin', 'tournaments'],
      });
      queryClient.setQueryData(
        ['admin', 'tournaments', tournament.id.toString()],
        res,
      );
    },
    onError: error => {
      console.error(error);
    },
  });

  const formik = useFormik({
    initialValues: tournament,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: values => {
      mutation.mutate(values);
    },
  });

  return (
    <div className="flex flex-col items-start gap-4">
      <Heading level="4">{tournament.name}</Heading>

      {mutation.isError && (
        <Notice status="error">
          {mutation.error?.message || 'An error occurred'}
        </Notice>
      )}

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
              disabled={mutation.isPending}
            />
          </div>
          <div className="w-full">
            <Select
              label="Status"
              name="status"
              options={selectOptions}
              value={formik.values.status}
              onChange={formik.handleChange}
              // disabled={mutation.isPending}
            />
          </div>

          <div className="w-full">
            <Select
              label="Event type"
              name="event_type"
              options={tournamentTypeOptions}
              value={formik.values.event_type}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit" disabled={!formik.dirty || mutation.isPending}>
            {mutation.isPending ? 'Saving...' : 'Update Tournament'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export const Tournament = () => {
  const { tournamentId } = useLoaderData() as { tournamentId: string };
  const {
    data: tournament,
    isPending,
    isError,
  } = useGetTournament(tournamentId);

  if (isError) {
    return <div>Error</div>;
  }

  if (isPending) {
    return (
      <div className="flex w-full justify-center">
        <LoadingPokeball size={90} />
      </div>
    );
  }

  return <TournamentForm tournament={tournament} />;
};
