
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpstyle } from "../../Styles/SignUpstyle";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleSignup() {
        

        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            email.trim() === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            setMessage("Please fill in all fields.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            setMessage("Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            setMessage("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        if (!agree) {
            setMessage("Please agree to the Terms.");
            return;
        }

        const user = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim()
        };

        localStorage.setItem("user", JSON.stringify(user));

        setMessage("Account created successfully!");

        navigate("/loginpage", {
            state: { email: email.trim() }
        });
    }

    return (
        <div style={SignUpstyle.body}>
            <div style={SignUpstyle.container}>

                <h2 style={SignUpstyle.heading}>
                    Create your account
                </h2>

                <p style={SignUpstyle.Heading1}>
                    Sign up to access the practice dashboard.
                </p>

                <div style={SignUpstyle.box1}>
                    <div style={SignUpstyle.box2}>
                        <label style={SignUpstyle.label}>
                            First name:
                        </label>

                        <input
                            type="text"
                            placeholder="Enter First Name"
                            style={SignUpstyle.input}
                            value={firstName}
                            onChange={(e) =>
                                setFirstName(e.target.value)
                            }
                        />
                    </div>

                    <div style={SignUpstyle.box2}>
                        <label style={SignUpstyle.label}>
                            Last Name:
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            style={SignUpstyle.input}
                            value={lastName}
                            onChange={(e) =>
                                setLastName(e.target.value)
                            }
                        />
                    </div>
                </div>

                <div style={SignUpstyle.box3}>
                    <label style={SignUpstyle.label}>
                        Email Address:
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email address"
                        style={SignUpstyle.mailbox}
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />
                </div>

                <div style={SignUpstyle.box1}>
                    <div style={SignUpstyle.box2}>
                        <label style={SignUpstyle.label}>
                            Password:
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            style={SignUpstyle.input}
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>

                    <div style={SignUpstyle.box2}>
                        <label style={SignUpstyle.label}>
                            Confirm Password:
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={SignUpstyle.input}
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                        />
                    </div>
                </div>

                <p style={SignUpstyle.passwordInfo}>
                    Use at least 8 characters, with
                    <br />
                    letter &amp; number
                </p>

                <div style={SignUpstyle.terms}>
                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) =>
                            setAgree(e.target.checked)
                        }
                        style={SignUpstyle.checkbox}
                    />

                    <label style={SignUpstyle.para}>
                        I agree to the Terms
                    </label>
                </div>

                <button
                    type="button"
                    style={SignUpstyle.button}
                    onClick={handleSignup}
                >
                    Create Account
                </button>

                {message !== "" && (
                    <p style={{ fontSize: "13px" }}>
                        {message}
                    </p>
                )}

                <div style={SignUpstyle.signInContainer}>
                    Already have account?{" "}

                    <Link
                        to="/loginpage"
                        style={SignUpstyle.signInLink}
                    >
                        Sign in
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Signup;