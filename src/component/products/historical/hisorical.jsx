import CardComponent from "../cardComponent";
import axios from "axios";
import React, { Component } from "react";
class Historical extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/storeroom?category=تاریخی")
      .then((res) => {
        const books = res.data.data;

        this.setState({ books });
        console.log("Axios_get:", books);
        console.log("state is:", this.state.books);
      });
  }
  render() {
    return (
      <>
        {this.state.books.length == 0 && (
          <div className="alert alert-danger text-center">
            <h6>
              هیچ رکوردی در دسته بندی تاریخی یافت نشد ، لطفا از قسمت سامانه
              انبار یک محصول به این دسته بندی اضافه نمایید
            </h6>
          </div>
        )}
        <div className="d-flex">
          {this.state.books.map((u, index) => (
            <CardComponent
              key={index}
              title={u.title}
              writer={u.writer}
              explan={u.explan}
              pric={u.pric}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Historical;
