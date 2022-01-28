import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const OneBlog = (props) => {
    const { ticket, deleteTicket, updateStatus } = props;
    //   console.log(ticket);
    const {
        _id,
        image,
        title,
        category,
        cost,
        address,
        info,
        description,
        isPending
    } = ticket;
    return (
        <Col sm={12} md={12} lg={4}>
            <div className="rounded-3">
                <Card className="">
                    <div>
                        <img src={image} alt="" />
                        <div className="p-2" >
                            <h3>{title}</h3>
                            <h5>{info}</h5>
                            <p> Location:{address}</p>
                            <h6>category:{category}</h6>
                            <p>Travel Cost: ${cost}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                    <Card.Footer className="d-flex">
                        <Button
                            onClick={() => {
                                deleteTicket(_id);
                            }}
                            className="btn-danger"
                        >
                            <i className="fas fa-trash"></i>
                            Delete Booking
                        </Button>
                        {isPending ? (
                            <Button
                                onClick={() => updateStatus(_id)}
                                className="btn-warning ms-5"
                            >
                                <i className="fas fa-paperclip"></i>
                                Pending
                            </Button>
                        ) : (
                            <Button className=" btn-success disabled ms-5">
                                <i className="fas fa-check"></i> Shipped
                            </Button>
                        )}
                    </Card.Footer>
                </Card>
            </div>
        </Col>
    );
};

export default OneBlog;