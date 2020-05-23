import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Card } from "react-bootstrap";
import {deleteRace} from "../../../Actions/Profile";
import "./races.css";

const Races = ({ race, deleteRace }) => {
  const races = race.map((r) => (
    <tr key={r._id}>
      <td>{r.racename}</td>
      <td className='hide-col'>{r.racelocation}</td>
      <td className='hide-col'>{r.racedate}</td>
      <td className='hide-col'>{r.racetime}</td>
      <td>
        <i onClick={() => deleteRace(r._id)} className='fas fa-trash-alt' ></i>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <Card className='card lg p-3 mb-5 bg-white rounded shadow'>
      <h2 className='h2'>Races</h2>
      <Table   striped bordered hover variant="secondary">
        <thead>
         
          <tr className="thead">
            <th >Race Name</th>
            <th className='hide-col'>Location</th>
            <th className='hide-col'>Date</th>
            <th className='hide-col'>Time</th>
            <th >Delete</th>
          </tr>
        </thead>
        
        <tbody>{races}</tbody>
      </Table>
      </Card>
    </Fragment>
  );
};

Races.propTypes = {
  races: PropTypes.array.isRequired,
  deleteRace: PropTypes.func.isRequired
};

export default connect(null, {deleteRace}) (Races);
