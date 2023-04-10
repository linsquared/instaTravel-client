import './Itinerary.scss';
import Nav from '../../components/Nav/Nav';
import fake from '../../assets/images/plan3.jpg'
import star from '../../assets/icons/star.png'
import like from '../../assets/icons/fullHearted.png'
import share from '../../assets/icons/share.png'
import days from '../../assets/icons/sun.png'
import money from '../../assets/icons/moneyBag.png'

const Itinerary = () => {
    return (
        <main className='itinerary'>
            <header className='itinerary__header'>
                <Nav />
                {/* <div><img src='' alt='back icon' /></div> */}
            </header>
            <section className='itinerary__main'>
                <section className='itinerary__img-wrapper'>
                    <img src={fake} alt='city pic' className='itinerary__city-img' />
                </section>

                <ul className='itinerary__list'>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={like} alt='like icon' className='itinerary__icon' />
                        </div>
                        <h6 className='itinerary__icon-text'>255</h6>
                    </li>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={money} alt='money icon' className='itinerary__icon' /></div>
                        <h6 className='itinerary__icon-text'>$$</h6>
                    </li>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={days} alt='sun icon' className='itinerary__icon' /></div>
                        <h6 className='itinerary__icon-text'>5 days</h6>
                    </li>
                    <li className='itinerary__icon-item'>
                        <div className='itinerary__icon-wrapper'>
                            <img src={share} alt='share icon' className='itinerary__icon' /></div>
                        <h6 className='itinerary__icon-text'>Share</h6>
                    </li>
                </ul>

                <section className='itinerary__basic-info'>
                    <div className='itinerary__basic-top'>
                        <h1 className='itinerary__city'>Milan, Italy</h1>
                        <div className='itinerary__star-wrapper'>
                            <img src={star} alt='star icon' className='itinerary__icon--star' />
                            <span className='itinerary__star-text'>4.7</span>
                        </div>
                    </div>

                    <section className='itinerary__user-info'>
                        <div className='itinerary__user-wrapper'>
                            <img src={fake} alt='user icon' className='itinerary__icon--user' />
                        </div>
                        <div className='itinerary__user'>
                            <h6 className='itinerary__username'>User Name</h6>
                            <h6 className='itinerary__date'>March 12, 2022</h6>
                        </div>

                        <h3 className='itinerary__city-subtitle'> Description</h3>
                        <p className='itinerary__city-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper libero at turpis vestibulum mollis. Nam fermentum sem sit amet sapien sodales euismod. Nulla vel nisl eget mauris auctor vulputate sed sit amet mauris. Donec vel tortor eget quam lobortis commodo nec vitae ex. Quisque auctor elit sapien, vel mollis ex convallis sed. Morbi fermentum ultrices magna vitae aliquam. Aenean dignissim imperdiet lacus sed tincidunt. Nullam convallis velit sit amet aliquam dapibus.  </p>
                    </section>
                </section>

                <article className='itinerary__day-card'>
                    <h2 className='itinerary__day-title'>Day 1</h2>

                    <div className='itinerary__activity-card'>
                        <div className='itinerary__sight'>
                            <h4 className='itinerary__sight-location'>Chicago Bean</h4>
                            <h6 className='itinerary__sight-type'>Activity type:
                                <span className='itinerary__sight-details'> Parks</span></h6>
                            <h6 className='itinerary__sight-cost'>Cost:
                                <span className='itinerary__sight-details'> Free</span></h6>
                        </div>
                        <div className='itinerary__sight-imgWrapper'>
                            <img className='itinerary__sight-img' src={fake} alt='tour sight image' />
                        </div>
                        <div className='itinerary__sight-text'>
                            <h3 className='itinerary__sight-subtitle'>Description:</h3>
                            <p className='itinerary__sight-description'> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque dapibus auctor ultrices. Vivamus euismod libero vel ex rutrum, sit amet ullamcorper ante vestibulum. Nunc ac nisi sed velit hendrerit pharetra. Vivamus tempor blandit sapien, in finibus massa iaculis at. Integer quis congue odio.</p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Itinerary