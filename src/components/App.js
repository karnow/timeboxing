import React from "react";
import { connect } from "react-redux";
import { deleteFinishTimeboxes } from "../actions";
import { getFinishedTimboxes } from "../reducers";
import LoginForm from "./LoginForm";
import AuthenticationApi from "../api/FakeAuthenticationApi";
import AuthenticationContext from "../contexts/AuthenticationContext";
import LogoutContext from "../contexts/LogoutContext";
const AuthentiactedApp =
  React.lazy(() =>
    import(
      "./AuthentiactedApp"
    )
  );

class App extends React.Component {
  state = {
    accessToken: null,
    previousLoginAttemptFailed: false,
  };

  componentDidMount() {
    const currentToken =
      localStorage.getItem(
        "userTimebox"
      );
    console.log(currentToken);
    this.setState({
      accessToken:
        currentToken,
    });
  }

  isUserLoggedIn = () => {
    return this.state
      .accessToken;
  };

  handleLogout = () => {
    localStorage.removeItem(
      "userTimebox"
    );

    this.setState({
      accessToken: null,
      previousLoginAttemptFailed: false,
    });
    console.log(
      this.state.accessToken
    );
    this.props.deleteFinishTime();
  };

  handleLoginAttempt = (
    credentials
  ) => {
    console.log(credentials);
    AuthenticationApi.login(
      credentials
    )
      .then(
        ({ accessToken }) => {
          console.log(
            accessToken
          );

          localStorage.setItem(
            "userTimebox",
            accessToken
          );

          this.setState({
            accessToken:
              accessToken,
            previousLoginAttemptFailed: false,
          });
        }
      )
      .catch(() => {
        this.setState({
          previousLoginAttemptFailed: true,
        });
      });
  };

  render() {
    return (
      <div className="App">
        {this.isUserLoggedIn() ? (
          <AuthenticationContext.Provider
            value={{
              accessToken:
                this.state
                  .accessToken,
            }}
          >
            <LogoutContext.Provider
              value={{
                Logout:
                  this
                    .handleLogout,
              }}
            >
              <React.Suspense
                fallback={
                  "...loading"
                }
              >
                <AuthentiactedApp />
              </React.Suspense>
            </LogoutContext.Provider>
          </AuthenticationContext.Provider>
        ) : (
          <LoginForm
            errorMessage={
              this.state
                .previousLoginAttemptFailed
                ? "Nie udało się zalogować"
                : null
            }
            onLoginAttempt={
              this
                .handleLoginAttempt
            }
          />
        )}
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch
) {
  const deleteFinishTime =
    () => {
      dispatch(
        deleteFinishTimeboxes()
      );
    };

  return { deleteFinishTime };
}

export default connect(
  (state) => ({
    timeboxesFinished:
      getFinishedTimboxes(
        state
      ),
  }),
  mapDispatchToProps
)(App);
