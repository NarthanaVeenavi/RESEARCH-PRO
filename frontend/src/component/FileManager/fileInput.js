import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import check from "./check.png";
import styles from "./styles.module.css";

const FileInput = ({ name, label, value, type, handleInputState, ...rest }) => {
  const inputRef = useRef();
 const [Showprog, setShowprog] = useState(false);
  const [Prog, setProg] = useState(0);

  const handleUpload = () => {
    
    setShowprog(true);
    const fileName = new Date().getTime() + value.name;

    const storageRef = ref(
      storage,
      type === "submission"
        ? `/submission/${fileName}`
        : `/templates/${fileName}`
    );

    const Upload = uploadBytesResumable(storageRef, value);

    Upload.on(
      "state_changed",
      (snapshot) => {
        const uploaded = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProg(uploaded);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(Upload.snapshot.ref).then((url) => {
          handleInputState(name, url);
        });
      }
    );
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        ref={inputRef}
        onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
        value={""}
        className={styles.input}
        {...rest}
      />

      <button
        type="button"
        onClick={() => inputRef.current.click()}
        className={styles.button}
      >
        {label}
      </button>

      {type === "image" && value && (
        <img
          src={typeof value === "string" ? value : URL.createObjectURL(value)}
          alt="file"
          className={styles.preview_img}
        />
      )}
      {type === "submission" && value && (
        <audio
          src={typeof value === "string" ? value : URL.createObjectURL(value)}
          // controls
        />
      )}

      {value !== null && !Showprog && typeof value !== "string" && (
        <button onClick={handleUpload} className={styles.button}>
          Upload
        </button>
      )}
      {Showprog && Prog < 100 && (
        <div className={styles.Prog_container}>
          <p>{Prog}%</p>
        </div>
      )}
      {Prog === 100 && (
        <div className={styles.Prog_container}>
          <img src={check} alt="check circle" className={styles.check_img} />
        </div>
      )}
    </div>
  );
};

export default FileInput;
