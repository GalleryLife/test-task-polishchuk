import React, {useRef} from 'react';
import styles from './File.module.scss';

const File = ({handleSetPhoto, fieldValue, isError}) => {
  const refFile = useRef(null)
  
  const handleUpload = () => {
    refFile.current.click()
  }
  
  const textSlice = (text) => {
    if (text.length > 12) {
      return  text.slice(0, 13).concat('...')
    }
    return text
  }
  
  return (
    <div className={styles.form__control}>
      <span className={styles.control__button}>
      <button type="button" onClick={handleUpload}>Upload</button>
        {fieldValue ? textSlice(fieldValue.name) : 'Upload your photo'}
      </span>
      <input type="file" ref={refFile} name='photo' onChange={handleSetPhoto}/>
      <p>{isError && 'Error'}</p>
    </div>
  )
}

export default File;
