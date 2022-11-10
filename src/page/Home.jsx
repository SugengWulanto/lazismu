import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Foto1 from "../assets/foto1.png";
import Foto2 from "../assets/foto2.jpeg";
import Foto3 from "../assets/foto3.jpeg";
import Foto4 from "../assets/foto4.png";
import Foto5 from "../assets/foto5.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = null;
  constructor(props) {
    super(props);
    this.state = {
      listBerita: [],
    };
  }
  componentDidMount() {
    this.onFetchListBerita();
  }
  async onFetchListBerita() {
    const res = await axios.get("https://lazimu.herokuapp.com/berita");
    this.setState((state) => (state.listBerita = res.data.content));
  }
  render() {
    return (
      <>
        <div className="pembungkusAtas">
          <Carousel className="carousel">
            <Carousel.Item>
              <img className="d-block w-100" src={Foto1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto5} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <p className="text-ekonomi">Program Kami</p>
          <p className="text-lorem1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id atque
            vel nam soluta sit debitis quae quo ad, laudantium incidunt quas
            culpa earum quaerat dolores impedit deleniti, doloribus nobis
            nostrum!.
          </p>
          <div className="ekonomi">
            <div className="mx-1 w-30">
              <p className="text-bold">Ekonomi</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                atque vel nam soluta sit debitis quae quo ad, laudantium
                incidunt quas culpa earum quaerat dolores impedit deleniti,
                doloribus nobis nostrum!.
              </p>
            </div>
            <div className="mx-1 w-30">
              <p className="text-bold">Sosial</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                atque vel nam soluta sit debitis quae quo ad, laudantium
                incidunt quas culpa earum quaerat dolores impedit deleniti,
                doloribus nobis nostrum!.
              </p>
            </div>
            <div className="mx-1 w-30">
              <p className="text-bold">pendidikan</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                atque vel nam soluta sit debitis quae quo ad, laudantium
                incidunt quas culpa earum quaerat dolores impedit deleniti,
                doloribus nobis nostrum!.
              </p>
            </div>
          </div>
          <div className="berita">
            <p className="text-berita">Berita</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id atque
              vel nam soluta sit debitis quae quo ad, laudantium incidunt quas
              culpa earum quaerat dolores impedit deleniti, doloribus nobis
              nostrum!.
            </p>
          </div>
          <Carousel className="carousel">
            <Carousel.Item>
              <img className="d-block w-100" src={Foto1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Foto5} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <div className="display">
            {this.state.listBerita.map((item, idx) => (
              <Link to={"/donasi/" + item.id} key={idx} className="link">
                <div className="img-flex">
                  <img src={item.image} alt="foto" className="image" />
                  <p className="boldImage">{item.judul}</p>
                  <div>
                    <p>{item.kategoriId.kategoriName}</p>
                    <p>{item.createdDate}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}
