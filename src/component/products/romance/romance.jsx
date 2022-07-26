import CardComponent from "../cardComponent";
import axios from "axios";
import React, { Component } from "react";
class Romance extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/storeroom?category=رمان")
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

export default Romance;
