import axios from './axios_config';

export const getAllNodes = async () => {
  const response = await axios.get('/nodes');

  return response.data;
};

export const getNodesByNetWork = async (network) => {
  const response = await axios.get(`/nodes/${network}`);

  return response.data;
};

export const getNodesByIP = async (ip) => {
  const response = await axios.get(`/nodes/ip/${ip}`);

  return response.data;
};
export const getNodesCount = async (iface) => {
  const response = await axios.get(`/nodes/getNodeCount/${iface}`);

  return response.data;
};
export const getNodeEvents = async (name) => {
  const response = await axios.get(`/nodes/getNodeEvents/${name}`);

  return response.data;
};
export const addNode = async (ip, name, type) => {
  const response = await axios.get('/nodes/addNode', {
    params: {
      ip,
      name,
      type,
    },
  });

  return response.data;
};
