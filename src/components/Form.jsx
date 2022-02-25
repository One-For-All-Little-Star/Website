import React, { Component } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      comment: "",
      loggedIn: false,
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var type = target.type;
    var value = target.value;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    window.emailjs
      .send("little_star", "template_k2fdd5s", {
        from_name: this.state.name,
        message: this.state.comment,
        from_email: this.state.email,
      })
      .then(
        (result) => {
          alert("Cảm ơn bạn đã gửi phản hồi cho chúng tôi");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-9" id="email_form">
                <h4>Liên hệ qua Email</h4>
                <div className="form-block">
                  <label htmlFor="name">Tên *</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <label htmlFor="email">Email *</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <label htmlFor="email">Bình luận *</label>
                  <textarea
                    className="form-control"
                    type="textarea"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <br />
                <div className="form-block">
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={this.onSubmit}
                  >
                    Gửi đi
                  </button>
                </div>
              </div>
              <div className="col-sm-3" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
