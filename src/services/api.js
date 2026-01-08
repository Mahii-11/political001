/* eslint-disable no-unused-vars */
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

  if (!res.ok) {
    throw new Error("Failed to fetch campaign schedule");
  }

  const json = await res.json();
  return json?.data?.data || [];
}

export async function getLeaderMessage() {
  const res = await fetch(`${API_BASE_URL}/leader-message-data`);
  const json = await res.json();
  return json.data || [];
}

export async function getVolunteer(id) {
  const res = await fetch(`${API_BASE_URL}/register-volunteer/${id}`);
  if (!res.ok) throw Error(`Couldn't find data #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createVolunteer(newVolunteer) {
  try {
    const res = await fetch(`${API_BASE_URL}/register-volunteer`, {
      method: "POST",
      body: JSON.stringify(newVolunteer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your data");
  }
}

export async function updateVolunteer(id, updateObj) {
  try {
    const res = await fetch(`${API_BASE_URL}/register-volunteer/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your data");
  }
}
