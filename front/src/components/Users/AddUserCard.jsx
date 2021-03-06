/* eslint-disable object-curly-newline */
import React from 'react';
import PropsType from 'prop-types';
import Image from 'react-bootstrap/Image';
import { CardWrapper, CardFooter, ImageWrapper } from './styles';

export const AddUserCard = React.forwardRef(({ onClick }, ref) => (
  <CardWrapper clickable ref={ref} onClick={onClick}>
    <div className="h-75 d-flex flex-column align-items-center justify-content-center">
      <ImageWrapper disabled>
        <Image style={{ height: '92px' }} src="src/assets/images/add.svg" rounded />
      </ImageWrapper>
      <p style={{ color: '#B1B1B1', marginTop: '15px' }}>Add collaborator</p>
    </div>
    <CardFooter disabled>
      <div className="d-flex flex-column justify-content-center text-white px-3">
        <p style={{ backgroundColor: '#B1B1B1', color: '#B1B1B1', borderRadius: '10px', width: '80px', minHeight: '20px', marginBottom: '5px' }} />
        <p style={{ backgroundColor: '#B1B1B1', color: '#B1B1B1', borderRadius: '10px', width: '110px', minHeight: '20px' }} className="p-0" />
      </div>
      <div className="w-100 d-flex flex-column justify-content-center text-white">
        <p style={{ backgroundColor: '#B1B1B1', color: '#B1B1B1', borderRadius: '10px', width: '50px', minHeight: '20px', marginBottom: '5px' }} />
        <div className="d-flex justify-content-around">
          <p style={{ backgroundColor: '#B1B1B1', color: '#B1B1B1', borderRadius: '50px', width: '22px', minHeight: '22px' }} className="rounded-circle" />
          <p style={{ backgroundColor: '#B1B1B1', color: '#B1B1B1', borderRadius: '50px', width: '22px', minHeight: '22px' }} className="rounded-circle" />
          <p style={{ backgroundColor: '#B1B1B1', color: '#B1B1B1', borderRadius: '50px', width: '22px', minHeight: '22px' }} className="rounded-circle" />
          <p style={{ backgroundColor: '#B1B1B1', color: '#B1B1B1', borderRadius: '50px', width: '22px', minHeight: '22px' }} className="rounded-circle" />
        </div>
      </div>
    </CardFooter>
  </CardWrapper>
));

AddUserCard.propTypes = {
  onClick: PropsType.func.isRequired,
};
