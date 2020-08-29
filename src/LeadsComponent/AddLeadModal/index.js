import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CustomWrapper, Label } from 'Common/styledComponents';
import { COLORS } from 'Common/theme';
import { saveLeadHelper } from 'NetworkManager/index.js';

const AddLeadModal = ({ refreshLeadsList, status }) => {

    const INITIAL_STASTE = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        location_type: '',
        location: '',

        isFormValid: true,
        isDirty: false,
        isFirstNameValid: true,
        isLastNameValid: true,
        isEmailValid: true,
        isMobileValid: true,
        isLocationTypeValid: true,
        isLocationValid: true,
    };

    const [state, setState] = useState({...INITIAL_STASTE});

    const validateForm = () => {
        const emailPattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
        const mobilePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        const { firstName, lastName, mobile, email, location_type, location, isFormDirty } = state;
        let isFirstNameValid, isLastNameValid, isEmailValid, isMobileValid, isLocationTypeValid, isLocationValid;
        isFirstNameValid = isLastNameValid = isEmailValid = isMobileValid = isLocationTypeValid = isLocationValid = false;
        if (firstName.length >= 3) {
            isFirstNameValid = true;
        }

        if (lastName.length >= 3) {
            isLastNameValid = true;
        }

        if (emailPattern.test(email)) {
            isEmailValid = true;
        }

        if (mobilePattern.test(mobile)) {
            isMobileValid = true;
        }

        if (location_type) {
            isLocationTypeValid = true;
        }


        if (location) {
            isLocationValid = true;
        }

        setState({
            ...state,
            isFormDirty: true,
            isFormValid:  isFirstNameValid && isLastNameValid && isEmailValid && isMobileValid && isLocationTypeValid && isLocationValid && isFormDirty,
            isFirstNameValid,
            isLastNameValid,
            isEmailValid,
            isMobileValid,
            isLocationTypeValid,
            isLocationValid,
        });
    };

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value,
            isFormDirty: true,
        });
    };

    const getLabel = (text) => {
        return (
            <Label color={COLORS.trout} fontSize='14px' fontWeight='600'>
                {text}
                <Label color={COLORS.punch} fontSize='20px'> * </Label>
            </Label>
        )
    };

    const saveLead = async() => {
        const { firstName, lastName, mobile, email, location_type, location } = state;
        const response  = await saveLeadHelper({
            first_name: firstName,
            last_name: lastName,
            mobile: mobile,
            email: email,
            location_type: location_type,
            location_string: location,
        });
        document.getElementById('addleadsmodal').classList.toggle('show')
        document.getElementsByClassName('modal-backdrop')[0].classList.toggle('show');
        if (response.id){
            refreshLeadsList();
        }
    };

    useEffect(() => {
        setState({...INITIAL_STASTE});
    }, [status])

    useEffect(() => {
        if (state.isFormDirty) {
            validateForm();
        }
    }, [state.firstName, state.lastName, state.email, state.mobile, state.location_type, state.location, state.isFormDirty])

    return (
        <div class="modal fade" id="addleadsmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Add Lead</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class='add_lead_form'>

                            <CustomWrapper display='flex'>
                                {/* Left Content */}
                                <CustomWrapper flex='1' width='100%' margin='0px 20px 0px 0px'>
                                    {/* First Name */}
                                    <CustomWrapper margin='10px 0px 0px 0px' height='100px'>
                                        <CustomWrapper class="input-group input-group-sm mb-3">
                                            <CustomWrapper class="input-group-prepend">
                                                {getLabel('First Name')}
                                            </CustomWrapper>
                                            <CustomWrapper>
                                                <input value={state.firstName} id='firstName' name='firstName' onChange={onInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                {!state.isFirstNameValid && <Label color={COLORS.punch}> Enter a valid firstname with min 3 chars </Label> }
                                            </CustomWrapper>
                                        </CustomWrapper>
                                    </CustomWrapper>

                                    {/* Email Address */}
                                    <CustomWrapper margin='10px 0px 0px 0px' height='100px'>
                                        <CustomWrapper class="input-group input-group-sm mb-3">
                                            <CustomWrapper class="input-group-prepend">
                                                {getLabel('Email Address')}
                                            </CustomWrapper>
                                            <CustomWrapper>
                                                <input value={state.email} id='email' name='email' onChange={onInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                            </CustomWrapper>
                                            {!state.isEmailValid && <Label color={COLORS.punch}> Enter valid email </Label> }
                                        </CustomWrapper>
                                    </CustomWrapper>

                                    {/* Location Type */}
                                    <CustomWrapper margin='10px 0px 0px 0px' height='100px'>
                                        <CustomWrapper class="input-group input-group-sm mb-3">
                                            <CustomWrapper class="input-group-prepend">
                                                {getLabel('Location Type')}
                                            </CustomWrapper>
                                            <CustomWrapper>
                                                <select value={state.location_type} class="custom-select" id='location_type' name='location_type' onChange={onInputChange}>
                                                    <option key='location_type-0' value="" selected>Select location type</option>
                                                    <option key='location_type-1' id='City' value="City" onClick={onInputChange}>City</option>
                                                    <option key='location_type-2' id='State' value="State" onClick={onInputChange}>State</option>
                                                    <option key='location_type-3' id='Country' value="Country" onClick={onInputChange}>Country</option>
                                                </select>
                                                {!state.isLocationTypeValid && <Label color={COLORS.punch}> Select valid location type </Label> }
                                            </CustomWrapper>
                                        </CustomWrapper>
                                    </CustomWrapper>

                                </CustomWrapper>

                                {/* Right Content */}
                                <CustomWrapper flex='1'>
                                    {/* First Name */}
                                    <CustomWrapper margin='10px 0px 0px 0px' height='100px'>
                                        <CustomWrapper class="input-group input-group-sm mb-3">
                                            <CustomWrapper class="input-group-prepend">
                                                {getLabel('Last Name')}
                                            </CustomWrapper>
                                            <CustomWrapper>
                                                <input value={state.lastName} id='lastName' name='lastName' onChange={onInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                            </CustomWrapper>
                                            {!state.isLastNameValid && <Label color={COLORS.punch}> Enter a valid lastname with min 3 chars </Label> }
                                        </CustomWrapper>
                                    </CustomWrapper>

                                    {/* Email Address */}
                                    <CustomWrapper margin='10px 0px 0px 0px' height='100px'>
                                        <CustomWrapper class="input-group input-group-sm mb-3">
                                            <CustomWrapper class="input-group-prepend">
                                                {getLabel('Mobile')}
                                            </CustomWrapper>
                                            <CustomWrapper>
                                                <input value={state.mobile} id='mobile' name='mobile' onChange={onInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                            </CustomWrapper>
                                            {!state.isMobileValid && <Label color={COLORS.punch}> Enter valid 10 digit mobile </Label> }
                                        </CustomWrapper>
                                    </CustomWrapper>

                                    {/* Location Type */}
                                    <CustomWrapper margin='10px 0px 0px 0px' height='100px'>
                                        <CustomWrapper class="input-group input-group-sm mb-3">
                                            <CustomWrapper class="input-group-prepend">
                                                {getLabel('Location String')}
                                            </CustomWrapper>
                                            <CustomWrapper>
                                                <input value={state.location} id='location' name='location' onChange={onInputChange} type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                            </CustomWrapper>
                                            {!state.isLocationValid && state.isFormDirty && <Label color={COLORS.punch}> Enter valid location </Label> }
                                        </CustomWrapper>
                                    </CustomWrapper>

                                </CustomWrapper>

                            </CustomWrapper>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button
                            disabled={!state.isFormValid}
                            type="button" class="btn btn-primary add_lead_btn"
                            onClick={saveLead}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddLeadModal.propTypes = {
    refreshLeadsList: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
};

export default AddLeadModal;
