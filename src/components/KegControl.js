import React from "react";
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleAddingKeg = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisible: false
    });
  }

  handleSelectingKeg = (id) => {
    const thisKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: thisKeg})
  }

  handleSellingPint = () => {
    const thisKeg = this.state.selectedKeg;
    const updatedKeg = {...thisKeg, pintsLeft: thisKeg.pintsLeft - 1}
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(updatedKeg);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: updatedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState ({
        formVisible: false,
        selectedKeg: null
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
    if (this.state.formVisible) {
      currentState=<NewKegForm onKegAdd={this.handleAddingKeg} />
      buttonText = "Back to Keg List"
    } else if (this.state.selectedKeg != null) {
      currentState =
      <KegDetail
      keg = {this.state.selectedKeg}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingSell = {this.handleSellingPint} />
      buttonText = "Back to Keg List"
    } else {
      currentState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleSelectingKeg} />
      buttonText = "Add a New Keg"
    }

    return(
      <>
        {currentState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;