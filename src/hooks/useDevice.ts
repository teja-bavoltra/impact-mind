import { useEffect, useState } from "react";

export function useDevice() {
  const [device, setDevice] = useState("unknown");

  useEffect(() => {
    if (window.innerWidth < 768) setDevice("mobile");
    else setDevice("desktop");
  }, []);

  return device;
}
