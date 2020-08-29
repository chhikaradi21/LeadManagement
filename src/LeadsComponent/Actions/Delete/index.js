import React from 'react';
import PropTypes from 'prop-types';

const DeleteLead = ({ setSelectedLeads }) => {
    return (
        <button 
            type="button"
            class="btn btn-danger btn-sm delete_lead_modal_btn"
            data-toggle="modal"
            data-target="#deleteleadsmodal"
            onClick={setSelectedLeads}
        > Delete </button>
    );
};

DeleteLead.propTypes = {
    setSelectedLeads: PropTypes.func.isRequired,
};

export default DeleteLead;