import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";
import "./races.css";

const Races = ({ race }) => {
  const races = race.map((r) => (
    <tr key={r._id}>
      <td>{r.racename}</td>
      <td className='hide-col'>{r.racelocation}</td>
      <td className='hide-col'>{r.racedate}</td>
      <td>{r.racetime}</td>
      <td>
        <i className='fas fa-trash-alt'></i>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2>Races</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Race Name</th>
            <th className='hide-col'>Location</th>
            <th className='hide-col'>Date</th>
            <th>Time</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{races}</tbody>
      </Table>
    </Fragment>
  );
};

Races.propTypes = {
  race: PropTypes.array.isRequired,
};

export default Races;
