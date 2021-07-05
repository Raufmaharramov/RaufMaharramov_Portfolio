import React from "react";
import author from "../Img/author.jpg";

const Aboutme = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique odit dolore maiores eum quisquam aliquid tempora. Dolorum nisi expedita magni tempore voluptas quod enim, sed eius provident aliquam velit quasi? Placeat maiores quis laudantium qui rerum. Beatae aut repellendus ex corporis a hic consequuntur nostrum quos inventore doloremque, excepturi ut optio rerum quis saepe aliquam blanditiis, tempore tenetur quaerat voluptatem? Sapiente, magni? Deserunt consequatur eum quaerat dolores vero optio at ea officia, fuga eius libero totam illo enim modi minima eligendi fugit sapiente earum veritatis atque ad deleniti quidem voluptatibus. Aperiam excepturi facere labore dolores eligendi iste suscipit dolor et laudantium sequi ullam ipsa nihil, eaque doloremque asperiores, temporibus quos dicta numquam sed dolore nostrum modi eum, ipsum consectetur. Natus.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
