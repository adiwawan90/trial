import React from 'react';
import Modal from '../../components/Modal';

const MoviesPoster = ({ data }) => {
  return (
    <div className="relative">
      <figure className="item-image">
        <img
          src={data}
          alt={data}
          className="w-20 h-32 cursor-pointer mr-2 object-cover"
        />
      </figure>
      <Modal content={(toggle) => <img src={data} alt={data} />}>
        {(toggle) => <span onClick={toggle} className="link-wrapped"></span>}
      </Modal>
    </div>
  );
};

export default MoviesPoster;
