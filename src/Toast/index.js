import { toast } from 'react-toastify';

export function Toast() {
  function handleDefault(message) {
    toast(message);
  }
  function handleError(message) {
    toast.error(message);
  }
  function handleSuccess(message) {
    toast.success(message);
  }
  function handleInfo(message) {
    toast.info(message);
  }

  return {
    handleDefault,
    handleError,
    handleSuccess,
    handleInfo
  }
}