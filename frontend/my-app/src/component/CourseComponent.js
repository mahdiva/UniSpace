import * as React from 'react';
import {Card} from "react-bootstrap";

//[https://www.telerik.com/kendo-react-ui/components/layout/card/layouts/]
const CourseComponent = props => {
    return (
        <div className="card text-center">
            <div className="overflow">

            </div>
            <div className="card-body text-dark">
                <h4 className = "card-title">Card Title </h4>
                <p className="card-text text-secondary">
                    lorem
                </p>
                <a href="#" className = "btn btn-outline-success">Go anywhere</a>
            </div>

        </div>
    );

}

export default CourseComponent