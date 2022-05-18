import React, { useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PlusSvg } from '../../assets/svg';
import { getLocalDataString } from '../../lib/utils';
import WeekDayCalendar from '../calendar/WeekDayCalendar';
import IconInput from '../common/IconInput';
import PlusIcon from '../common/PlusIcon';
import RogueBorderView from '../common/RogueBorderView';

export type TaskFormType = {
  email: string;
  password: string;
};

function TaskForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onSelectDate = (date: Date) => {
    setSelectedDate(date);
  };
  const { handleSubmit, control } = useForm<TaskFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TaskFormType> = data => {
    console.log(data);
  };
  return (
    <>
      <WeekDayCalendar selectedDate={selectedDate} onSelectDate={onSelectDate} />

      <div className='flex items-center p-4'>
        <span className='flex-1 font-bold truncate'>{getLocalDataString(selectedDate)}</span>
        <span>On time: 90%</span>
      </div>

      <RogueBorderView>
        <form onSubmit={handleSubmit(onSubmit)} className='text-white grid gap-4 mt-4'>
          <div className='font-bold text-center'>Task with your account</div>
          {/* <Controller
            control={control}
            name='email'
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, name, value, ref } }) => (
              <IconInput fieldRef={ref} onBlur={onBlur} name={name} onChange={onChange} placeholder='Enter Email' value={value} />
            )}
          />
          <Controller
            control={control}
            name='password'
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, name, value, ref } }) => (
              <IconInput
                fieldRef={ref}
                onBlur={onBlur}
                name={name}
                onChange={onChange}
                placeholder='Enter Password'
                type='password'
                value={value}
              />
            )}
          /> */}
          <button type='submit'>
            <PlusIcon className='flex items-center justify-end my-4' />
          </button>
        </form>
      </RogueBorderView>
    </>
  );
}

export default TaskForm;