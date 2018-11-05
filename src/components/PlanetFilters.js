import React from 'react';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SetTextFilter } from '../actions/filters';

class PlanetFilters extends PureComponent {

	constructor(props){
		super();
		this.filteredData = this.filteredData.bind(this);
	}

    filteredData(event) {
         this.props.onTextChange(event.target.value)
    }

    render() {
        return (
            <div className="content-container">
		<div className="input-group">
			<div className="input-group__item">
				<input type="text" className="text-input" placeholder="Search planets"  onChange = {this.filteredData}/>
			</div>
		</div>
	</div>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => dispatch(SetTextFilter(text))
    }
}

export default connect(undefined, mapDispatchToProps)(PlanetFilters);