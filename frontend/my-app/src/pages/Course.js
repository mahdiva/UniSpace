import "../App.css"
import React, { Component } from "react";
import {Card} from "react-bootstrap";

function Course(){
    const courses = [
        {name: "Data Structure", number: "CMPT 307"},
        {name: "Software development", number: "CMPT 373"}
    ];

    const renderCard = (course, index) => {
        return (
            // <Card style={{ width: '18rem' }} key={index}>
                <Card
                    style={{ width: '18rem' }}
                    key={index}
                    className="mb-2"
                >
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{course.number}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="Course">
            {courses.map(renderCard)}
        </div>
    )
}

export default Course;