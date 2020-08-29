import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CustomWrapper, Label } from 'Common/styledComponents';
import { COLORS } from 'Common/theme';
import { updateLeadHelper } from 'NetworkManager/index.js';

const UpdateLeadModal = ({ refreshLeadsList, selectedLeadToUpdate }) => {
    const [state, setState] = useState({
        communication: '',
    });

    const onInputChange = (event) => {
        const { value } = event.target;
        setState({
            ...state,
            communication: value,
        });
    };

    const updateLead = async () => {
        const { communication } = state;
        await updateLeadHelper({
            communication,
            id: selectedLeadToUpdate.id,
        });
        document.getElementById('updateleadsmodal').classList.toggle('show')
        document.getElementsByClassName('modal-backdrop')[0].classList.toggle('show');
        refreshLeadsList();
    };

    useEffect(() => {
        setState({communication: selectedLeadToUpdate.communication});
    }, [selectedLeadToUpdate.communication])

    return (
        <div class="modal fade" id="updateleadsmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Add Lead</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class='update_lead_form'>
                            <CustomWrapper margin='10px 0px 0px 0px'>
                                <CustomWrapper class="input-group input-group-sm mb-3">
                                    <CustomWrapper class="input-group-prepend">
                                        <Label color={COLORS.trout} fontSize='14px' fontWeight='600'> Communication </Label>
                                    </CustomWrapper>
                                    <CustomWrapper>
                                        <textarea id='communication' name='communication' onChange={onInputChange} value={state.communication}
                                             class="form-control" rows="5"></textarea>
                                    </CustomWrapper>
                                </CustomWrapper>
                            </CustomWrapper>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary update_lead_btn" onClick={updateLead}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpdateLeadModal.propTypes = {
    refreshLeadsList: PropTypes.func.isRequired,
    selectedLeadToUpdate: PropTypes.shape({
        id: PropTypes.number.isRequired,
        communication: PropTypes.string.isRequired,
    }),
};

export default UpdateLeadModal;
