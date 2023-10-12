/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function UserForm() {
  const [fullName, setFullName] = useState("");
  const [isFullNameValid, setIsFullNameValid] = useState(undefined);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(undefined);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(undefined);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState({
    length: null,
    hasNumber: null,
    hasLowercase: null,
    hasUppercase: null,
    hasSpecialChar: null,
  });

  const [step1, setStep1] = useState({
    active: true,
    progress: 0,
    submitted: false,
  });
  const [step2, setStep2] = useState({
    active: false,
    progress: 0,
    submitted: false,
  });

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);

    // Validate and update isFullNameValid as the user types
    const isValid = /^[A-Za-z\s]*$/.test(value) && value.trim() !== "";
    setIsFullNameValid(isValid);
  };

  const handleDateOfBirthChange = (e) => {
    const value = e.target.value;
    setDateOfBirth(value);

    // Validate and update isDateOfBirthValid as the user types
    const currentDate = new Date();
    const birthDate = new Date(value);
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      setIsDateOfBirthValid("below18");
    } else if (age > 60) {
      setIsDateOfBirthValid("above60");
    } else {
      setIsDateOfBirthValid("valid");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate and update isEmailValid as the user types
    const isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
      value
    );
    setIsEmailValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Validate and update isPasswordValid as the user types
    const lengthValid = value.length >= 8 && value.length <= 15;
    const hasNumber = /\d/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()?|,.^/\\+_-]/.test(value);

    setIsPasswordValid({
      length: lengthValid,
      hasNumber: hasNumber,
      hasLowercase: hasLowercase,
      hasUppercase: hasUppercase,
      hasSpecialChar: hasSpecialChar,
    });
  };

  function areAllPasswordCriteriaValid(passwordValidations) {
    let allNull = true;
    for (const key in passwordValidations) {
      if (passwordValidations[key] !== null) {
        allNull = false;
        if (!passwordValidations[key]) {
          return false;
        }
      }
    }
    return allNull ? null : true;
  }

  const handleSubmit = () => {
    if (step1.progress === 50 && step1.active) {
      setStep1({ ...step1, progress: 100, submitted: true });
      setTimeout(() => {
        setStep1({ ...step1, progress: 100, active: false, submitted: true });
        setStep2({ ...step2, active: true });
      }, 2000);
    }

    if (step2.progress === 50 && step2.active) {
      setStep2({ ...step2, progress: 100 });
      setTimeout(() => {
        setStep2({ ...step2, submitted: true, progress: 100, active: false });
      }, 2000);
    }
  };

  useEffect(() => {
    if (step1.active && isFullNameValid && isDateOfBirthValid === "valid") {
      setStep1(({ ...step1, progress: 50 }));
    } else if (
      step1.active &&
      (!isFullNameValid || isDateOfBirthValid !== "valid")
    ) {
      setStep1(({ ...step1, progress: 0 }));
    }

    if (
      step2.active &&
      isEmailValid &&
      areAllPasswordCriteriaValid(isPasswordValid)
    ) {
      setStep2({ ...step2, progress: 50 });
    } else if (
      step2.active &&
      (!isEmailValid || !areAllPasswordCriteriaValid(isPasswordValid))
    ) {
      setStep2({ ...step2, progress: 0 });
    }
  }, [isFullNameValid, isDateOfBirthValid, isEmailValid, isPasswordValid]);

  return (
    <div className="user-form">
      {(step1.active || step2.active) && (
        <div className="user-form__steps">
          <div
            className={
              "user-form__steps--step " + (step1.active ? "active" : "")
            }
          >
            <div className="user-form__steps--step-title">
              <span className="user-form__steps--icon">1</span> Step 1
            </div>
            <div className="user-form__steps--progress">
              <div
                className="user-form__steps--bar"
                style={{ width: `${step1.progress}%` }}
              ></div>
            </div>
          </div>
          <div
            className={
              "user-form__steps--step " + (step2.active ? "active" : "")
            }
          >
            <div className="user-form__steps--step-title">
              <span className="user-form__steps--icon">2</span> Step 2
            </div>
            <div className="user-form__steps--progress">
              <div
                className="user-form__steps--bar"
                style={{ width: `${step2.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <form className="user-form__form">
        {step1.active ? (
          <>
            <div className="user-form__fields--wrapper">
              <div
                className={`user-form__field ${
                  isFullNameValid === false ? "invalid" : ""
                }`}
              >
                <label htmlFor="fullName">Full Name:</label>
                <input
                  className={isFullNameValid === true ? "valid" : ""}
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
                <div className="user-form__errors">
                  {isFullNameValid === true ? (
                    <div className="user-form__valid">Valid Name</div>
                  ) : isFullNameValid === false ? (
                    <div className="user-form__invalid">Invalid Name</div>
                  ) : null}
                </div>
              </div>

              <div
                className={`user-form__field ${
                  isDateOfBirthValid === "below18" ||
                  isDateOfBirthValid === "above60"
                    ? "invalid"
                    : ""
                }`}
              >
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                  className={isDateOfBirthValid === "valid" ? "valid" : ""}
                  type="date"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                />
                <div className="user-form__errors">
                  {isDateOfBirthValid === "below18" && (
                    <div className="user-form__invalid">
                      Minimum age requirements, 18 years old
                    </div>
                  )}
                  {isDateOfBirthValid === "above60" && (
                    <div className="user-form__invalid">
                      Maximum age requirements, 60 years old
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className={
                "user-form__submit--button " +
                (step1.progress === 50 ? "" : "disabled")
              }
              type="button"
            >
              CONTINUE
            </button>
          </>
        ) : (
          step2.active && (
            <>
              <div className="user-form__fields--wrapper">
                <div
                  className={`user-form__field ${
                    isEmailValid === false ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="email">Email:</label>
                  <input
                    className={isEmailValid === true ? "valid" : ""}
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <div className="user-form__errors">
                    {isEmailValid === false && (
                      <div className="user-form__invalid">
                        Please Enter Valid Email
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`user-form__field ${
                    areAllPasswordCriteriaValid(isPasswordValid) === false
                      ? "invalid"
                      : ""
                  }`}
                >
                  <label htmlFor="password">Password:</label>
                  <input
                    className={
                      areAllPasswordCriteriaValid(isPasswordValid) === true
                        ? "valid"
                        : ""
                    }
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <div className="user-form__errors">
                    <div
                      className={
                        isPasswordValid.length === true
                          ? "user-form__valid"
                          : isPasswordValid.length === false
                          ? "user-form__invalid"
                          : ""
                      }
                    >
                      8 - 15 characters
                    </div>
                    <div
                      className={
                        isPasswordValid.hasNumber === true
                          ? "user-form__valid"
                          : isPasswordValid.hasNumber === false
                          ? "user-form__invalid"
                          : ""
                      }
                    >
                      1 or more numbers
                    </div>
                    <div
                      className={
                        isPasswordValid.hasLowercase === true
                          ? "user-form__valid"
                          : isPasswordValid.hasLowercase === false
                          ? "user-form__invalid"
                          : ""
                      }
                    >
                      1 or more lowercase letters
                    </div>
                    <div
                      className={
                        isPasswordValid.hasUppercase === true
                          ? "user-form__valid"
                          : isPasswordValid.hasUppercase === false
                          ? "user-form__invalid"
                          : ""
                      }
                    >
                      1 or more uppercase letters
                    </div>
                    <div
                      className={
                        isPasswordValid.hasSpecialChar === true
                          ? "user-form__valid"
                          : isPasswordValid.hasSpecialChar === false
                          ? "user-form__invalid"
                          : ""
                      }
                    >
                      1 or more special characters (#[]()@$&*!?|,.^/\+_-)
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className={
                  "user-form__submit--button " +
                  (step2.progress === 50 ? "" : "disabled")
                }
                type="button"
              >
                REGISTER NOW
              </button>
            </>
          )
        )}
      </form>
      {step1.submitted && step2.submitted && (
        <div className="user-form__popup">
          <h3 className="user-form__popup--title">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="user-form__popup--title-icon"
            />
            Registration Successful
          </h3>
          <p className="user-form__popup--text">
            <FontAwesomeIcon
              icon={faCaretRight}
              className="user-form__popup--text-icon"
            />
            Thank you for registering for our event with XM. You will receive an
            email shortly with confirmation of your registration.
          </p>
        </div>
      )}
      <p className="user-form__register">
        Don’t have an account?{" "}
        <button className="user-form__register--button" type="button">
          Create one here
        </button>{" "}
        and register for the event
      </p>
      <p className="user-form__terms--conditions">
        Terms and Conditions apply <span>*</span>. To read the full T&Cs, click{" "}
        <a
          href="#terms-and-conditions"
          className="user-form__terms--conditions--link"
        >
          here.
        </a>
      </p>
    </div>
  );
}

export default UserForm;
