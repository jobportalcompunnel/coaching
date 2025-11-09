import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface ContextType {
  count: number;
  increment: () => void;
}
export const Context = createContext<ContextType | undefined>(undefined);
interface ContextComponentProps extends React.PropsWithChildren<{}> {}
export const ContextComponent: React.FC<ContextComponentProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const increment = useCallback((): void => {
    setCount((c: number) => c + 1);
  }, []);
  const value: ContextType = { count, increment };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const CabCount: React.FC = () => {
  const context = useContext(Context);  
  if (!context) {
    throw new Error('CabCount must be used within a ContextComponent');
  }
  const { count, increment } = context;
  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' ,
    transition: 'background-color 0.3s',
  };

  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <button onClick={increment} style={buttonStyle}>
        Count: {count}
      </button>
      <p style={{ fontSize: '16px', color: '#333' }}>Current count from CabCount: {count}</p>
    </div>
  );
};

// 5. Define the App Component
export default function App(): JSX.Element {
  const appStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f7f9',
    minHeight: '100vh',
    borderRadius: '12px',
  };

  const headerStyle: React.CSSProperties = {
    color: '#2c3e50',
    marginBottom: '30px',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  return (
    <div style={appStyle}>
      <h1 style={headerStyle}>TypeScript Context Example (Counter)</h1>
      <ContextComponent>
        <div style={containerStyle}>
          <CabCount />
          <CabCount />
        </div>
      </ContextComponent>
    </div>
  );
}
