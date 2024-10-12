import Swal from 'sweetalert2';

export const showLoader = () => {
  Swal.fire({
    title: "Quick Helper is scanning your website",
    html: "Please wait while we fetch the data...",
    icon: "info",
    willOpen: () => {
      Swal.showLoading();
    }
  });
};

export const hideLoader = () => {
  Swal.close();
};

export const showError = (message) => {
  Swal.fire({
    title: 'Error!',
    text: message,
    icon: 'error',
    confirmButtonText: 'OK'
  });
};

export const updateSuccess = () => {
  Swal.update({
    title: "Data Retrieved!",
    html: "We have successfully fetched the data.",
    icon: "success"
  });
};
