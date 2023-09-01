import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [file]);

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col items-center">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Загрузить фото
        </label>

        <p className="mt-2 text-white text-xs truncate">
          {file === '' ? 'Файл не выбран' : file.name}
        </p>
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Превью изображения"
              style={{ width: '100px', height: '100px' }}
            />
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="filled"
          title="Логотип"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Заполнить"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
