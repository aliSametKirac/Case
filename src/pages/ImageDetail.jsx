import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/pages/ImageDetail.module.sass";

function ImageDetail() {
  const { id } = useParams();

  return (
    <div className={styles["image-detail-container"]}>
      <h1>
        Görsel Yükleniyor <i className="fa fa-spinner fa-spin"></i>
      </h1>
    </div>
  );
}

export default ImageDetail;
