import CardComponent from "../cardComponent";
import axios from "axios";
import React, { Component } from "react";
class Poetry extends Component {
  state = {
    books: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/storeroom?category=شعر")
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

export default Poetry;
