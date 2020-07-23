import React, { useState, useContext } from 'react';
import { Badge, Button, Container, Col, ListGroup, Row, Toast } from 'react-bootstrap';
import Pagination from 'react-bootstrap-4-pagination';
import { SettingsContext } from '../../context/settings/context.js';

const TodoList = (props) => {
  const context = useContext(SettingsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [displayList, setDisplay] = useState([]);
  const [showComplete, setShowComplete] = useState(false);

  let itemStatus = 'Pending';

  const isComplete = (item) => {
    if (item.complete) {
      itemStatus = 'Complete';
      return "success";
    } else {
      itemStatus = 'Pending';
      return "danger";
    }
  }

  const handleShowComplete = () => {
    setShowComplete(!showComplete);
    
    let displayList = [];
    
    for (let i = 0; i < props.list.length; i++) {
      if (props.list[i].complete === showComplete || props.list[i].complete === false) {
        displayList.push(props.list[i]);
      }
    }
    if (displayList !== []) {
      setDisplay(displayList);
    }
    // at the end, update displayList to only contain the incomplete
  }

  // Pagination info

  let pageTotal = Math.ceil((props.list.length) / (context.settings[0].itemsPerScreen));

  let paginationConfig = {
    totalPages: pageTotal,
    currentPage: currentPage,
    showMax: pageTotal,
    size: "md",
    prevNext: false,
    onClick: function (page) {
      cutList(props.list, page);
      setCurrentPage(page);
    }
  };

  function cutList(list, page) {
    let startIndex = 0;

    if (page !== 1) {
      startIndex = (page * context.settings[0].itemsPerScreen) - 1;
    }

    let displayList = [];

    console.log(context.settings[0].itemsPerScreen);
    for (let i = startIndex; i < (startIndex + context.settings[0].itemsPerScreen); i++) {
      if (list[i]) {
        displayList.push(list[i]);
      }
    }
    if (displayList !== []) {
      setDisplay(displayList);
    }
  }

  return (
    <>
      <Button id="handleShowComplete" as="input" type="button" value="Show/Hide Complete" onClick={handleShowComplete} />
      
      <ListGroup as="ul" id="toDoList" variant="flush">
        {displayList.map(item => (
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
                  <Col>
                    {/* TODO: add right alignment here */}
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

      <Pagination {...paginationConfig} />

    </>
  )
}

export default TodoList;