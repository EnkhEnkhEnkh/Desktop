import { useState } from "react";
import QRCode from "qrcode";

interface AddQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddQRModal: React.FC<AddQRModalProps> = ({ isOpen, onClose }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const saveQrCodeToLocalStorage = (qrCode: string) => {
    try {
      // Get existing QR codes from localStorage
      const existingData = JSON.parse(localStorage.getItem("qrCodes") || "[]");
      const newQrCode = { id, name, qrCodeUrl };
      const updatedData = [...existingData, newQrCode];

      // Save updated data back to localStorage
      localStorage.setItem("qrCodes", JSON.stringify(updatedData));
      alert("QR код Local Storage руу амжилттай хадгалагдлаа.");

      // Clear fields and close modal
      setId("");
      setName("");
      setQrCodeUrl("");
      onClose();
    } catch (error) {
      console.error("Local Storage руу хадгалахад алдаа гарлаа:", error);
      alert("Алдаа гарлаа, дахин оролдоно уу.");
    }
  };

  const saveQrCode = async () => {
    if (!id.trim() || !name.trim()) {
      alert("ID болон Нэрийг оруулна уу.");
      return;
    }
    try {
      const qrData = JSON.stringify({ id, name });
      const qrCode = await QRCode.toDataURL(qrData);
      setQrCodeUrl(qrCode);

      // Save to Local Storage
      // saveQrCodeToLocalStorage(qrCode);
    } catch (error) {
      console.error("QR код үүсгэхэд алдаа гарлаа", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-4 bg-white rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4">QR нэмэх</h3>
        <input
          type="text"
          placeholder="ID оруулна уу"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Нэр оруулна уу"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4"
        />
        {qrCodeUrl && (
          <img
            src={qrCodeUrl}
            alt="Generated QR Code"
            className="w-32 h-32 mx-auto mb-4"
          />
        )}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
            disabled={isSaving}
          >
            Болих
          </button>
          <button
            onClick={saveQrCode}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            disabled={isSaving}
          >
            {isSaving ? "Хадгалж байна..." : "Хадгалах"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQRModal;
