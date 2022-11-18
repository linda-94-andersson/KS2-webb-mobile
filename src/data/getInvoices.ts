import axios from "axios";

type Invoice = {
  id: string;
  status: string;
  due_date: number;
  sum: number;
  customer_name: string;
  created_date: number;
  map: Function;
};

export const getInvoices = async () => {
  const { data } = await axios.get<Invoice>(
    `http://${import.meta.env.VITE_URL_KEY}/invoices`
  );
  return data;
};

export const addInvoice = async (
  id: Invoice,
  status: Invoice,
  due_date: Invoice,
  sum: Invoice,
  customer_name: Invoice,
  created_date: Invoice
) => {
  const res = await axios.request<Invoice>({
    method: "post",
    url: `http://${import.meta.env.VITE_URL_KEY}/invoices`,
    data: {
      id: id,
      status: status,
      due_date: due_date,
      sum: sum,
      customer_name: customer_name,
      created_date: created_date,
    },
  });
  return res.data;
};
