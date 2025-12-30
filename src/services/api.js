const API_BASE_URL = "https://election-backend.dotzpos.com/api";

export async function getTopSection() {
  const res = await fetch(`${API_BASE_URL}/top-section-data`);
  const json = await res.json();
  return json.data || [];
}

export async function getVision() {
  const res = await fetch(`${API_BASE_URL}/vision-data`);
  const json = await res.json();
  return json.data || [];
}

export async function getLatestCampaign() {
  const res = await fetch(`${API_BASE_URL}/latest-campaign-data`);
  const json = await res.json();
  return json.data || [];
}

export async function getMissionData() {
  const res = await fetch(`${API_BASE_URL}/mission-data`);
  const json = await res.json();
  return json.data || [];
}

export async function getCampaignSchedule() {
  const res = await fetch(`${API_BASE_URL}/campaign-schedule-data`);
  const json = await res.json();
  return json.data || [];
}

export async function getLeaderMessage() {
  const res = await fetch(`${API_BASE_URL}/leader-message-data`);
  const json = await res.json();
  return json.data || [];
}
