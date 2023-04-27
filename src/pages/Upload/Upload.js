// core stuff
import { useState } from 'react';
import axios from 'axios'

// styles, pages 
import './Upload.scss';
import Nav from '../../components/Nav/Nav';
import Buttons from '../../components/Buttons/Buttons'


const Upload = ({ userId }) => {
    const [userIcon, setUserIcon] = useState(null)
    // img handler
    const uploadImg = (e) => {
        setUserIcon(e.target.files[0])
        console.log(e.target.files[0])
    }
    console.log(userId)
    // photo submit func
    const uploadPhoto = (e) => {
        e.preventDefault()
        if (userIcon) {
            const formData = new FormData()
            formData.append('image', userIcon)
            // posted image on cloudinary
            axios.post('http://localhost:8080/upload', formData)
                .then(res => {
                    const imageUrl = res.data.data.image
                    console.log(imageUrl)

                    axios.put('')
                })

                .catch(err => console.log(err))
        } else {
            console.log('no pic')
        }
    }

    return (
        <main className='upload'>
            <Nav />
            <div className='upload__icon-wrapper'>
                {userIcon && <img className='upload__icon'
                    src={URL.createObjectURL(userIcon)}
                    alt={userIcon.name} />}
            </div>

            <form className='upload__form' onSubmit={uploadPhoto}>
                <div className='upload__action'>
                    <label className='upload__label' htmlFor='upload'>Upload</label>
                    <input className='upload__input'
                        type='file'
                        accept='image/png, image/jpeg'
                        name='upload'
                        onChange={uploadImg}
                    />
                </div>

                <div className='upload__btn'>
                    <Buttons name={'buttons'} value={'Done'} />
                </div>
            </form>

        </main>
    )
}

export default Upload