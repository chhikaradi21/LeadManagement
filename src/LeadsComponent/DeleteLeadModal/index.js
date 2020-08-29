import React from 'react';
import PropTypes from 'prop-types';

import { CustomWrapper } from 'Common/styledComponents';
import { deleteLeadHelper } from 'NetworkManager/index.js';

const DeleteLeadModal = ({ id, refreshLeadsList }) => {
    const deleteLead = async() => {
        await deleteLeadHelper(id);
        document.getElementById('deleteleadsmodal').classList.toggle('show')
        document.getElementsByClassName('modal-backdrop')[0].classList.toggle('show');
        refreshLeadsList();
    };

    return (
        <div class="modal fade delete_lead_form" id="deleteleadsmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Do you wish to delete this lead?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                
                    <div class="modal-footer">
                        <form class='delete_lead_form'>
                            <CustomWrapper display='flex' justifyContent='flex-end'>
                                <CustomWrapper margin='0pc 10px 0px 0px'>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                </CustomWrapper>
                                <CustomWrapper>
                                    <button type="button" class="btn btn-danger delete_lead_btn" onClick={deleteLead}>Delete</button>
                                </CustomWrapper>
                            </CustomWrapper>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

DeleteLeadModal.propTypes = {
    refreshLeadsList: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default DeleteLeadModal;
