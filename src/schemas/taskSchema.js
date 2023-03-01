import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  title: Yup.string().min(5).trim('Cannot be empty').required('title is required'),
  descr: Yup.string().min(10).trim('Cannot be empty').required('description is required'),
  status: Yup.string().oneOf(["in progress", "done", "paused", "urgently"]).required('status is required'),
})