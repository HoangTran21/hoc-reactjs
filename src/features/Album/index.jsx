import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
        id: 1,
        name: 'Hãy trao cho anh',
        img:'/Album/image/htca.jpg'
        },
        {
        id: 2,
        name: 'Nơi này có anh',
        img:'/Album/image/nnca.jpg'
        },
        {
        id: 3,
        name: 'Chạy ngay đi',
        img:'/Album/image/cnd.jpg'
        }
    ]
    
    return (
        <div>
            <h2>Nhạc MTP</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;