import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterKegList: []
    };
  }

  handleAddingKeg = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisible: false
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render(){
    let currentState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      currentState=<NewKegForm onKegAdd={this.handleAddingKeg} />
      buttonText = "Back to Keg List"
    } else {
      currentState = <KegList kegList={this.state.masterKegList} />
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