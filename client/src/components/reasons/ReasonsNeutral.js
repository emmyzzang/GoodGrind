import React, { Component } from 'react';
import UpdateReasons from '../../actions/updateReasons.js';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Item extends React.Component {
    handleClick = () => {
      const { itemId, onClick } = this.props;
      onClick(itemId);
    }

    render() {
      const { text, active } = this.props;
      return (
        <div  id='reasonsId' className={`header ${active && 'active'}`} onClick={this.handleClick}>{text}</div>
      );
    }
  }


class ReasonsNeutral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reasons: [],
      redirect: false,
      items: [
        {
          text: "Low Energy Environment",
          id: 1
        },
        {
          text: "High Turnover",
          id: 2
        },
        {
          text: "Emotionally Removed Co-workers",
          id: 3
        },
        {
          text: "Work Goes Unnoticed",
          id: 4
        },
        {
          text: "Rigid Work Hours",
          id: 5
        },
        {
          text: "Uninteresting Work",
          id: 6
        },
        {
          text: "Lack of Skill Building",
          id: 7
        },
      ]
    }
  }

  handleOnClick = () => {

    var reasons = this.state.reasons
    var items = this.state.items
    var finalOutput = []


    for(var i = 0; i < items.length; i ++){
      if(reasons.indexOf(items[i].id) >= 0)
          finalOutput.push(items[i].text)
        }


    UpdateReasons(finalOutput)
    window.location.assign("/stats");
    // this.setState({redirect: true});
  }

  onItemClick = (id) => {
    var stateless = this.state.reasons;

    if(stateless.indexOf(id) == -1) {
      const reasonsInFunc = []
      reasonsInFunc.push(id)
      this.setState({reasons: this.state.reasons.concat(reasonsInFunc)});
    } else {
      let newState = this.state.reasons
      const index = newState.indexOf(id)
      newState.splice(index, 1);
      this.setState({reasons: newState})
    }
  }


  render() {
    const { items, reasons } = this.state;
    return (
      <div >
        {
          items.map((item) => {
            return (
              <Item
                key={item.id}
                text={item.text}
                itemId={item.id}
                onClick={this.onItemClick}
                active={ item.id === reasons[reasons.indexOf(item.id)]}
              />
            )
          })
        }

        <br></br>

        <p id='submitP'>
            <FontAwesome name="arrow-circle-right" id="arrow" onClick={this.handleOnClick} />
        </p>

      </div>
    );
  }

}



export default ReasonsNeutral
