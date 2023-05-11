import './UserSearch.scss'
import OtherFormIn from '../../OtherFormIn/OtherFormIn'
import search from '../../../assets/icons/isearch.png'

const UserSearch = ({ searchUser, searchUserHandle }) => {

    const seachProfile = () => {
        console.log('clicked')
    }

    return (
        <div className="userSearch">
            <OtherFormIn
                name={'searchUser'}
                type={'text'}
                value={searchUser}
                placeholder={'Search username or name...'}
                onchange={searchUserHandle} />
            <img src={search}
                alt='search icon'
                className='userSearch__icon'
                onClick={seachProfile} />
        </div>
    )

}

export default UserSearch