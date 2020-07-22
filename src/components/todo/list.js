import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Badge, Container, Col, Row, Toast } from 'react-bootstrap';


const TodoList = (props) => {

  let itemStatus = 'Pending';

  // write a function to check if "completed" is true or false
  // if true, return "success"
  // if false, return "danger"

  const isComplete = (item) => {
    if(item.complete) {
      itemStatus = 'Complete';
      return "success";
    } else {
      itemStatus = 'Pending';
      return "danger";
    }
  }

  return (
    <>
      <ListGroup as="ul" variant="flush">
        {props.list.map(item => (

          <Toast as="li"
            onClose={() => props.handleDelete(item._id)}
            className={`complete-${item.complete.toString()}`}
            key={item._id}>

            <Toast.Header>
              <Container>
                <Row className="justify-content-md-left">
                  <Col md="auto">
                    <Badge pill variant={isComplete(item)}> {item.complete}  {itemStatus} </Badge>
                  </Col>
                  <Col>
                    <h6 className="mr-auto">{item.assignee} </h6>
                  </Col>
                </Row>
              </Container>
            </Toast.Header>

            <Toast.Body
              onClick={() => props.handleComplete(item._id)}>
              <Container>

                <Row>
                  <Col>
                    <p>
                      {item.text}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col md={{ span: 4, offset: 9 }}>
                    <p>
                      Difficulty: {item.difficulty}
                    </p>
                  </Col>
                </Row>

              </Container>
            </Toast.Body>

          </Toast>
        ))}
      </ListGroup>
    </>
  )
}

export default TodoList;