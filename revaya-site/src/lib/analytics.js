import { supabase } from "./supabase";

const DEVICE_ID_KEY = "revaya_device_id";

export function getDeviceId() {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);

  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }

  return deviceId;
}

export async function trackEvent({
  eventName,
  pagePath = window.location.pathname,
  fileName = null,
  status = null,
  errorMessage = null,
  metadata = null,
}) {
  const deviceId = getDeviceId();

  const { error } = await supabase.from("analytics_events").insert([
    {
      event_name: eventName,
      device_id: deviceId,
      page_path: pagePath,
      file_name: fileName,
      status: status,
      error_message: errorMessage,
      metadata: metadata,
    },
  ]);

  if (error) {
    console.error("Analytics tracking error:", error);
  }
}