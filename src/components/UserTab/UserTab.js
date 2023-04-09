// core stuff
// styles, pages, components 
import UserSearch from '../SearchBar/UserSearch/UserSearch'
import './UserTab.scss'
import fake from '../../assets/images/plan3.jpg'

const UserTab = ({ allUsers, usersTab }) => {

    // need to find a better way to sort this
    const sortedUsers = allUsers?.sort((a, b) => b.itinerary_count - a.itinerary_count)

    return (
        <div className='userTab' >
            <section className="userTab__tab">

                <div className='userTab__show' style={{ display: usersTab ? 'block' : 'none' }}>
                    <section className='userTab__bar-wrapper'>
                        <UserSearch />
                    </section>

                    <h2 className='userTab__subtitle'>Popular Users</h2>

                    <ul className='userTab__list'>
                        {sortedUsers.map((user, i) => {
                            return (
                                <li className='userTab__item' key={i}>
                                    <div className='userTab__left'>
                                        <div className='userTab__icon-wrapper'>
                                            <img src={user.user_icon} alt='user image' className='userTab__icon' />
                                        </div>

                                        <ul className='userTab__user-info'>
                                            <li className='userTab__username'> @{user.user_name}</li>
                                            <li className='userTab__author'>{user.author}</li>
                                            <li className='userTab__total'>Itineraries: {user.itinerary_count}</li>
                                        </ul>
                                    </div>

                                    <div className='userTab__right'>
                                        <h3 className='userTab__count'>{user.followers}</h3>
                                        <span className='userTab__followers'>followers</span>
                                    </div>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </section >
        </div>
    )
}

export default UserTab