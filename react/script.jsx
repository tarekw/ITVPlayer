var Card = React.createClass({
  render: function () {
    if (this.props.data) {
      return (
        <div>
          <h3>{this.props.data.Programme.Programme.Title}</h3>
          <img src={this.props.data.Programme.ImageUri} />
          <hr/>
        </div>
      );
    } else {
      return false;
    }
  }
});

var SearchInput = React.createClass({
  handleOnChange: function () {
    this.props.searchItems(this.refs.searchInput.value);
  },
  render: function () {
    return (
      <div>
        <br/>
        <input placeholder='enter your search term' ref="searchInput" onChange={this.handleOnChange}></input>
      </div>
    );
  }
});

var Main = React.createClass({
  getInitialState: function () {
    return {
      details: []
    };
  },
  searchItems: function (term) {
    var self = this;
    $.get('http://mercury.itv.com/api/json/dotcom/programme/searchatoz/' + term, function (data) {
      if (data && data.Result) {
        self.setState({ details: data.Result[0].Details });
      } else {
        self.setState({ details: [] });
      }
    });
  },
  render: function () {
    var cards = this.state.details.map(function(item) {
      return (<Card data={item} />);
    });
    return (
      <div>
        <SearchInput searchItems={this.searchItems}/>
        <hr/>
        {cards}
      </div>
    );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
