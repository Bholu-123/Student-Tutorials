import React from 'react';
import "../Style/CourseSsc.css";

const CourseSscBody = ({type}) => {
    if(type=="VCRB"){
        return (
          <div className="VBRBContainer">
            <p>
              <strong>Strategy fit :</strong>These batches are specially
              designed to take all subjects of Maharashtra S.S.C. and CBSE in
              our classes with separate faculty for each subject. Our schedule
              is so planned , that we work on motto “Early syllabus completion,
              More time for revision
            </p>
            <p>
              <strong>Intensive coaching:</strong>
              We provide more hours of coaching for each
              subject in order to provide more practice. All concepts of each
              subject is thoroughly explained and a large number of examples are
              given in class so that all the concepts are properly understood
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
    }

    else if(type=="TB"){
        return (
          <div className="TBContainer">
            <p>
              <strong>Test Series batch :</strong> These batches are specially
              designed for those students who need help through only test in
              their studies. We conduct weekly test and prelims for these
              students. We will check papers and also provide Answer key of each
              test paper. We believe in the fact that writing test is not only
              sufficient hence we guide strategically students once in a month
              for his/her improvement in studies.
            </p>
            
            <p>
              <strong>Regular Tests : </strong>
               Quite frequent unit test & several rounds of
              preliminary Exam. Schedule of test will be such that it does not
              clash with the tests held in the school
            </p>

            <div className="table-container-testSeries">
              <table className="shedule_table">
                <tr className="shedule_table__header">
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
          <div className="VBContainer">
            <p>
              <strong>Strategy fit :</strong>These batches are specially
              designed for those who need self study rather than daily packed
              schedule. Classes are conducted only twice a week during regular
              school days and students get enough time for self study.
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
        );
    }
}

export default CourseSscBody
