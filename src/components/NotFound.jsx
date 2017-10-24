import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = (props) => {
  return (
    <section id="content">
    	<div className="row m-n">
    		<div className="col-sm-4 col-sm-offset-4">
    			<div className="text-center m-b-lg">
    				<h1 className="h text-white animated fadeInDownBig">404</h1>
    			</div>
    		<div className="list-group m-b-sm bg-white m-b-lg">
	    		<Link to="/webapp/elencocv" className="list-group-item">
	    			<i className="fa fa-chevron-right icon-muted"></i>
	    			<i className="fa fa-fw fa-home icon-muted"></i>
	    		 	Goto homepage
	    		</Link>
	    		<Link to="/webapp/elencocv" className="list-group-item">
	    			<i className="fa fa-chevron-right icon-muted"></i>
	    			<span className="badge">021-215-584</span>
	    			<i className="fa fa-fw fa-phone icon-muted"></i>
	    			 Call us
	    		</Link>
    		</div>
    		</div>
    	</div>
    </section>
  );
};

export default NotFound;
