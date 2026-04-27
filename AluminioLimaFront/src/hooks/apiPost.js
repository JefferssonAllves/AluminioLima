import api from "../services/api.js";
import { useState } from "react";


export function apiPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const send = async (url, data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post(url, data);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { send, loading, error };
}