
import 'bootstrap/dist/css/bootstrap.min.css';


import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oops! Bad Credential...</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}

export default AdditionalContentExample;