/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '../Button';

export const SearchForm: FC = () => {
  type SearchForm = {
    xbet: number;
    tag: string;
    userName: string;
  };
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<SearchForm> = async (data) => {
    await router.push({
      pathname: '/dashboard',
      query: { xbet: data.xbet, tag: data.tag },
    });
  };
  return (
    <div className="flex">
      <div>
        <Controller
          name="tag"
          control={control}
          render={({ field }) => <input {...field} placeholder="キーワードを入力" />}
        />
      </div>
      <div>
        <Button onClick={handleSubmit(onSubmit)} label="検索" />
      </div>
    </div>
  );
};
