// core stuff
import { useNavigate, useParams } from 'react-router-dom'
// styles, pages, components 
import UserSearch from '../SearchBar/UserSearch/UserSearch'
import './UserTab.scss'

const UserTab = ({ allUsers, usersTab, searchUser, searchUserHandle, setUserId }) => {

    // need to find a better way to sort this
    const sortedUsers = allUsers?.sort((a, b) => b.itinerary_count - a.itinerary_count)

    // find filtered user by search result
    const findUserByAuthor = allUsers.filter(person => person.author.toLowerCase().includes(searchUser.toLowerCase()))
    const findByUserName = allUsers.filter(person => person.user_name.toLowerCase().includes(searchUser.toLowerCase()))
    const filteredUser = [...new Set(findByUserName.concat(findUserByAuthor))]

    const navigate = useNavigate()
    const { profileId } = useParams()

    const toUserProfile = (id) => {
        setUserId(id)
        navigate(`/user/${id}`)
    }

    return (
        <div className='userTab' >
            <section className="userTab__tab">

                <div className='userTab__show' style={{ display: usersTab ? 'block' : 'none' }}>
                    <section className='userTab__bar-wrapper'>
                        <UserSearch
                            searchUser={searchUser}
                            searchUserHandle={searchUserHandle} />
                    </section>

                    {!searchUser ?

                        <>
                            <h2 className='userTab__subtitle'>Popular Users</h2>
                            <ul className='userTab__list'>
                                {sortedUsers.map((user, i) => {
                                    return (
                                        <li className='userTab__item' key={i} onClick={() => toUserProfile(user.user_id)}>
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
                                                <span className='userTab__followers'>Followers</span>
                                            </div>
                                        </li>

                                    )
                                })

                                }
                            </ul>
                        </>
                        :
                        <>
                            <h2 className='userTab__subtitle'>{filteredUser?.length > 1 ? `${filteredUser.length} Results` : `${filteredUser.length} Result`}</h2>
                            <ul className='userTab__list'>
                                {filteredUser.map((user, i) => {
                                    return (
                                        <li className='userTab__item' key={i} onClick={() => toUserProfile(user.user_id)}>
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
                                                <span className='userTab__followers'>Followers</span>
                                            </div>
                                        </li>
                                    )
                                })

                                }
                            </ul>
                        </>

                    }
                </div>
            </section >
        </div >
    )
}

export default UserTab