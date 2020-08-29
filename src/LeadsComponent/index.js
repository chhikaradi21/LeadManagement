import React, { useEffect, useState } from 'react';

import LeadsTable from './LeadsTable/';
import { CustomWrapper } from 'Common/styledComponents';
import { getLeadsHelper } from 'NetworkManager/index.js';
import AddLead from './AddLead/';
import AddLeadModal from './AddLeadModal/';
import UpdateLeadModal from './UpdateLeadModal/';
import DeleteLeadModal from './DeleteLeadModal/';

const LeadsComponent = () => {
    const [leadsArr, setLeads] = useState([]);
    const [selectedLeadToUpdate, setSelectedLeads] = useState({
        id: '',
        communication: '',
    });
    const [addLeadModalStatus, setAddLeadModalStatus] = useState(false);

    const refreshLeadsList = async () => {
        const leads = await getLeadsHelper();
        setLeads(leads);
    };

    useEffect(() => {
        refreshLeadsList();
    }, []);

    return (
        <CustomWrapper width='90%'>
            <CustomWrapper margin='0px 0px 30px 0px'>
                <AddLead setStatus={setAddLeadModalStatus} status={addLeadModalStatus} />
            </CustomWrapper>
            <CustomWrapper width='100%'>
                <LeadsTable leads={leadsArr} setSelectedLeads={setSelectedLeads} />
            </CustomWrapper>
            <AddLeadModal refreshLeadsList={refreshLeadsList} status={addLeadModalStatus} />
            <UpdateLeadModal refreshLeadsList={refreshLeadsList} selectedLeadToUpdate={selectedLeadToUpdate} />
            <DeleteLeadModal refreshLeadsList={refreshLeadsList} id={selectedLeadToUpdate.id} />
        </CustomWrapper>
    );
};

export default LeadsComponent;
