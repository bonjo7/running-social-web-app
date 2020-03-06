import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const Alert = props => props.alerts !== null && 
props.alerts.length > 0 && 
props.alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        { alert.msg }
    </div>
));

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);