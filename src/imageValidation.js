import imageCompression from 'browser-image-compression';

const API_URL = 'https://api.mandarin.weniv.co.kr';

const imageValidation = async (
  e,
  maxSize = 1,
  maxHeight = 320,
  setSelectedImage,
  setShowSizeOverToast,
  setShowWrongExtensionToast,
) => {
  const allowedExtensionsRegex = /\.(jpg|gif|png|jpeg|bmp|tif|heic)$/i;
  const maxImageSize = 10 * 1024 * 1024;
  const imageFile = e.target.files[0];
  if (imageFile) {
    if (imageFile.size > maxImageSize) {
      setShowSizeOverToast(true);
      setTimeout(() => setShowSizeOverToast(false), 3000);
      e.target.value = '';
      return;
    }
    const fileExtension = '.' + imageFile.name.split('.').pop().toLowerCase();
    if (!allowedExtensionsRegex.test(fileExtension)) {
      setShowWrongExtensionToast(true);
      setTimeout(() => setShowWrongExtensionToast(false), 3000);
      e.target.value = '';
      return;
    }

    try {
      const compressedImageFile = await imageCompression(imageFile, {
        maxSizeMb: maxSize,
        maxWidthOrHeight: maxHeight,
      });
      const reader = new FileReader();
      reader.readAsDataURL(compressedImageFile);
      reader.onloadend = () => {
        const base64data = reader.result;
        handlingData(base64data, setSelectedImage);
      };
    } catch (error) {
      console.error(error);
    }
  } else {
    e.target.value = '';
  }
};

const handlingData = async (dataURL, setSelectedImage) => {
  const byteString = atob(dataURL.split(',')[1]);

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ia], {
    type: 'image/jpeg',
  });
  const file = new File([blob], 'image.jpg');

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch(`${API_URL}/image/uploadfile`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const resData = await response.json();
    const imageUrl = `${API_URL}/` + resData.filename;
    setSelectedImage(imageUrl);
  } catch (error) {
    console.error(error);
  }
};

export default imageValidation;
