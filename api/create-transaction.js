import midtransClient from "midtrans-client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { nama, nominal } = req.body;

    if (!nama || !nominal) {
      return res.status(400).json({ message: "Data tidak lengkap" });
    }

    // SNAP MIDTRANS
    const snap = new midtransClient.Snap({
      isProduction: false, // sandbox dulu
      serverKey: process.env.MIDTRANS_SERVER_KEY,
    });

    const parameter = {
      transaction_details: {
        order_id: "DONASI-" + Date.now(),
        gross_amount: Number(nominal),
      },
      customer_details: {
        first_name: nama,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    return res.status(200).json({
      token: transaction.token,
    });
  } catch (error) {
    console.error("MIDTRANS ERROR:", error);
    return res.status(500).json({ message: "Midtrans error" });
  }
}
