import React from 'react';
import PropTypes from 'prop-types';

import { CustomWrapper } from 'Common/styledComponents';

import DeleteLead from '../Actions/Delete/';
import MarkUpdate from '../Actions/MarkUpdate/';

const LeadsTable = ({ leads, setSelectedLeads }) => {

    const rowGenerator = (items) => {
        return (
            items.map((item, index) => {
                return <tr key={`leads-table-rows-${index}`}>
                        <td key={`leads-table-data-name-${index}`}>{`${item.first_name} ${item.last_name}`}</td>
                        <td key={`leads-table-data-email-${index}`}>{item.email}</td>
                        <td key={`leads-table-data-mobile-${index}`}>{item.mobile}</td>
                        <td key={`leads-table-data-location_type-${index}`}>{item.location_type}</td>
                        <td key={`leads-table-data-location_string-${index}`}>{item.location_string}</td>
                        <td key={`leads-table-data-actions-${index}`}>
                            <CustomWrapper display='flex' width='200px'>
                                <CustomWrapper margin='0px 10px 0px 0px' width='100px' >
                                    <MarkUpdate setSelectedLeads={() => setSelectedLeads({id: item.id, communication: item.communication})} />
                                </CustomWrapper>
                                <CustomWrapper width='100px'>
                                    <DeleteLead setSelectedLeads={() => setSelectedLeads({id: item.id, communication: item.communication})} />
                                </CustomWrapper>
                            </CustomWrapper>
                        </td>
                    </tr>
            })
        )
    };

    return (
        <table class="table table-bordered leads_table">
            <thead class="thead-dark">
                <tr key={`leads-table-rows-${0}`}>
                    <th scope="col" key='name' name='name'>Name</th>
                    <th scope="col" key='email' name='email'>Email</th>
                    <th scope="col" key='mobile' name='mobile'>Mobile Num</th>
                    <th scope="col" key='locationtype' name='locationtype'>Location Type</th>
                    <th scope="col" key='locationstring' name='locationstring'>Location String</th>
                    <th scope="col" key='action' name='action'>Action</th>
                </tr>
            </thead>
            <tbody>
                {rowGenerator(leads)}
            </tbody>
        </table>
    );
};

LeadsTable.propTypes = {
    leads: PropTypes.arrayOf(PropTypes.shape({
        communication: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        last_name: PropTypes.string.isRequired,
        location_string: PropTypes.string.isRequired,
        location_type: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
    })),
    setSelectedLeads: PropTypes.func.isRequired,
};

export default LeadsTable;