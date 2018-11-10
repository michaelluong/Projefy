import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class TaskList extends Component {
  state = {
    tasks: [
      {
        id: uuid(),
        title: 'Create Task',
        description: 'Create a task.'
      },
      {
        id: uuid(),
        title: 'Cook Dinner',
        description: 'Nom Nom.'
      },
      {
        id: uuid(),
        title: 'Play Badminton',
        description: 'Go Workout!'
      },
      {
        id: uuid(),
        title: 'Go to sleep',
        description: 'Get some rest.'
      }
    ]
  };

  render() {
    const { tasks } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginButton: '2em' }}
          onClick={() => {
            const title = prompt('Enter Task');
            const description = prompt('Task Description');
            if (title && description) {
              this.setState(state => ({
                tasks: [...state.tasks, { id: uuid(), title, description }]
              }));
            }
          }}
        >
          Add Task
        </Button>

        <ListGroup>
          <TransitionGroup className="task-list">
            {tasks.map(({ id, title, description }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        tasks: state.tasks.filter(task => task.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  <b>{title}:</b> {description}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default TaskList;
