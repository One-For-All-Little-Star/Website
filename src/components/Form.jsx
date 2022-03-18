import React, { Component } from "react";
import "../styles/contact.css";
import swal from "sweetalert";
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
          swal(
            "Good job!",
            "Cảm ơn bạn đã gửi phản hồi cho chúng tôi!",
            "success"
          );
        },
        (error) => {
          swal("Xảy ra lỗi gửi không thành công!");
        }
      );
  };
  render() {
    return (
      <div className="container" id="email">
        <form className="beta-form-checkout" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-9" id="bg_email">
              <p></p>
              <div className="form-block" id="first-block">
                <label htmlFor="name" className="label-form">
                  Tên <span className="star-form">*</span>
                </label>
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
                <label htmlFor="email" className="label-form">
                  Email <span className="star-form">*</span>
                </label>
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
                <label htmlFor="email" className="label-form">
                  Bình luận <span className="star-form">*</span>
                </label>
                <textarea
                  className="form-control"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.onChange}
                  required
                />
              </div>
              <br />
              <div className="form-block" id="block-btn">
                <button className="btn_submit btn_contact" type="submit">
                  Gửi đi
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
