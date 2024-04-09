import Reservation2 from '../assets/images/Reservation2.jpg';

const ReservationToResto = () => {
  return (
    <section className="banner">
      <img src={Reservation2} className="img_home" alt="" />
      <div className='content-resto'>
        <h1 className="banner__quote" tabIndex="0">
          Reservation
          <h3 className="color-subtitle">Reserver une table en ligne</h3>
        </h1>
      </div>
    </section>
  );
};

export default ReservationToResto;
