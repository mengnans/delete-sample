/* eslint-disable no-unused-vars */
import React from 'react';
import mockData from '../constants/data';
import StaffRow from '../presentational/StaffRow'
import '../../styles/StaffList.scss';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let dataLoadedFromBackend = mockData;
    for (let staff of dataLoadedFromBackend) {
      staff.checked = false;
    }
    this.setState({
      data: dataLoadedFromBackend,
    });
  }

  onDeleteButtonClick() {
    let newData = [];

    for(let staff of this.state.data){
      if(!staff.checked){
        newData.push(staff);
      }
    }

    this.setState({
      data: newData
    });
  }

  onRowClick(id) {
    let newData = this.state.data;
    for (let staff of newData) {
      if(staff.id === id) {
        staff.checked = ! staff.checked;
      }
    }
    this.setState({
      data: newData
    });
  }

  render() {
    let deleteButtonText = "Delete ";
    let staffsChecked = 0;
    let deleteButtonOnClickFunc = null;
    let deleteButtonClassName = "delete-button disabled";

    for (let staff of this.state.data) {
      if (staff.checked === true) {
        staffsChecked++;
      }
    }

    if (staffsChecked > 0) {
      deleteButtonText += staffsChecked + " staffs";
      deleteButtonOnClickFunc = this.onDeleteButtonClick.bind(this);
      deleteButtonClassName = "delete-button";
    } else {
      deleteButtonText += "0 staff";
    }

    return (
      <div className="staffContainer">
        <div className="header">Delete selected staffs</div>
        <div className="staff-list">
          {
            this.state.data.map(staff => {
              let icon = staff.checked ? faCheckSquare : faSquare;

              return (
                <StaffRow
                  key={staff.id}
                  id={staff.id}
                  name={staff.name}
                  email={staff.email}
                  icon={icon}
                  onClick={this.onRowClick.bind(this, staff.id)}
                />
              )
            })
          }
        </div>
        <div className="buttons">
          <div className={deleteButtonClassName} onClick={deleteButtonOnClickFunc}>
            {deleteButtonText}
          </div>
        </div>
      </div>
    );
  }
}