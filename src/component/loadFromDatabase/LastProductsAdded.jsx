import axios from "axios";
import React, { Component } from "react";
import CardComponent from "../products/cardComponent";
//-------------------------------------------

class LastProductsAdded extends Component {
  state = {
    books: [],
  };

  handelLoad = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    axios.get("http://localhost:4000/api/storeroom").then((res) => {
      const books = res.data.data;
      this.setState({ books });
      console.log("Axios_get:", books);
      console.log("state is:", this.state.books);
    });
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="d-flex ">
              {this.state.books.map((u, index) => (
                <div className=" ">
                  <CardComponent
                    key={index}
                    title={u.title}
                    writer={u.writer}
                    explan={u.explan}
                    pric={u.pric}
                  />
                </div>
              ))}
            </div>
            <div className="col-6">
              <button className="btn btn-info mb-3" onClick={this.handelLoad}>
                load
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LastProductsAdded;
