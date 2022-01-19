import React from 'react';
import "../Style/CourseSsc.css";

const CourseSscBody = ({type}) => {
    if(type=="Batches"){
        return(
            <div className="batch-card-container">
                <div className="batch-card">
                    <h2 className="batch-title">Vacation Cum regular batch</h2>
                    <p>
                    These batch is specially designed for average students who need
                    help in their study in daily basis. Here we cover the syllabus
                    with moderate speed and all subjects are coved in these batch.
                    </p>
                </div>

                <div className="batch-card">
                    <h2 className="batch-title">Vacation Batch </h2>
                    <p>
                    These batch is specially designed for average students who need
                    help in their study in daily basis. Here we cover the syllabus
                    with moderate speed and all subjects are coved in these batch.
                    </p>
                </div>

                <div className="batch-card">
                    <h2 className="batch-title">Test Series Batch </h2>
                    <p>
                    These batch is designed for those students who need help through
                    only test in their study. We conduct weekly test and prelims for
                    these batch students. We will check papers and also provide Answer
                    key of each test paper.
                    </p>
                </div>
           </div>    
        );
    }

    else if(type=="Test Series"){
        return (
          <div className="batch-container">
            <h1 className="test-header">Test Series</h1>
            <div className="table-container-testSeries">
               <table class="shedule_table">
                  <tr class="shedule_table__header">
                    <th>Sessions</th>
                    <th>1st term</th>
                    <th>Mid term</th>
                    <th>
                      After Diwali Vacation
                      <br /> (Nov. and Dec.)
                    </th>
                    <th>Prelims</th>
                  </tr>

                  <tr>
                    <th>Duration</th>
                    <td>June to Sep.</td>
                    <td>
                      1st week of <br />
                      October 2022
                    </td>
                    <td>Nov. and Dec.</td>
                    <td>Jan and Feb</td>
                  </tr>

                  <tr>
                    <th>Days of Test</th>
                    <td>Sunday and Thursday3</td>
                    <td>
                      Alternate days
                      <br />
                      (2 papers each subject )
                    </td>
                    <td>Sunday and Thursday </td>
                    <td>3 prelims</td>
                  </tr>
                  <tr>
                    <th>Counseling</th>
                    <td>Once in a month</td>
                    <td>After test series</td>
                    <td>Once in a month</td>
                    <td>After each prelims series</td>
                  </tr>
               </table>
            </div>
          </div>
        );
    }

    else{
        return (
          <div>
            <div className="batch-container">
              <h1>Vacation Cum Regular Batch</h1>
              <div className="table-container">
                <table class="shedule_table">
                  <tr class="shedule_table__header">
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

            <div className="batch-container">
              <h1>Vacation Batch</h1>
              <div className="table-container">
                <table class="shedule_table">
                  <tr class="shedule_table__header">
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
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <th>No .of days per week</th>
                    <td>7</td>
                    <td>7</td>
                    <td>only saturday</td>
                    <td>7</td>
                    <td>only saturday</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

export default CourseSscBody
