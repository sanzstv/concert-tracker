import React, { Component } from 'react';
import { getConcerts } from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { IntlProvider, FormattedDate } from 'react-intl';

class concertIndex extends Component{
	componentDidMount(){
		this.props.getConcerts();
	}

	renderConcerts(){
		return _.map(this.props.concerts, concert =>{
			return (
				<li className="event_url list-group-item" key={concert.id}>
					<Link to={concert.url} target="_blank">
						{concert.title}
					</Link><br/>
					<Link className="venue_url" to={concert.venue_url} target="_blank">
						{concert.venue_name}, {concert.city_name}

					</Link><br/>
					<IntlProvider locale="en">
					<FormattedDate
						value = {concert.start_time}
						day="numeric"
  						month="long"
  						year="numeric"
  						hour="numeric"
  						minute="numeric">
					</FormattedDate>
					</IntlProvider><br/><br/>
					<p>{concert.description}</p><br/>

				</li>
			);
		});
	}
	render(){
		return (
			<div><h2>Concerts</h2>
			<ul className = "list-group">
				{this.renderConcerts()}
			</ul>
			</div>
		);
	}

}

function mapStateToProps(state){
	return {concerts: state.concerts}
}

export default connect (mapStateToProps, {getConcerts})(concertIndex);