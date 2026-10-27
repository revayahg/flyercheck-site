import React from "react";

export default function FlyerCheckShot() {
  return (
    <div className="flyercheck-shot" aria-hidden="true">
      <div className="flyercheck-shot-panel">
        <div className="flyercheck-shot-drop">
          <p className="flyercheck-shot-drop-title">Drop or paste your flyer</p>
          <p className="flyercheck-shot-drop-meta">PNG, JPEG, or WEBP</p>
        </div>
        <ul className="flyercheck-shot-flags">
          <li>Text readability</li>
          <li>Contrast issues</li>
          <li>Missing details</li>
        </ul>
      </div>
    </div>
  );
}
