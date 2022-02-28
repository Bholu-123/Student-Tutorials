import React, { useState } from 'react';

const CourseJunior = ({
  match: {
    params: { id },
  },
}) => {
  console.log(id);
  return (
    <div className="VBRBContainer">
      <p>
        <strong>Strategy fit : </strong>These batches are specially designed to
        take all subjects of Maharashtra S.S.C. and CBSE in our classes with
        separate faculty for each subject. Our schedule is so planned , that we
        work on motto “Early syllabus completion, More time for revision.
      </p>
      <p>
        <strong>Intensive coaching : </strong>We provide more hours of coaching
        for each subject in order to provide more practice. All concepts of each
        subject is thoroughly explained so that base must me strong for next
        year boards.
      </p>

      <div className="table-container">
        <table className="shedule_table">
          <tr className="shedule_table__header">
            <th>Sessions</th>
            <th>
              Summer vacation
              <br />
              1st session
            </th>
            <th>
              Summer vacation
              <br />
              2nd session
            </th>
            <th>
              Regular school days
              <br />
              1st Term
            </th>
            <th>Diwali vacation</th>
            <th>
              Regular school days
              <br />
              2nd Term
            </th>
          </tr>

          <tr>
            <th>Duration</th>
            <td>2nd week of April to 21st May</td>
            <td>6th June to 12th June 2022</td>
            <td>16th June onward </td>
            <td>All Days</td>
            <td>After Vacation</td>
          </tr>

          <tr>
            <th>No. of hrs per day</th>
            <td>4</td>
            <td>4</td>
            <td>2</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <th>No .of days per week</th>
            <td>7</td>
            <td>7</td>
            <td>6</td>
            <td>7</td>
            <td>6</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CourseJunior;
