import { TaskInterface } from "../app/App.interfaces";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface Props {
  task: TaskInterface;
  removeTask(id: TaskInterface["id"]): void;
}

const Task = ({ task: { content, id }, removeTask }: Props) => (
  <Card className="m-auto mt-4 w-50">
    <Card.Body>
      <Card.Text>{content}</Card.Text>
      <Button variant="danger" size="sm" onClick={() => removeTask(id)}>
        Supprimer
      </Button>
    </Card.Body>
  </Card>
);

export default Task;
