import axios from "axios";
import React, { Component } from "react";
import CardComponent from "../products/cardComponent";

class EditProducts extends Component {
  state = {
    bookName: "",
    books: [],
    msg: [],
  };
  handelChange = (e) => {
    const bookName = e.currentTarget;
    this.setState({ bookName });
  };
  handelFind = (e) => {
    e.preventDefault();
    const bookName = this.state.bookName.value;

    axios
      .get(`http://localhost:4000/api/storeroom/edit?title=${bookName}`)
      .then((res) => {
        this.setState({ books: [res.data.data] });
        this.setState({ msg: "منظور شما این کتاب بود ؟ " });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ msg: "کتاب مورد نظر یافت نشد" });
        this.setState({ books: [""] });
      });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-3">
              <div className="form-group">
                <span>ویرایش محصولات</span>
                <div className="form-control">
                  <label htmlFor="inputName"> نام کتاب</label>
                  <input
                    className="form-control"
                    type="text "
                    name=""
                    id="inputName"
                    onChange={this.handelChange}
                    value={this.bookName}
                  />
                  <button onClick={this.handelFind} className="btn  btn-info ">
                    پیداش کن
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <span> {this.state.msg}</span>
              {this.state.books != "" &&
                this.state.books.map((u, index) => (
                  <CardComponent
                    key={index}
                    title={u.title}
                    writer={u.writer}
                    explan={u.explan}
                    pric={u.pric}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditProducts;
