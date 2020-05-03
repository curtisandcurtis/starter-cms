import React from "react";
import ReactMarkdown from "react-markdown";
const Footer = ({
  body,
  facebooklink,
  primarycolour,
  secondarycolour,
  highcontrast,
  footerbackground,
  companyname,
  instagramlink,
}) => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div
        className="jumbotron jumbotron-fluid"
        id="contact"
        style={{
          backgroundImage: `url(${
            footerbackground && !!footerbackground.childImageSharp
              ? footerbackground.childImageSharp.fluid.src
              : footerbackground
          })`,
        }}
      >
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-md-6 text-white">
            <h2 class="font-weight-bold">Contact Us</h2>
              <ReactMarkdown source={body} style={{ color: highcontrast ? 'white' : primarycolour }} />
            </div>
            <div className="col-md-6">
              <form
                name="contact"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                className="form-content"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name" style={{ color: highcontrast ? 'white' : primarycolour }}>
                      Your Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      style={{ border: `1px solid ` + (highcontrast ? 'white' : primarycolour) }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="Email" style={{ color: highcontrast ? 'white' : primarycolour }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      style={{ border: `1px solid ` + (highcontrast ? 'white' : primarycolour) }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" style={{ color: highcontrast ? 'white' : primarycolour }}>
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    style={{ border: `1px solid ` + (highcontrast ? 'white' : primarycolour) }}
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3"
                  style={{ background: secondarycolour }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="jumbotron jumbotron-fluid"
        id="copyright"
        style={{ background: secondarycolour }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
              Copyright © {companyname}.
            </div>
            <div
              className="col-md-6 align-self-center text-center text-md-right my-2"
              id="social-media"
            >
              <a
                href={facebooklink}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block text-center ml-2"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a
                href={instagramlink}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block text-center ml-2"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
