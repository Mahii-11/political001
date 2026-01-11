const API_BASE_URL = "https://election-backend.dotzpos.com/api";

// 🔹 Shared fetch helper
async function fetchData(url, options = {}) {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  const json = await res.json();
  return json?.data ?? [];
}

// ---------------- GET REQUESTS ----------------

export function getTopSection() {
  return fetchData(`${API_BASE_URL}/top-section-data`);
}

export function getVision() {
  return fetchData(`${API_BASE_URL}/vision-data`);
}

export function getLatestCampaign() {
  return fetchData(`${API_BASE_URL}/latest-campaign-data`);
}

export function getMissionData() {
  return fetchData(`${API_BASE_URL}/mission-data`);
}

export async function getCampaignSchedule() {
  const res = await fetch(`${API_BASE_URL}/campaign-schedule-data`);

  if (!res.ok) {
    throw new Error("Failed to fetch campaign schedule");
  }

  const json = await res.json();
  return json?.data?.data ?? [];
}

export function getLeaderMessage() {
  return fetchData(`${API_BASE_URL}/leader-message-data`);
}

export async function getVolunteer(id) {
  const res = await fetch(`${API_BASE_URL}/register-volunteer/${id}`);

  if (!res.ok) {
    throw new Error(`Couldn't find volunteer #${id}`);
  }

  const json = await res.json();
  return json?.data;
}

// ---------------- POST / PATCH ----------------

export async function createVolunteer(newVolunteer) {
  const res = await fetch(`${API_BASE_URL}/register-volunteer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newVolunteer),
  });

  if (!res.ok) {
    throw new Error("Failed creating your data");
  }

  const json = await res.json();
  return json?.data;
}

export async function updateVolunteer(id, updateObj) {
  const res = await fetch(`${API_BASE_URL}/register-volunteer/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateObj),
  });

  if (!res.ok) {
    throw new Error("Failed updating your data");
  }

  return true;
}
