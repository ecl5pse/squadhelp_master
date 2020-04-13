import React             from 'react';
import CONSTANTS         from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard  from '../../components/CreatorDashboard/CreatorDashboard';
import Header            from '../../components/Header/Header';
import {connect}         from 'react-redux';
import {Link}            from 'react-router-dom';
import style          from './Dashboard.module.scss';


const Dashboard = (props) => {
    const {role, history} = props;
    return (
        <div>
            <Header/>
            {
                role === CONSTANTS.CUSTOMER ?
                    <CustomerDashboard history={history} match={props.match}/>
                    :
                    <CreatorDashboard history={history} match={props.match}/>
            }
          <span className={style.bt}> <Link to={'transactionPage'}> Transaction Page</Link></span>
          </div>
    );
};

const mapStateToProps = (state) => {
    return state.userStore.data
};

export default connect(mapStateToProps)(Dashboard);
