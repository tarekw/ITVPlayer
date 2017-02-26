var Card = React.createClass({
  render: function () {
    if (this.props.data) {
      return (
        <div>
          <table className="table table-bordered table-hover">
              <tr>
                  <td><img className="img-rounded" src={this.props.data.Programme.ImageUri}/></td>
                  <td>
                      <b>{this.props.data.Programme.Programme.Title}</b>
                      <div>{this.props.data.Programme.ShortSynopsis}</div>
                  </td>
              </tr>
          </table>
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
      <div className="header">
        <br/>
        <input className="searchbox form-control" placeholder='enter your search term' ref="searchInput" onChange={this.handleOnChange}></input>
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
        <div className="resultArea">
          {cards}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
