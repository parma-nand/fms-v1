import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContextualExample() {
  return (
    <>
      {[
       
        'Danger',
        
       
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bad Credential!!</strong>
            <small>Just Now!!</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Please! Enter Correct password.
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}

export default ContextualExample;