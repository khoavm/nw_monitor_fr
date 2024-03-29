import sig from './axios_config';

export const getAllEvents = async () => {
  const response = await sig.get('/events');
  return response.data;
};
export const getEventsBySignature = async (sigName) => {
  const response = await sig.get(`/events/getEventBySignature/${sigName}`);
  return response.data;
};
export const getEventByDate = async (startDate, endDate) => {
  const response = await sig.get('/events/getEventByDate', {
    params: {
      startDate,
      endDate,
    },
  });
  return response.data;
};

export const getEventStatistic = async (network, dates) => {
  const response = await sig.get(
    `/events/getTrafficByDate/${network}/${dates}`
  );
  return response.data;
};
export const getTodayTraffic = async (network) => {
  const response = await sig.get(`/events/getTodayTraffic/${network}`);
  return response.data;
};
export const getMonthTraffic = async (network) => {
  const response = await sig.get(`/events/getMonthTraffic/${network}`);
  return response.data;
};

export const getPriorityCount = async () => {
  const response = await sig.get('/events/getPriorities');
  return response.data;
};
export const getPriorityTodayCount = async () => {
  const response = await sig.get('/events/getTodayPriorities');
  return response.data;
};
export const getPriorityDetail = async (id) => {
  const response = await sig.get(`/events/getPriorityDetail/${id}`);
  return response.data;
};
export const getPriorityTodayDetail = async (id) => {
  const response = await sig.get(`/events/getTodayPriorityDetail/${id}`);
  return response.data;
};

export const getTime = async (ip, target) => {
  const response = await sig.get(`/events/getTime/${ip}/${target}`);
  return response.data;
};
export const getTodayTime = async (ip, target) => {
  const response = await sig.get(`/events/getTodayTime/${ip}/${target}`);
  return response.data;
};
