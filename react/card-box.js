'use strict';
class CardBox extends React.Component{

    render(){
      const cardboxstyle={
        position:"relative",
        top: "50px",
        border: "3px dotted",
        backgroundColor: 'yellow',
        padding: "10px",
        fontFamily: "bold",
        width: "300px",
        textAlign:"center"
      }
      const cardheading={
        fontSize: "large",
        textAlign:"center",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
      }
      return (
        <div className="card-box" style={cardboxstyle}>
          <div className='card-heading' style={cardheading}>
          {this.props.title}
          </div>
          {this.props.text}
        </div>
      )
    }
}
let title="Welcome"
let text="Please enter any simplification expression in the field then click Calculate"

let domContainer = document.querySelector('#react-element');
ReactDOM.render(<CardBox title={title} text={text} />, domContainer);

setTimeout(function(){
    document.getElementById('react-element').className = 'disappear';
  }, 5000);