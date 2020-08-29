import React from 'react';
import PropTypes from 'prop-types';

const AddLead = ({ status, setStatus }) => {
    return (
        <button 
            type="button"
            class="btn btn-primary add_lead_modal_btn"
            data-toggle="modal"
            data-target="#addleadsmodal" 
            onClick={() => setStatus(!status)}
        > Add Lead </button>
    );
};

AddLead.propTypes = {
    status: PropTypes.bool.isRequired,
    setStatus: PropTypes.func.isRequired,
};

export default AddLead;