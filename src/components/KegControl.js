import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class KegControl extends React.Component {

  handleAddingKeg = (newKeg) => { //done
    const { dispatch } = this.props;
    const { name, brand, price, abv, id, pintsLeft } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name,
      brand,
      price,
      abv,
      id,
      pintsLeft
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleSelectingKeg = (id) => { //done
    const { dispatch } = this.props;
    const thisKeg = this.props.masterKegList.filter(keg => keg.id === id)[0];
    let action = {
      type: 'SELECT_KEG',
      selectedKeg: thisKeg
    }
    dispatch(action);
  }

  handleEditClick = () => { //done
    const { dispatch } = this.props;
    let action = {
      type: 'TOGGLE_EDIT',
    }
    dispatch(action);
  }

  handleEditingKeg = (kegToEdit) => { //done
    const { dispatch } = this.props;
    const { name, brand, price, abv, id, pintsLeft } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name,
      brand,
      price,
      abv,
      id,
      pintsLeft
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_EDIT',
    }
    dispatch(action2);
    const action3 = {
      type: 'SELECT_KEG',
      selectedKeg: kegToEdit
    }
    dispatch(action3);
  }

  handleSellingPint = () => { //done
    const { dispatch } = this.props;
    const thisKeg = this.props.selectedKeg;
    const updatedKeg = {...thisKeg, pintsLeft: thisKeg.pintsLeft - 1}
    const action = {
      type: 'ADD_KEG',
      name: updatedKeg.name,
      brand: updatedKeg.brand,
      price: updatedKeg.price,
      abv: updatedKeg.abv,
      id: updatedKeg.id,
      pintsLeft: updatedKeg.pintsLeft
    }
    dispatch(action);
    const action2 = {
      type: 'SELECT_KEG',
      selectedKeg: updatedKeg
    }
    dispatch(action2);
  }

  handleDeletingKeg = (id) => { //done
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id
    }
    dispatch(action);
    let action2 = {
      type: 'SELECT_KEG',
      selectedKeg: null
    }
    dispatch(action2);
  }

  handleClick = () => {
    if (this.props.selectedKeg != null) {
      this.setState ({
        formVisible: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
      formVisible: !prevState.formVisible
      }));
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
  masterKegList: PropTypes.array,
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