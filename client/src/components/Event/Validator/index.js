import * as Yup from 'yup';

export  const FormSchema = Yup.object().shape({
  nameEvent: Yup.string().required(),
  dateEvent: Yup.date().min(new Date(),"Outdated date. Enter current date").required(),
  notificationDateEvent: Yup.date().min(new Date(),"Outdated date. Enter current date"),
});

