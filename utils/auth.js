/**
 * @withAuth
 * a middleware function that checks 
 * if a user is authenticated.
 */
const withAuth = (req, res, next) => {
    //  if user is not authenticated
    if (!req.session.logged_in) {
      // redirect to the login page
      res.redirect('/login');
    } 
    // else if user is authenticated
    else {
      // proceed to the next middleware function
      next();
    }
  };
  
  // export the function
  module.exports = withAuth;