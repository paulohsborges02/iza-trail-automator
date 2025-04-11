
import { useEffect } from 'react';

// Declare the window interface extension for TypeScript
declare global {
  interface Window {
    ZWidget?: {
      AgentURL: string;
      CustomData?: any;
      setCustomData?: (data: any) => void;
    };
  }
}

export function TestWidget() {
  useEffect(() => {
    // This component demonstrates how to set custom data for the Zaia widget
    // You can modify this based on your actual user data requirements
    if (window.ZWidget && window.ZWidget.setCustomData) {
      window.ZWidget.setCustomData({
        userId: "demo-user",
        userEmail: "visitor@example.com"
      });
    }
  }, []);

  return null; // This component doesn't render anything visible
}
