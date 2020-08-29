import { BASE_CONFIG } from './config';

const contentType = { 'Content-Type': 'application/json;charset=utf-8' };

export const URLS_MAP = {
    getLeads: '/api/leads/?location_string=India',
    saveLeads: '/api/leads/',
    updateLead: '/api/mark_lead',
    deleteLead: '/api/leads',
}

export const getLeadsHelper = async () => {
    const URL = `${BASE_CONFIG}${URLS_MAP.getLeads}`;

    const responsePromise = await fetch(URL, {
        method: 'GET',
        headers: contentType,
      });
    const response = await (await responsePromise).json();

    return response;
};

export const saveLeadHelper = async (leadsData) => {
    const URL = `${BASE_CONFIG}${URLS_MAP.saveLeads}`;

    const responsePromise = await fetch(URL, {
        method: 'POST',
        headers: contentType,
        body: JSON.stringify(leadsData)
      });
    const response = await (await responsePromise).json();

    return response;
};

export const updateLeadHelper = async ({id, communication}) => {
    const URL = `${BASE_CONFIG}${URLS_MAP.updateLead}/${id}`;

    const responsePromise = await fetch(URL, {
        method: 'PUT',
        headers: contentType,
        body: JSON.stringify({communication})
      });
    const response = await (await responsePromise).json();

    return response;
};

export const deleteLeadHelper = async (id) => {
    const URL = `${BASE_CONFIG}${URLS_MAP.deleteLead}/${id}`;

    await fetch(URL, {
        method: 'DELETE',
        headers: contentType,
    });

    return {success: true};
};