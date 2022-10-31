function Login() {
  return (
    <div className="App-login">
      <form action="/post/register" method="POST">
      <h3>Register</h3>
        <label>Username</label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <input type="submit" id="login" value="Login"/>
      </form>
      <p>Don't have an account?</p>
      <a id="register" className="btn" href="/get/register">Register here!</a>
    </div>
  );
}

export default Login