import React from 'react'

const Course8th = () => {
  return (
    <>
      <div className="VBRBContainer">
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Course 8th and 9th
        </h2>
        <div className="title-border">
          <span></span>
        </div>
        <p>
          <strong>Strategy fit : </strong>These batches are specially designed
          to take all subjects of Maharashtra S.S.C. and CBSE in our classes
          with separate faculty for each subject. Our schedule is so planned ,
          that we work on motto “Early syllabus completion, More time for
          revision
        </p>
        <p>
          <strong>Intensive coaching : </strong>We provide more hours of
          coaching for each subject in order to provide more practice. All
          concepts of each subject is thoroughly explained so that base must me
          strong for next year boards.
        </p>

        <div className="table-container">
          <table className="shedule_table" style={{width: "70%", margin: "auto",marginBottom: "30px"}}>
            <tr className="shedule_table__header">
              <th>Sessions</th>
              <th>
                Evening Batch
                <br />
                3:15 to 6:15 pm
              </th>
              <th>
                Evening Batch
                <br />
                4:30 to 6:45pm
              </th>
              <th>Long Holidays</th>
            </tr>

            <tr>
              <th>Starding Date</th>
              <td>
                from 15th june
                <br />
                2022 ownward
              </td>
              <td>
                from 15th june
                <br />
                2022 ownward
              </td>
              <td>Ganpati Festival(7days)</td>
            </tr>

            <tr>
              <th>No. of hrs per day</th>
              <td>3</td>
              <td>2hr 15min</td>
              <td>Diwali Vacations</td>
            </tr>
            <tr>
              <th>No .of days per week</th>
              <td>6</td>
              <td>6</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Course8th