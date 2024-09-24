import { useRef, useState } from "react";

export default function FormValidation() {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const acceptAllConditions = useRef();
  const [isFormSent, setIsFormSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const ValidateRequiredElement = (ref) => {
    if (ref.current.value.trim() === "") {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ [ref.current.id]: "field required" },
        };
      });
      setIsFormValid(false);
    }
  };

  const validateForm = () => {
    setErrors({});
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const messageValue = message.current.value;
    const acceptConditionValue = acceptAllConditions.current.checked;
    let isFormValid = true;

    ValidateRequiredElement(name);
    ValidateRequiredElement(email);
    if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ email: "Email incorrect" },
        };
      });
      isFormValid = false;
    }
    ValidateRequiredElement(message);

    const minMessageLentgh = 200;
    const currentMesssageLength = message.current.value.length;
    if (currentMesssageLength < minMessageLentgh) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{
            [message.current
              .id]: `Message should contain (${currentMesssageLength}/${minMessageLentgh})`,
          },
        };
      });
      isFormValid = false;
    }

    if (!acceptConditionValue) {
      setErrors((prevState) => {
        return {
          ...prevState,
          ...{ [acceptAllConditions.current.id]: `checkbox must be checked` },
        };
      });
      isFormValid = false;
    }

    setIsFormValid(isFormValid);
    return isFormValid;
  };

  const resetForm = () => {
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
    acceptAllConditions.current.checked = false;
  };
  const handleChange = () => {
    validateForm();
  };

  const submitForm = (e) => {
    e.preventDefault();
    setIsFormSent(false);
    validateForm();
    if (validateForm()) {
      setIsFormSent(true);
      resetForm();
    }
  };
  const getError = (fieldName) => {
    return errors[fieldName];
  };
  const hasError = (fieldName) => {
    return getError(fieldName) !== undefined;
  };

  const displayError = (fieldName) => {
    const field = document.querySelector(`#${fieldName}`);
    if (hasError(fieldName)) {
      field.style.border = "1px solid red";

      return <div className="text-danger">{getError(fieldName)}</div>;
    }

    if (field !== null) {
      field.removeAttribute("style");
    }
  };

  const displayErrors = () => {
    return Object.entries(errors).map((error, key) => {
      const [field, message] = error;
      return (
        <li key={key}>
          {field}: {message}
        </li>
      );
    });
  };

  return (
    <div className={"container-fluid w-75 mx-auto my-5"}>
      {isFormSent ? (
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Message send succefully ! </h1>
            <p className="col-md-8 fs-4">
              <a className="btn btn-primary btn-lg" href="." role="button">
                Return to main page
              </a>
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={submitForm} onChange={handleChange}>
          {Object.keys(errors).length > 0 ? (
            <div className="alert alert-danger" role="alert">
              <strong>Errors</strong>
              <ul>{displayErrors()}</ul>
            </div>
          ) : (
            ""
          )}
          <h1>Contact form</h1>
          <hr />
          {/*<-- Name input -->*/}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" className="form-control" ref={name} />
            {displayError("name")}
          </div>

          {/*<-- Email input -->*/}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              ref={email}
            />
            {displayError("email")}
          </div>

          {/*<-- Message input -->*/}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              ref={message}
            ></textarea>
            {displayError("message")}
          </div>

          {/*<-- Checkbox -->*/}
          <div className="form-check mb-4">
            <div className="d-flex">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="acceptAllConditions"
                ref={acceptAllConditions}
              />

              <label className="form-check-label" htmlFor="acceptAllConditions">
                Accept all conditions
              </label>
            </div>
            {displayError("acceptAllConditions")}
          </div>

          {/*<-- Submit -->*/}
          <button
            disabled={!isFormValid}
            type="submit"
            className="btn btn-primary w-100 mb-4"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
