import React from 'react';
import PropTypes from 'prop-types';

const MarkUpdate = ({ setSelectedLeads }) => {
    return (
        <button 
            type="button"
            class="btn btn-warning btn-sm update_lead_modal_btn"
            data-toggle="modal"
            data-target="#updateleadsmodal"
            onClick={setSelectedLeads}
        > Update Lead </button>
    );

};

MarkUpdate.propTypes = {
    setSelectedLeads: PropTypes.func.isRequired,
};

export default MarkUpdate;