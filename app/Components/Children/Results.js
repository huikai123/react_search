// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">

					<p>{this.props.topic}</p>
					<span>
						<input type="text" className="form-control text-center" id="" />
						<button type="button" className="btn btn-primary" onClick="">Save</button>
					</span>
					<br />
						
					<span>
						<input type="text" className="form-control text-center" id="" />
						<button type="button" className="btn btn-primary" onClick="">Save</button>
					</span>
					<br />
						
					<span>
						<input type="text" className="form-control text-center" id="" />
						<button type="button" className="btn btn-primary" onClick="">Save</button>
					</span>
					<br />
						
					<span>
						<input type="text" className="form-control text-center" id="" />
						<button type="button" className="btn btn-primary" onClick="">Save</button>
					</span>
					<br />
						
					<span>
						<input type="text" className="form-control text-center" id="" />
						<button type="button" className="btn btn-primary" onClick="">Save</button>
					</span>
					<br />

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;