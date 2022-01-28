import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import OneBlog from './../OneBlog/OneBlog';



const Allblog = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://thawing-woodland-53152.herokuapp.com/blog`)
            .then((res) => res.json())
            .then((data) => setTickets(data.blog))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const updateStatus = (id) => {
        const bool = { status: false };
        fetch(`https://thawing-woodland-53152.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bool),
        }).then((data) => {
            const change = tickets.map((ticket) => {
                if (ticket._id === id) {
                    ticket.isPending = false;
                }
                return ticket;
            });
            setTickets(change);
        });
    };

    const deleteTicket = (id) => {
        const confirmation = window.confirm("are you sure want to delete?");
        if (confirmation) {
            const url = `https://thawing-woodland-53152.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Order Canceled");
                        const remainingTicket = tickets.filter(
                            (ticket) => ticket._id !== id
                        );
                        setTickets(remainingTicket);
                    }
                });
        } else {
            return;
        }
    };
    return (
        <Container>
            <h1 className="text-center text-success rounded-3 border-bottom pb-3 my-5 border-danger border-5">
                Manage Books
            </h1>
            {isLoading ? (
                <div className="text-center">
                    {" "}
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <Row className="g-4 mb-5">
                    {tickets.map((ticket) => (
                        <OneBlog
                            key={ticket._id}
                            updateStatus={updateStatus}
                            deleteTicket={deleteTicket}
                            ticket={ticket}
                        ></OneBlog>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Allblog;
