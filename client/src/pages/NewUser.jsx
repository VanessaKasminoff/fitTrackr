import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    navigate("/Home");
  }

  return (
    <div className="bgcontainer">
      <div className="container">
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-apple"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              id="firstName"
              name="firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              id="lastName"
              name="lastName"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              id="email"
              name="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id="password"
              name="password"
              required
            />
            <div className="dropdown">
              <label
                htmlFor="dropdown"
                className="dropdown-btn"
                onClick={toggleDropdown}
              >
                <span className="gender">Gender</span>
                <span className="arrow"></span>
              </label>
              <input
                type="checkbox"
                id="dropdown"
                checked={isDropdownOpen}
                onChange={toggleDropdown}
                required
              />
              {isDropdownOpen && (
                <ul className="dropdown-content">
                  <li>
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={user.gender === "male"}
                      onChange={(e) =>
                        setUser({ ...user, gender: e.target.value })
                      }
                    />
                  </li>
                  <li>
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={user.gender === "female"}
                      onChange={(e) =>
                        setUser({ ...user, gender: e.target.value })
                      }
                    />
                  </li>
                  <li>
                    <label htmlFor="non-binary">Non-Binary</label>
                    <input
                      type="radio"
                      name="gender"
                      id="non-binary"
                      value="non-binary"
                      checked={user.gender === "non-binary"}
                      onChange={(e) =>
                        setUser({ ...user, gender: e.target.value })
                      }
                    />
                  </li>
                </ul>
              )}
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
