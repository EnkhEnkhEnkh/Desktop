import QRCode from "qrcode";

export async function generateQRCode(data: {
  id: string;
  name: string;
}): Promise<string> {
  try {
    const jsonData = JSON.stringify(data);
    const qrCode = await QRCode.toDataURL(jsonData);
    return qrCode;
  } catch (error) {
    console.error("QR код үүсгэхэд алдаа гарлаа: ", error);
    throw error;
  }
}
