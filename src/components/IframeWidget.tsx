
import { useEffect, useRef } from 'react';

interface CustomData {
  userId?: string | number;
  userData?: any;
  [key: string]: any;
}

export function IframeWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const setCustomData = (customData: CustomData) => {
    if (!iframeRef.current) return;
    
    const baseUrl = 'https://platform.zaia.app/embed/chat/44376';
    const encodedCustomData = encodeURIComponent(JSON.stringify(customData));
    const fullUrl = `${baseUrl}?custom=${encodedCustomData}`;
    
    iframeRef.current.src = fullUrl;
  };
  
  useEffect(() => {
    // Example custom data - replace with your actual data when needed
    const customData: CustomData = {
      userId: "demo-user",
      userData: JSON.stringify({
        name: "Visitante",
        type: "website-visitor",
      })
    };
    
    // Set the custom data (uncomment when needed)
    // setCustomData(customData);
  }, []);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <iframe 
        id="widget-iframe"
        ref={iframeRef}
        src="https://platform.zaia.app/embed/chat/44376"
        style={{
          border: '1px solid #eee', 
          width: '400px', 
          height: '600px', 
          borderRadius: '20px',
          display: 'none' // Hidden by default, change to 'block' to enable
        }}
        title="Iza da Trilha Chat Widget"
      />
    </div>
  );
}
