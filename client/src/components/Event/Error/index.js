import React from 'react';
import {ErrorMessage} from 'formik';
import styles from './Error.module.scss'



const ErrorMessages = (props)=>{


  return (
      <ErrorMessage {...props}>{msg => <div className={styles.msg}>{msg}</div>}</ErrorMessage>
  )
}


export  default ErrorMessages;