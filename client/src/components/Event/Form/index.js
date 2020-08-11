import React from 'react';
import Picker from '../DateField';
import {Formik, Form, FastField} from 'formik';
import ErrorMessages from '../Error/index';
import {connect} from 'react-redux';
import {createEventAction} from '../../../actions/actionCreator';
import moment from 'moment';
import Button from '../Button';
import style from './Form.module.scss'
import {FormSchema} from '../Validator/index'



const FormEvent = (props) => {

  const resetButtonClickHandler = (formik, field, value) => {
    formik.setFieldValue(field, value)
  }

  return (

        <Formik
            initialValues={{nameEvent: ''}}
            onSubmit={(values, {setSubmitting,resetForm}) => {
              const createEventValue = new Date();
              props.newEventValue(values, createEventValue);
              resetForm();

            }}
            validationSchema={FormSchema}
        >
          {formik => (
              <Form onSubmit={formik.handleSubmit} className={style.container}>
                <FastField name = "nameEvent" component='input' type='text' className={style.input} placeholder="Enter the name of the event"/>
                <ErrorMessages name='nameEvent'/>
                <Picker name="dateEvent" timeInputLabel="Time:" dateFormat="Pp" showTimeInput placeholderText="Enter a date to create an event" minDate={moment().toDate()} className={style.input} />
                <ErrorMessages name='dateEvent'/>
                <Picker name="notificationDateEvent" timeInputLabel="Time:" dateFormat="Pp" placeholderText="Enter date to create notification"  minDate={moment().toDate()} maxDate={formik.values["dateEvent"]} className={style.input} showTimeInput/>
                <ErrorMessages name='notificationDateEvent'/>
                <Button type="submit" className={style.button}>Submit</Button>
                <Button onClick={()=>resetButtonClickHandler(formik, 'dateEvent', '')} className={style.button}>Reset event date</Button>
                <Button onClick={()=>resetButtonClickHandler(formik, 'notificationDateEvent', '')} className={style.button}>Reset event notification</Button>
              </Form>
          )}
        </Formik>
  )

};

const mapDispatchToProps = (dispatch) => {
  return {
    newEventValue: (values, createEventValue) => dispatch(createEventAction(values, createEventValue)),
  };
};
export default connect(null, mapDispatchToProps)(FormEvent);


