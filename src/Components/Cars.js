import React from 'react';

function Cars(props) {
    const car = props.cars
    return (
        <section className="container">
            <section className="cars">
                <header className="row">
                    <div className="car">
                        <h2>
                            {car.make} {car.model}
                        </h2>
                        <h2>
                            £{car.price}
                        </h2>
                    </div>
                </header>
                <img src="https://image.shutterstock.com/z/stock-photo-a-beautiful-green-and-red-aurora-dancing-over-the-hills-1068442454.jpg" alt="holidayImage"/> 
                <section className="information">
                    <div className="info">
                        {car.manufacture_year} {car.body_type} {car.trim} {car.door_count} {car.transmission} {car.engine_size_litres}<span className="arrow"></span>
                    </div>
                </section>
            </section>
            <section className="moreInfo" id="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper dui quis ante mattis laoreet. Etiam justo libero, commodo vel lectus ac,
                mollis blandit turpis. Ut varius nunc non erat tincidunt, vel faucibus tortor maximus. Fusce ac tincidunt dolor.
                <button className="bookNow">BOOK NOW</button>
            </section>
        </section>
    )
}  

export default Cars;