import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getInvoices } from "../data/getInvoices";

type Value = {
  invoiceValue: {
    invoices: Invoice[] | undefined;
    setInvoices: React.Dispatch<React.SetStateAction<Invoice[] | undefined>>;
  };
  getInvoiceData: () => Promise<void>;
};

const InvoiceContext = createContext<Value | undefined>(undefined);

export const useInvoice = () => {
  const context = useContext(InvoiceContext);

  if (context === undefined) {
    throw new Error("useContext must be used inside Context");
  }

  return context;
};

export function InvoiceProvider({ children }: Props) {
  const [invoices, setInvoices] = useState<Invoice[] | undefined>();

  const invoiceValue = useMemo(
    () => ({ invoices, setInvoices }),
    [invoices, setInvoices]
  );

  const getInvoiceData = async () => {
    const data = await getInvoices();
    setInvoices(data);
  };

  useEffect(() => {
    getInvoiceData();
  }, []);

  return (
    <InvoiceContext.Provider value={{ invoiceValue, getInvoiceData }}>
      {children}
    </InvoiceContext.Provider>
  );
}
