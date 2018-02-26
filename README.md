# Demo

Live Demo at: https://chat-me-now.com


## Deployment Info
* Built using React/Redux and Elixir/Phoenix 
* Hosted on AWS on a EC2 instance with a RDS instance hosting Postgres
* S3 and Cloudfront asset hosting.
* LetsEncrypt Cert on Nginx
  
  
## Application Info
* Supports websockets and long polling
* Responsive styling for desktop browsers (IE11, IE Edge, Chrome, Firefox)
* Didn't have access to a Mac so Safari on OS X and iOS has not been tested.
* Didn't have access to an Android device, so mobile chrome has not been tested

* Includes session auth via facebook OAuth
* Session and websocket Auth via jwt token

* React/Redux, Webpack, NodeJS, SASS, HTML5/CSS3, Websockets, Babel, ecmascript 2016
* Used industry suggested HTTP Security headers, encrypted/signed session cookie store, and CSRF protection for XSS

## Open Source Contributions
In the process of building this demo I made a few small open source contributions to some of the elixir packages I used.


https://github.com/ueberauth/ueberauth_facebook/pull/40

https://github.com/khusnetdinov/phoenix_gon/pull/15

https://github.com/khusnetdinov/phoenix_gon/pull/8



