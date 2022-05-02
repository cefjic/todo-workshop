import { ChangeEvent, FormEvent, useState } from "react";

import { Form, Button } from "react-bootstrap";

interface Props {
  addTask(content: string): void;
}

const FormContent = ({ addTask }: Props) => {
  const [content, setContent] = useState<string>("");

  const onContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (content) {
      addTask(content);
      setContent("");
    }
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      className="w-50 m-auto d-flex flex-column align-items-end border-top mt-4"
    >
      <Form.Group className="mb-3 mt-4 w-100" controlId="formBasicEmail">
        <Form.Label for="content">
          Que voulez vous ajouter à votre liste ?
        </Form.Label>
        <Form.Control
          type="text"
          name="content"
          placeholder="Appeler maman..."
          value={content}
          onChange={onContentChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-50">
        Ajouter
      </Button>
    </Form>
  );
};

export default FormContent;
