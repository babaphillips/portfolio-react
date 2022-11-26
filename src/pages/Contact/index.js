import emailjs from "emailjs-com";
// import { Form } from "semantic-ui-react";
import Swal from "sweetalert2";
import { Container, Form, Button } from "react-bootstrap";

const SERVICE_ID = "service_78lg0jd";
const TEMPLATE_ID = "template_e6jwrwi";
const USER_ID = "fgCpck3hhQTeth8s5";

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );

    e.target.reset();
  };

  return (
    <Container fluid>
      <Form className="mx-5 p-2" onSubmit={handleOnSubmit}>
        {/* <Form.Label
          id="form-input-control-email"
          label="Email"
          name="user_email"
          placeholder="Enter your email address"
          required
          icon="mail"
          iconPosition="left"
        />
        
        <Form.Control
          id="form-input-control-last-name"
          label="Name"
          name="user_name"
          placeholder="Please enter your full name"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        /> */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="user_email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="user_name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Whats on your mind"
            name="user_message"
          />
        </Form.Group>

        <Button type="submit" color="black">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
