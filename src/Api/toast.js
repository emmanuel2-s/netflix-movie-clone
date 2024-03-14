import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function notifySuccess(message) {
  toast.success(message);
}


export function notifyError(message) {
  toast.error(message);
}
