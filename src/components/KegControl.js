import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import * as a from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class KegControl extends React.Component {

  handleAddingKeg = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSelectingKeg = (id) => {
    const { dispatch } = this.props;
    const thisKeg = Object.values(this.props.masterKegList).filter(keg => keg.id === id)[0];
    const action = a.selectKeg(thisKeg);
    dispatch(action);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleEditingKeg = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.toggleEdit();
    dispatch(action2);
    const action3 = a.selectKeg(kegToEdit);
    dispatch(action3);
  }

  handleSellingPint = () => {
    const { dispatch } = this.props;
    const thisKeg = this.props.selectedKeg;
    const updatedKeg = {...thisKeg, pintsLeft: thisKeg.pintsLeft - 1}
    const action = a.addKeg(updatedKeg);
    dispatch(action);
    const action2 = a.selectKeg(updatedKeg);
    dispatch(action2);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.selectKeg(null);
    dispatch(action2);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      if(this.props.editing){
        const action = a.toggleEdit();
        dispatch(action);
      }
      const action2 = a.selectKeg(null);
      dispatch(action2);
      if(this.props.formVisible){
      const action3 = a.toggleForm();
      dispatch(action3);
      }
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  render(){
    let currentState = null;
    let buttonText = null;
    if (this.props.editing){
      currentState = <EditKegForm keg = {this.props.selectedKeg} onEditKeg = {this.handleEditingKeg} />;
      buttonText = "Back to Keg List";
    } else if (this.props.formVisible) {
      currentState=<NewKegForm onKegAdd={this.handleAddingKeg} />;
      buttonText = "Back to Keg List";
    } else if (this.props.selectedKeg != null) {
      currentState =
      <KegDetail
      keg = {this.props.selectedKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}
      onClickingSell = {this.handleSellingPint} />;
      buttonText = "Back to Keg List";
    } else {
      currentState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleSelectingKeg} />;
      buttonText = "Add a New Keg";
    }

    return(
      <>
        <button style={{float: 'right', marginBottom: '30px'}} onClick={this.handleClick} className='btn btn-warning'>{buttonText}</button>
        <br/>
        {currentState}
      </>
    );
  }
}

KegControl.propTypes = {
  formVisible: PropTypes.bool,
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisible: state.formVisible,
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;