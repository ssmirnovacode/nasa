import React, { Component } from 'react';
import './image-type-select.scss';
import { connect } from 'react-redux';
import { setImageType } from '../../redux/actions/imagesActions';
import { Form } from 'react-bootstrap';

class ImageTypeSelect extends Component {

    handleChange = (e) => {
        this.props.setImageType(e.target.value);
        console.log(`Image type set to ${e.target.value}`)
    }

    render() {

        return(
            <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                <option value={'natural'}>Select image type</option>
                <option value="natural">Natural</option>
                <option value="enhanced">Enhanced</option>
            </Form.Select>
        )
    }
};

const mapStateToProps = state => ({
    imageType: state.images.imageType
});

const mapDispatchToProps = {
    setImageType
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageTypeSelect);