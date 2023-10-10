import img1 from '../../assets/images/img1-min.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <img src={img1} className="img_home" alt="" />
      <h1 className="banner__quote" tabIndex="0">
        Best Ristorante Food Since 2000
      </h1>
    </section>
  );
};
export default Banner;
