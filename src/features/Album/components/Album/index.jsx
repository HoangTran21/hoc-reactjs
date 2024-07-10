import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

function Album({album}) {
    return (
        <div className='album'>
            <div class="album_thumnail">
                <img src={album.img} alt={album.title} />
            </div>
            <p className="album_title">{album.title}</p>
        </div>
    );
}

export default Album;