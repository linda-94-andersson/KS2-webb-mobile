import axios from "axios";

export const getInvoices = async () => {
  const { data } = await axios.get<Invoice[]>(
    `http://${import.meta.env.VITE_URL_KEY}/invoices`
  );
  return data;
};

export const addInvoice = async (
  id: string,
  status: string,
  due_date: number,
  sum: number,
  customer_name: string,
  created_date: number
) => {
  const res = await axios.request<Invoice[]>({
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
