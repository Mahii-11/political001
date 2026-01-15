import { string } from "zod";

const API_BASE_URL = "https://election-backend.dotzpos.com/api";

// 🔹 Shared fetch helper with error handling
async function fetchData(url, options = {}) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Request failed: ${res.status} - ${errorText}`);
    }

    const json = await res.json();
    return json?.data ?? [];
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return []; // fallback empty array
  }
}

// ---------------- GET REQUESTS ----------------

export async function getTopSection() {
  try {
    return await fetchData(`${API_BASE_URL}/top-section-data`);
  } catch (error) {
    console.error("getTopSection error:", error);
    return [];
  }
}

export async function getVision() {
  try {
    return await fetchData(`${API_BASE_URL}/vision-data`);
  } catch (error) {
    console.error("getVision error:", error);
    return [];
  }
}

export async function getLatestCampaign() {
  try {
    return await fetchData(`${API_BASE_URL}/latest-campaign-data`);
  } catch (error) {
    console.error("getLatestCampaign error:", error);
    return [];
  }
}

export async function getMissionData() {
  try {
    return await fetchData(`${API_BASE_URL}/mission-data`);
  } catch (error) {
    console.error("getMissionData error:", error);
    return [];
  }
}

export async function getBioData() {
  try {
    const res = await fetch(`${API_BASE_URL}/bio-api-data`);
    const data = await res.json();
    console.log("fetched data", data);
    return data;
  } catch (error) {
    console.error("getBioData error:", error);
    return null;
  }
}

export async function getCampaignSchedule() {
  try {
    const res = await fetch(`${API_BASE_URL}/campaign-schedule-data`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to fetch campaign schedule: ${res.status} - ${errorText}`
      );
    }

    const json = await res.json();
    return json?.data?.data ?? [];
  } catch (error) {
    console.error("getCampaignSchedule error:", error);
    return [];
  }
}

export async function getGallery() {
  try {
    const res = await fetch(`${API_BASE_URL}/get-gallery-data`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to fetch campaign schedule: ${res.status} - ${errorText}`
      );
    }
    const json = await res.json();
    return json?.data.data ?? [];
  } catch (error) {
    console.error("getGallery error:", error);
    return [];
  }
}

export async function getLeaderMessage() {
  try {
    return await fetchData(`${API_BASE_URL}/leader-message-data`);
  } catch (error) {
    console.error("getLeaderMessage error:", error);
    return [];
  }
}

export async function getWards() {
  try {
    const res = await fetch(`${API_BASE_URL}/ward-list`);
    if (!res.ok) {
      throw new Error(`Failed to fetch wards: ${res.status}`);
    }
    const data = await res.json();
    // ✅ Extract wardList from response
    return data?.wardList ?? [];
  } catch (error) {
    console.error("getWards error:", error);
    return [];
  }
}

export async function getVoteCenter(params) {
  try {
    const name = params.name? params.name : null;
    const ward_no = params.ward_no? params.ward_no : null;
    const date_of_birth = params.dob? params.dob : null;
    console.log("API call params:", { name, ward_no, date_of_birth });
    const res = await fetch(`${API_BASE_URL}/voter-list?name=${name}&ward_no=${ward_no}&date_of_birth=${date_of_birth}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch wards: ${res.status}`);
    } const data = await res.json();
    // ✅ Extract wardList from response 
    console.log("Vote Center API response data:", data);
    return data ?? [];
  } catch (error) {
    console.error("getWards error:", error);
    return [];
  }
}

// ---------------- POST / PATCH ----------------
export async function createVolunteer(formData) {
  try {
    // ফাইল + text data সব FormData তে already আছে
    const res = await fetch(`${API_BASE_URL}/register-volunteer`, {
      method: "POST",
      body: formData, // ✅ FormData direct
      // Headers কে সরাসরি না দেওয়াই ভালো, browser automatically multipart/form-data boundary handle করে
    });

    if (!res.ok) {
      // Backend থেকে error message
      const errorText = await res.text();
      throw new Error(errorText || "Volunteer registration failed");
    }

    // Backend response JSON হিসেবে return করবে
    const json = await res.json();
    console.log("createVolunteer response:", json);
    return json;
  } catch (error) {
    console.error("createVolunteer error:", error);
    throw error;
  }
}

export async function updateVolunteer(id, updateObj) {
  try {
    const res = await fetch(`${API_BASE_URL}/register-volunteer/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed updating your data: ${res.status} - ${errorText}`
      );
    }

    return true;
  } catch (error) {
    console.error(`updateVolunteer error (id: ${id}):`, error);
    return false;
  }
}

export async function loginUser(credentials) {
  try {
    const res = await fetch(`${API_BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      const errorText = await res.text(); // backend error text
      throw new Error(errorText.substring(0, 150) || "Login failed");
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.error("loginUser error:", error);
    // throw again to handle in Login.jsx
    throw error;
  }
}

/**
 * Generic function to handle POST requests with FormData (for files)
 * @param {string} endpoint - API endpoint (e.g., /store-complain)
 * @param {FormData} formData - FormData object containing fields & files
 * @returns {Promise<object>} - JSON response from backend
 */
export async function postFormData(endpoint, formData) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      body: formData, // FormData → browser auto sets multipart/form-data
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data?.message || `Request failed (${res.status})`,
      };
    }

    return data;
  } catch (error) {
    console.error("postFormData error:", error);
    return {
      success: false,
      message: "Network error or server not responding",
    };
  }
}

/**
 * Complaint submission function
 * @param {FormData} formData - FormData containing complaint details
 */
export async function storeComplaint(formData) {
  return postFormData("/store-complain", formData);
}
