'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardBox = function (_React$Component) {
  _inherits(CardBox, _React$Component);

  function CardBox() {
    _classCallCheck(this, CardBox);

    return _possibleConstructorReturn(this, (CardBox.__proto__ || Object.getPrototypeOf(CardBox)).apply(this, arguments));
  }

  _createClass(CardBox, [{
    key: "render",
    value: function render() {
      var cardboxstyle = {
        position:"relative",
        top: "50px",
        border: "3px dotted",
        backgroundColor: 'yellow',
        padding: "10px",
        fontFamily: "bold",
        width: "300px",
        textAlign: "center"
      };
      var cardheading = {
        fontSize: "large",
        textAlign: "center",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
      };
      return React.createElement(
        "div",
        { className: "card-box", style: cardboxstyle },
        React.createElement(
          "div",
          { className: "card-heading", style: cardheading },
          this.props.title
        ),
        this.props.text
      );
    }
  }]);

  return CardBox;
}(React.Component);

var title = "Welcome";
var text = "Please enter any simplification expression in the field then click Calculate";

var domContainer = document.querySelector('#react-element');
ReactDOM.render(React.createElement(CardBox, { title: title, text: text }), domContainer);

setTimeout(function () {
  document.getElementById('react-element').className = 'disappear';
}, 5000);