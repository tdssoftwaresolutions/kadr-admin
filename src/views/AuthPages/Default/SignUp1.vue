<template>
  <div>
    <h1 class="mb-0">Sign Up</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <form class="mt-4">
      <div class="form-group">
        <label for="name">Your Full Name</label>
        <input type="email" class="form-control mb-0" id="name" aria-describedby="emailHelp" placeholder="Your Full Name">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control mb-0" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control mb-0" id="password" placeholder="Password">
      </div>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
        </div>
        <button type="submit" class="btn btn-primary float-right">Sign Up</button>
      </div>
      <div class="sign-info">
        <span class="dark-color d-inline-block line-height-2">Already Have Account ? <a href="#">Log In</a></span>
        <ul class="iq-social-media">
          <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
          <li><a href="#"><i class="ri-twitter-line"></i></a></li>
          <li><a href="#"><i class="ri-instagram-line"></i></a></li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignUp1'
}
</script>
