import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/filters';

export class ArticleListFilters extends React.Component{
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  render() {
    return (
      <div className="page-filter">
        <div className="container">
          <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                className="text-input"
                placeholder="search ..."
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({filters: state.filters})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListFilters);
